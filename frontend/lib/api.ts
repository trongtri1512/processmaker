import axios from "axios";

// Server-side: call api container directly via internal Docker network
// Client-side: call via /laravel proxy (Next.js rewrites)
const isServer = typeof window === "undefined";
const baseURL = isServer
  ? `${process.env.LARAVEL_INTERNAL_URL || "http://api:80"}/api/1.0`
  : `/laravel/api/1.0`;

export const apiClient = axios.create({
  baseURL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  withCredentials: false,
});

// Attach auth token (call this from server components with session token)
export function createAuthClient(token: string) {
  return axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

// ─── Typed API helpers ────────────────────────────────────────────────────────

export const api = {
  // Auth
  login: (username: string, password: string) =>
    apiClient.post("/login", { username, password }),

  // Users
  users: {
    list: (client: ReturnType<typeof createAuthClient>, params?: object) =>
      client.get("/users", { params }),
    show: (client: ReturnType<typeof createAuthClient>, id: string) =>
      client.get(`/users/${id}`),
    me: (client: ReturnType<typeof createAuthClient>) =>
      client.get("/users/me"),
  },

  // Tasks
  tasks: {
    list: (client: ReturnType<typeof createAuthClient>, params?: object) =>
      client.get("/tasks", { params }),
    show: (client: ReturnType<typeof createAuthClient>, id: string) =>
      client.get(`/tasks/${id}`),
    complete: (
      client: ReturnType<typeof createAuthClient>,
      id: string,
      data: object
    ) => client.put(`/tasks/${id}`, data),
  },

  // Requests
  requests: {
    list: (client: ReturnType<typeof createAuthClient>, params?: object) =>
      client.get("/requests", { params }),
    show: (client: ReturnType<typeof createAuthClient>, id: string) =>
      client.get(`/requests/${id}`),
    start: (
      client: ReturnType<typeof createAuthClient>,
      processId: string,
      eventId: string,
      data?: object
    ) =>
      client.post(`/processes/${processId}/events/${eventId}`, data || {}),
  },

  // Processes
  processes: {
    list: (client: ReturnType<typeof createAuthClient>, params?: object) =>
      client.get("/processes", { params }),
    show: (client: ReturnType<typeof createAuthClient>, id: string) =>
      client.get(`/processes/${id}`),
    startEvents: (client: ReturnType<typeof createAuthClient>, id: string) =>
      client.get(`/process_bookmarks/processes/${id}/start_events`),
  },

  // Notifications
  notifications: {
    list: (client: ReturnType<typeof createAuthClient>, params?: object) =>
      client.get("/notifications", { params }),
    readAll: (client: ReturnType<typeof createAuthClient>) =>
      client.put("/read_all_notifications", {}),
  },

  // Comments
  comments: {
    list: (client: ReturnType<typeof createAuthClient>, params?: object) =>
      client.get("/comments", { params }),
    store: (client: ReturnType<typeof createAuthClient>, data: object) =>
      client.post("/comments", data),
  },

  // Groups
  groups: {
    list: (client: ReturnType<typeof createAuthClient>, params?: object) =>
      client.get("/groups", { params }),
  },
};
