import { auth } from "@/lib/auth";
import { createAuthClient } from "@/lib/api";
import { redirect } from "next/navigation";
import { CheckSquare, FileText, GitBranch, TrendingUp, Clock, AlertTriangle, Activity } from "lucide-react";
import { cn, statusColor, formatDateTime } from "@/lib/utils";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");
  const client = createAuthClient((session as any).apiToken);

  let tasks: any[] = [], requests: any[] = [];
  try {
    const [tasksRes, requestsRes] = await Promise.allSettled([
      client.get("/tasks", { params: { per_page: 5, status: "ACTIVE" } }),
      client.get("/requests", { params: { per_page: 5 } }),
    ]);
    if (tasksRes.status === "fulfilled") tasks = tasksRes.value.data?.data ?? [];
    if (requestsRes.status === "fulfilled") requests = requestsRes.value.data?.data ?? [];
  } catch {}

  const stats = [
    { label: "Active Tasks",     value: tasks.length,    icon: CheckSquare, color: "text-blue-400",   bg: "bg-blue-500/10" },
    { label: "My Requests",      value: requests.length, icon: FileText,    color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "In Progress",      value: requests.filter((r: any) => r.status === "ACTIVE").length, icon: Activity, color: "text-amber-400", bg: "bg-amber-500/10" },
    { label: "Overdue Tasks",    value: 0,               icon: AlertTriangle, color: "text-red-400",  bg: "bg-red-500/10" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-slate-400 mt-0.5">
          Welcome back, {session.user?.name}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">{s.label}</p>
                <p className="text-3xl font-bold text-white mt-1">{s.value}</p>
              </div>
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", s.bg)}>
                <s.icon className={cn("w-5 h-5", s.color)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Tasks */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[hsl(var(--border))]">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-blue-400" />
              <h2 className="text-sm font-semibold text-white">My Tasks</h2>
            </div>
            <a href="/tasks" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">View all →</a>
          </div>
          <div className="divide-y divide-[hsl(var(--border))]">
            {tasks.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <CheckSquare className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <p className="text-sm text-slate-500">No pending tasks</p>
              </div>
            ) : tasks.map((task: any) => (
              <a key={task.id} href={`/tasks/${task.id}`} className="flex items-center justify-between px-5 py-3.5 hover:bg-[hsl(var(--secondary))] transition-colors group">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate group-hover:text-blue-300 transition-colors">
                    {task.element_name || task.process_request?.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {formatDateTime(task.due_at)}
                  </p>
                </div>
                <span className={cn("text-xs px-2 py-0.5 rounded-full border shrink-0 ml-3", statusColor(task.status))}>
                  {task.status}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Recent Requests */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[hsl(var(--border))]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              <h2 className="text-sm font-semibold text-white">Recent Requests</h2>
            </div>
            <a href="/requests" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">View all →</a>
          </div>
          <div className="divide-y divide-[hsl(var(--border))]">
            {requests.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <FileText className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <p className="text-sm text-slate-500">No requests yet</p>
              </div>
            ) : requests.map((req: any) => (
              <a key={req.id} href={`/requests/${req.id}`} className="flex items-center justify-between px-5 py-3.5 hover:bg-[hsl(var(--secondary))] transition-colors group">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate group-hover:text-blue-300 transition-colors">
                    {req.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> #{req.case_number}  ·  {formatDateTime(req.created_at)}
                  </p>
                </div>
                <span className={cn("text-xs px-2 py-0.5 rounded-full border shrink-0 ml-3", statusColor(req.status))}>
                  {req.status}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
