import { auth } from "@/lib/auth";
import { createAuthClient } from "@/lib/api";
import { redirect } from "next/navigation";
import { cn, statusColor, formatDateTime } from "@/lib/utils";
import {
  FileText, Plus, Clock, Hash, GitBranch,
  ChevronRight, CheckCircle2, XCircle, AlertCircle,
} from "lucide-react";

export const metadata = { title: "Requests – ProcessMaker" };

export default async function RequestsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; page?: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  const client = createAuthClient((session as any).apiToken);
  const params = await searchParams;

  const type = params.type || "in_progress";
  const page = Number(params.page) || 1;

  const typeMap: Record<string, object> = {
    in_progress: { status: "ACTIVE" },
    completed:   { status: "COMPLETED" },
    all:         {},
    started_me:  { me: true },
  };

  let requests: any[] = [];
  let meta: any = {};
  try {
    const res = await client.get("/requests", {
      params: { ...typeMap[type], page, per_page: 15, order_by: "created_at", order_direction: "desc" },
    });
    requests = res.data?.data ?? [];
    meta = res.data?.meta ?? {};
  } catch {}

  const tabs = [
    { label: "In Progress", value: "in_progress" },
    { label: "Completed",   value: "completed" },
    { label: "Started By Me", value: "started_me" },
    { label: "All",         value: "all" },
  ];

  const statusIcon: Record<string, any> = {
    ACTIVE:    <Clock className="w-4 h-4 text-blue-400" />,
    COMPLETED: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    CANCELED:  <XCircle className="w-4 h-4 text-red-400" />,
    ERROR:     <AlertCircle className="w-4 h-4 text-red-400" />,
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Requests</h1>
          <p className="text-sm text-slate-400 mt-0.5">
            {meta.total ?? 0} total requests
          </p>
        </div>
        <a
          href="/processes"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-blue-600/20"
        >
          <Plus className="w-4 h-4" /> New Request
        </a>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-[hsl(var(--secondary))] p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <a
            key={tab.value}
            href={`/requests?type=${tab.value}`}
            className={cn(
              "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
              type === tab.value
                ? "bg-[hsl(var(--card))] text-white shadow"
                : "text-slate-400 hover:text-white"
            )}
          >
            {tab.label}
          </a>
        ))}
      </div>

      {/* Requests grid */}
      {requests.length === 0 ? (
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl flex flex-col items-center justify-center py-16">
          <FileText className="w-10 h-10 text-slate-600 mb-3" />
          <p className="text-slate-400 font-medium">No requests found</p>
          <a
            href="/processes"
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-all"
          >
            Start a new request
          </a>
        </div>
      ) : (
        <div className="space-y-2">
          {requests.map((req: any) => (
            <a
              key={req.id}
              href={`/requests/${req.id}`}
              className="block bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-4 hover:border-blue-500/40 hover:bg-[hsl(var(--secondary))] transition-all group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="shrink-0">
                    {statusIcon[req.status] ?? <FileText className="w-4 h-4 text-slate-400" />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors truncate">
                      {req.name}
                    </p>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Hash className="w-3 h-3" /> Case {req.case_number}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" /> {formatDateTime(req.created_at)}
                      </span>
                      {req.process?.name && (
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <GitBranch className="w-3 h-3" /> {req.process.name}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={cn("text-xs px-2.5 py-1 rounded-full border", statusColor(req.status))}>
                    {req.status}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Pagination */}
      {meta.last_page > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Showing {requests.length} of {meta.total}
          </p>
          <div className="flex gap-2">
            {page > 1 && (
              <a href={`/requests?type=${type}&page=${page - 1}`}
                className="px-3 py-1.5 text-xs bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-white rounded-lg hover:bg-blue-600 transition-colors">
                Previous
              </a>
            )}
            {page < meta.last_page && (
              <a href={`/requests?type=${type}&page=${page + 1}`}
                className="px-3 py-1.5 text-xs bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-white rounded-lg hover:bg-blue-600 transition-colors">
                Next
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
