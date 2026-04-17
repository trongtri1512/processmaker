import { auth } from "@/lib/auth";
import { createAuthClient } from "@/lib/api";
import { redirect } from "next/navigation";
import { cn, statusColor, formatDateTime } from "@/lib/utils";
import {
  Users, Plus, Search, Shield, UserCheck,
  UserX, ChevronRight, Mail, Calendar,
} from "lucide-react";

export const metadata = { title: "Users – Admin – ProcessMaker" };

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; page?: string; q?: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  const client = createAuthClient((session as any).apiToken);
  const params = await searchParams;

  const status = params.status || "ACTIVE";
  const page = Number(params.page) || 1;
  const q = params.q || "";

  let users: any[] = [];
  let meta: any = {};
  try {
    const res = await client.get("/users", {
      params: {
        status,
        page,
        per_page: 20,
        filter: q || undefined,
        order_by: "username",
      },
    });
    users = res.data?.data ?? [];
    meta = res.data?.meta ?? {};
  } catch {}

  const tabs = [
    { label: "Active",   value: "ACTIVE" },
    { label: "Inactive", value: "INACTIVE" },
    { label: "All",      value: "" },
  ];

  const roleLabels: Record<string, string> = {
    PROCESSMAKER_ADMIN: "Admin",
    PROCESSMAKER_MANAGER: "Manager",
    PROCESSMAKER_OPERATOR: "User",
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Users</h1>
          <p className="text-sm text-slate-400 mt-0.5">{meta.total ?? 0} users total</p>
        </div>
        <a
          href="/admin/users/create"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-blue-600/20"
        >
          <Plus className="w-4 h-4" /> Add User
        </a>
      </div>

      {/* Search + Tabs */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1 bg-[hsl(var(--secondary))] p-1 rounded-lg">
          {tabs.map((tab) => (
            <a
              key={tab.value}
              href={`/admin/users?status=${tab.value}&q=${q}`}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                status === tab.value
                  ? "bg-[hsl(var(--card))] text-white shadow"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {tab.label}
            </a>
          ))}
        </div>

        <form className="flex items-center gap-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg px-3 py-1.5 flex-1 max-w-xs">
          <Search className="w-4 h-4 text-slate-500 shrink-0" />
          <input
            name="q"
            defaultValue={q}
            placeholder="Search name, email..."
            className="bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none flex-1"
          />
          <input type="hidden" name="status" value={status} />
        </form>
      </div>

      {/* Table */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
        {users.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-14">
            <Users className="w-10 h-10 text-slate-600 mb-3" />
            <p className="text-slate-400 font-medium">No users found</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-[hsl(var(--border))]">
                {["User", "Email", "Role", "Status", "Last Login", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[hsl(var(--border))]">
              {users.map((user: any) => (
                <tr key={user.id} className="hover:bg-[hsl(var(--secondary))] transition-colors group">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold shrink-0">
                        {user.firstname?.[0]?.toUpperCase() ?? "?"}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                          {user.fullname || `${user.firstname} ${user.lastname}`}
                        </p>
                        <p className="text-xs text-slate-500">@{user.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5 text-sm text-slate-400">
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      {user.email}
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Shield className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-slate-300">
                        {user.is_administrator ? (
                          <span className="text-amber-400 font-medium">Admin</span>
                        ) : (
                          "User"
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className={cn("text-xs px-2 py-0.5 rounded-full border", statusColor(user.status))}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="w-3 h-3" />
                      {formatDateTime(user.loggedin_at) || "Never"}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <a
                      href={`/admin/users/${user.id}`}
                      className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      Edit <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Pagination */}
        {meta.last_page > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-[hsl(var(--border))]">
            <p className="text-xs text-slate-500">Page {meta.current_page} of {meta.last_page}</p>
            <div className="flex gap-2">
              {page > 1 && (
                <a href={`/admin/users?status=${status}&page=${page - 1}&q=${q}`}
                  className="px-3 py-1.5 text-xs bg-[hsl(var(--secondary))] text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Previous
                </a>
              )}
              {page < meta.last_page && (
                <a href={`/admin/users?status=${status}&page=${page + 1}&q=${q}`}
                  className="px-3 py-1.5 text-xs bg-[hsl(var(--secondary))] text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Next
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
