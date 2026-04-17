import { auth } from "@/lib/auth";
import { createAuthClient } from "@/lib/api";
import { redirect, notFound } from "next/navigation";
import { cn, statusColor, formatDateTime } from "@/lib/utils";
import {
  ArrowLeft, Clock, User, MessageSquare,
  Paperclip, CheckCircle2, AlertCircle, GitBranch,
} from "lucide-react";

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  const client = createAuthClient((session as any).apiToken);
  const { id } = await params;

  let task: any = null;
  let comments: any[] = [];
  try {
    const [taskRes, commentsRes] = await Promise.allSettled([
      client.get(`/tasks/${id}`),
      client.get("/comments", { params: { commentable_type: "ProcessMaker\\Models\\ProcessRequestToken", commentable_id: id } }),
    ]);
    if (taskRes.status === "fulfilled") task = taskRes.value.data;
    if (commentsRes.status === "fulfilled") comments = commentsRes.value.data?.data ?? [];
  } catch {}

  if (!task) notFound();

  const request = task.process_request;
  const isOverdue = task.due_at && new Date(task.due_at) < new Date() && task.status === "ACTIVE";

  return (
    <div className="space-y-5 max-w-4xl">
      {/* Back */}
      <a
        href="/tasks"
        className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Tasks
      </a>

      {/* Task header */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={cn("text-xs px-2 py-0.5 rounded-full border", statusColor(task.status))}>
                {task.status}
              </span>
              {isOverdue && (
                <span className="text-xs px-2 py-0.5 rounded-full border bg-red-500/15 text-red-400 border-red-500/30 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Overdue
                </span>
              )}
            </div>
            <h1 className="text-xl font-bold text-white mt-2">
              {task.element_name || "Task"}
            </h1>
            {request && (
              <p className="text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5" />
                {request.name} · Case #{request.case_number}
              </p>
            )}
          </div>

          {task.status === "ACTIVE" && (
            <a
              href={`/tasks/${id}/complete`}
              className="shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-blue-600/20"
            >
              Complete Task →
            </a>
          )}
        </div>

        {/* Meta grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-5 border-t border-[hsl(var(--border))]">
          {[
            { label: "Assigned To", value: task.user?.fullname || "Unassigned", icon: User },
            { label: "Due Date", value: formatDateTime(task.due_at), icon: Clock },
            { label: "Created", value: formatDateTime(task.created_at), icon: Clock },
            { label: "Process", value: request?.process?.name || "—", icon: GitBranch },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-slate-500 mb-1">{item.label}</p>
              <div className="flex items-center gap-1.5">
                <item.icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <p className="text-sm text-white font-medium truncate">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task data / form preview */}
      {task.process_request?.data && Object.keys(task.process_request.data).length > 0 && (
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-[hsl(var(--border))]">
            <h2 className="text-sm font-semibold text-white">Request Data</h2>
          </div>
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(task.process_request.data).slice(0, 20).map(([key, value]: any) => (
              <div key={key}>
                <p className="text-xs text-slate-500 mb-0.5 capitalize">
                  {key.replace(/_/g, " ")}
                </p>
                <p className="text-sm text-white font-medium">
                  {typeof value === "object"
                    ? JSON.stringify(value)
                    : String(value) || "—"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comments */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-[hsl(var(--border))]">
          <MessageSquare className="w-4 h-4 text-slate-400" />
          <h2 className="text-sm font-semibold text-white">Comments ({comments.length})</h2>
        </div>
        {comments.length === 0 ? (
          <div className="px-5 py-8 text-center">
            <p className="text-sm text-slate-500">No comments yet</p>
          </div>
        ) : (
          <div className="divide-y divide-[hsl(var(--border))]">
            {comments.map((c: any) => (
              <div key={c.id} className="px-5 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold">
                    {c.user?.firstname?.[0] ?? "?"}
                  </div>
                  <span className="text-sm font-medium text-white">{c.user?.fullname}</span>
                  <span className="text-xs text-slate-500">{formatDateTime(c.created_at)}</span>
                </div>
                <p className="text-sm text-slate-300 ml-8">{c.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
