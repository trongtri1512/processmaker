import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

const LARAVEL_URL = process.env.LARAVEL_INTERNAL_URL || "http://api:80";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            `${LARAVEL_URL}/api/1.0/login`,
            {
              username: credentials.username,
              password: credentials.password,
            },
            { headers: { Accept: "application/json" } }
          );
          const { token, user } = response.data;
          if (token && user) {
            return { ...user, apiToken: token };
          }
          return null;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as any;
        token.apiToken = u.apiToken;
        token.id = u.id;
        token.username = u.username;
        token.isAdmin = u.is_administrator;
        // Map name from fullname or firstname+lastname
        token.name = u.fullname || `${u.firstname ?? ""} ${u.lastname ?? ""}`.trim() || u.username;
        token.email = u.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.name = token.name as string;
      session.user.email = token.email as string;
      (session as any).apiToken = token.apiToken;
      (session as any).username = token.username;
      (session as any).isAdmin = token.isAdmin;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: { strategy: "jwt", maxAge: 60 * 60 * 8 },
});
