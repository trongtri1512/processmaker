import { auth } from "@/lib/auth";
import { createAuthClient } from "@/lib/api";
import { redirect } from "next/navigation";
import { cn, statusColor, formatDateTime } from "@/lib/utils";
import {
  CheckSquare, Clock, User, Search, Filter,
  ChevronRight, AlertCircle, CheckCircle2,
} from "lucide-react";

export const metadata = { title: "My Tasks – ProcessMaker" };

export default async function TasksPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; page?: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  const client = createAuthClient((session as any).apiToken);
  const params = await searchParams;

  const status = params.status || "ACTIVE";
  const page = Number(params.page) || 1;

  let tasks: any[] = [];
  let meta: any = {};
  try {
    const res = await client.get("/tasks", {
      params: { status, page, per_page: 15, order_by: "due_at", order_direction: "asc" },
    });
    tasks = res.data?.data ?? [];
    meta = res.data?.meta ?? {};
  } catch {}

  const tabs = [
    { label: "Active", value: "ACTIVE" },
    { label: "Self Service", value: "SELF_SERVICE" },
    { label: "Completed", value: "CLOSED" },
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">My Tasks</h1>
          <p className="text-sm text-slate-400 mt-0.5">
            {meta.total ?? 0} tasks total
          </p>
        </div>
      </div>

      {/* Status tabs */}
      <div className="flex items-center gap-1 bg-[hsl(var(--secondary))] p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <a
            key={tab.value}
            href={`/tasks?status=${tab.value}`}
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

      {/* Table */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <CheckCircle2 className="w-10 h-10 text-slate-600 mb-3" />
            <p className="text-slate-400 font-medium">No tasks found</p>
            <p className="text-slate-600 text-sm mt-1">
              {status === "ACTIVE" ? "You're all caught up! 🎉" : "Nothing here yet"}
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-[hsl(var(--border))]">
                {["Task", "Process", "Case #", "Due Date", "Status", ""].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[hsl(var(--border))]">
              {tasks.map((task: any) => {
                const isOverdue =
                  task.due_at && new Date(task.due_at) < new Date() && task.status === "ACTIVE";
                return (
                  <tr
                    key={task.id}
                    className="hover:bg-[hsl(var(--secondary))] transition-colors group"
                  >
                    <td className="px-4 py-3.5">
                      <div className="flex items-start gap-2">
                        {isOverdue && (
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        )}
                        <p className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                          {task.element_name || "Task"}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <p className="text-sm text-slate-300 truncate max-w-40">
                        {task.process_request?.name ?? "—"}
                      </p>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="text-sm text-slate-400">
                        #{task.process_request?.case_number ?? "—"}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className={cn("flex items-center gap-1.5 text-sm", isOverdue ? "text-red-400" : "text-slate-400")}>
                        <Clock className="w-3.5 h-3.5" />
                        {formatDateTime(task.due_at)}
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={cn("text-xs px-2 py-1 rounded-full border", statusColor(task.status))}>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <a
                        href={`/tasks/${task.id}`}
                        className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                      >
                        Open <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {/* Pagination */}
        {meta.last_page > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-[hsl(var(--border))]">
            <p className="text-xs text-slate-500">
              Page {meta.current_page} of {meta.last_page}
            </p>
            <div className="flex gap-2">
              {page > 1 && (
                <a
                  href={`/tasks?status=${status}&page=${page - 1}`}
                  className="px-3 py-1.5 text-xs bg-[hsl(var(--secondary))] text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Previous
                </a>
              )}
              {page < meta.last_page && (
                <a
                  href={`/tasks?status=${status}&page=${page + 1}`}
                  className="px-3 py-1.5 text-xs bg-[hsl(var(--secondary))] text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
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
