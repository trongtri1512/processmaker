import { auth } from "@/lib/auth";
import { createAuthClient } from "@/lib/api";
import { redirect } from "next/navigation";
import { cn, statusColor, formatDateTime } from "@/lib/utils";
import { GitBranch, Play, Search, Tag, ChevronRight, Archive } from "lucide-react";

export const metadata = { title: "Processes – ProcessMaker" };

export default async function ProcessesPage({
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

  let processes: any[] = [];
  let meta: any = {};
  try {
    const res = await client.get("/processes", {
      params: { status, page, per_page: 18, order_by: "name", order_direction: "asc" },
    });
    processes = res.data?.data ?? [];
    meta = res.data?.meta ?? {};
  } catch {}

  const tabs = [
    { label: "Active",   value: "ACTIVE" },
    { label: "Inactive", value: "INACTIVE" },
    { label: "Archived", value: "ARCHIVED" },
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Processes</h1>
          <p className="text-sm text-slate-400 mt-0.5">
            {meta.total ?? 0} processes
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-[hsl(var(--secondary))] p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <a
            key={tab.value}
            href={`/processes?status=${tab.value}`}
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

      {/* Process grid */}
      {processes.length === 0 ? (
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl flex flex-col items-center justify-center py-16">
          <GitBranch className="w-10 h-10 text-slate-600 mb-3" />
          <p className="text-slate-400 font-medium">No processes found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {processes.map((proc: any) => (
            <div
              key={proc.id}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-5 hover:border-blue-500/40 transition-all group flex flex-col"
            >
              {/* Icon + status */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-blue-400" />
                </div>
                <span className={cn("text-xs px-2 py-0.5 rounded-full border", statusColor(proc.status))}>
                  {proc.status}
                </span>
              </div>

              {/* Name + description */}
              <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                {proc.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 flex-1 line-clamp-2">
                {proc.description || "No description provided"}
              </p>

              {/* Category */}
              {proc.category?.name && (
                <div className="flex items-center gap-1.5 mt-3">
                  <Tag className="w-3 h-3 text-slate-500" />
                  <span className="text-xs text-slate-500">{proc.category.name}</span>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[hsl(var(--border))]">
                <span className="text-xs text-slate-600">{formatDateTime(proc.updated_at)}</span>
                {proc.status === "ACTIVE" && (proc.start_events?.length ?? 0) > 0 ? (
                  <a
                    href={`/processes/${proc.id}/start`}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-lg transition-all shadow shadow-blue-600/20"
                  >
                    <Play className="w-3 h-3" /> Start
                  </a>
                ) : (
                  <a
                    href={`/processes/${proc.id}`}
                    className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    View <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {meta.last_page > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500">Page {meta.current_page} of {meta.last_page}</p>
          <div className="flex gap-2">
            {page > 1 && (
              <a href={`/processes?status=${status}&page=${page - 1}`}
                className="px-3 py-1.5 text-xs bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-white rounded-lg hover:bg-blue-600 transition-colors">
                Previous
              </a>
            )}
            {page < meta.last_page && (
              <a href={`/processes?status=${status}&page=${page + 1}`}
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
