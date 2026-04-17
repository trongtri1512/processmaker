import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

const LARAVEL_URL = process.env.LARAVEL_INTERNAL_URL || "http://api:80";

export const { handlers, signIn, signOut, auth } = NextAuth({
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
        token.apiToken = (user as any).apiToken;
        token.id = user.id;
        token.username = (user as any).username;
        token.isAdmin = (user as any).is_administrator;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
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
