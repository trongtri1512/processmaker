import { auth } from "@/lib/auth";
import { createAuthClient } from "@/lib/api";
import { redirect, notFound } from "next/navigation";
import { cn, statusColor, formatDateTime } from "@/lib/utils";
import {
  ArrowLeft, Clock, Hash, User, GitBranch,
  MessageSquare, Paperclip, CheckCircle2, XCircle,
  AlertCircle, Circle, Activity,
} from "lucide-react";

export default async function RequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  const client = createAuthClient((session as any).apiToken);
  const { id } = await params;

  let request: any = null;
  let tokens: any[] = [];
  let comments: any[] = [];
  let files: any[] = [];

  try {
    const [reqRes, tokensRes, commentsRes, filesRes] = await Promise.allSettled([
      client.get(`/requests/${id}`),
      client.get(`/requests/${id}/tokens`),
      client.get("/comments", {
        params: {
          commentable_type: "ProcessMaker\\Models\\ProcessRequest",
          commentable_id: id,
        },
      }),
      client.get(`/requests/${id}/files`),
    ]);
    if (reqRes.status === "fulfilled") request = reqRes.value.data;
    if (tokensRes.status === "fulfilled") tokens = tokensRes.value.data?.data ?? [];
    if (commentsRes.status === "fulfilled") comments = commentsRes.value.data?.data ?? [];
    if (filesRes.status === "fulfilled") files = filesRes.value.data?.data ?? [];
  } catch {}

  if (!request) notFound();

  const statusIcon: Record<string, any> = {
    ACTIVE:    <Activity className="w-4 h-4 text-blue-400" />,
    COMPLETED: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    CANCELED:  <XCircle className="w-4 h-4 text-red-400" />,
    ERROR:     <AlertCircle className="w-4 h-4 text-red-400" />,
  };

  return (
    <div className="space-y-5 max-w-5xl">
      {/* Back */}
      <a href="/requests" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Requests
      </a>

      {/* Header */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {statusIcon[request.status]}
              <span className={cn("text-xs px-2.5 py-0.5 rounded-full border", statusColor(request.status))}>
                {request.status}
              </span>
            </div>
            <h1 className="text-xl font-bold text-white">{request.name}</h1>
          </div>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6 pt-5 border-t border-[hsl(var(--border))]">
          {[
            { label: "Case Number",  value: `#${request.case_number}`, icon: Hash },
            { label: "Requested By", value: request.user?.fullname ?? "—", icon: User },
            { label: "Started",      value: formatDateTime(request.created_at), icon: Clock },
            { label: "Completed",    value: formatDateTime(request.completed_at), icon: CheckCircle2 },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-slate-500 mb-1">{item.label}</p>
              <div className="flex items-center gap-1.5">
                <item.icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <p className="text-sm text-white font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Timeline / tokens */}
        <div className="lg:col-span-2 space-y-5">
          {/* Active tasks */}
          {tokens.filter((t: any) => t.status === "ACTIVE").length > 0 && (
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[hsl(var(--border))]">
                <h2 className="text-sm font-semibold text-white">Current Tasks</h2>
              </div>
              <div className="divide-y divide-[hsl(var(--border))]">
                {tokens
                  .filter((t: any) => t.status === "ACTIVE")
                  .map((token: any) => (
                    <div key={token.id} className="flex items-center justify-between px-5 py-3.5">
                      <div>
                        <p className="text-sm font-medium text-white">{token.element_name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {token.user?.fullname ?? "Unassigned"}
                        </p>
                      </div>
                      <span className={cn("text-xs px-2 py-0.5 rounded-full border", statusColor(token.status))}>
                        {token.status}
                      </span>
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
              <div className="px-5 py-8 text-center text-sm text-slate-500">No comments yet</div>
            ) : (
              <div className="divide-y divide-[hsl(var(--border))]">
                {comments.map((c: any) => (
                  <div key={c.id} className="px-5 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
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

        {/* Right sidebar */}
        <div className="space-y-4">
          {/* Files */}
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3.5 border-b border-[hsl(var(--border))]">
              <Paperclip className="w-4 h-4 text-slate-400" />
              <h2 className="text-sm font-semibold text-white">Files ({files.length})</h2>
            </div>
            {files.length === 0 ? (
              <div className="px-4 py-6 text-center text-sm text-slate-500">No files attached</div>
            ) : (
              <div className="divide-y divide-[hsl(var(--border))]">
                {files.map((f: any) => (
                  <div key={f.id} className="flex items-center gap-2 px-4 py-3">
                    <Paperclip className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="text-xs text-slate-300 truncate">{f.file_name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Request data summary */}
          {request.data && Object.keys(request.data).length > 0 && (
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
              <div className="px-4 py-3.5 border-b border-[hsl(var(--border))]">
                <h2 className="text-sm font-semibold text-white">Form Data</h2>
              </div>
              <div className="p-4 space-y-3">
                {Object.entries(request.data)
                  .slice(0, 8)
                  .map(([key, value]: any) => (
                    <div key={key}>
                      <p className="text-xs text-slate-500 capitalize">{key.replace(/_/g, " ")}</p>
                      <p className="text-sm text-white font-medium mt-0.5 truncate">
                        {typeof value === "object" ? JSON.stringify(value) : String(value) || "—"}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
