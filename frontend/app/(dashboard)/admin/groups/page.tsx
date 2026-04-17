import { auth } from "@/lib/auth";
import { createAuthClient } from "@/lib/api";
import { redirect } from "next/navigation";
import { cn, statusColor, formatDateTime } from "@/lib/utils";
import { Users, Plus, ChevronRight, UserCheck } from "lucide-react";

export const metadata = { title: "Groups – Admin – ProcessMaker" };

export default async function GroupsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  const client = createAuthClient((session as any).apiToken);
  const params = await searchParams;
  const page = Number(params.page) || 1;

  let groups: any[] = [];
  let meta: any = {};
  try {
    const res = await client.get("/groups", {
      params: { page, per_page: 20, order_by: "name" },
    });
    groups = res.data?.data ?? [];
    meta = res.data?.meta ?? {};
  } catch {}

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Groups</h1>
          <p className="text-sm text-slate-400 mt-0.5">{meta.total ?? 0} groups</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-blue-600/20">
          <Plus className="w-4 h-4" /> New Group
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {groups.length === 0 ? (
          <div className="col-span-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl flex flex-col items-center justify-center py-14">
            <Users className="w-10 h-10 text-slate-600 mb-3" />
            <p className="text-slate-400 font-medium">No groups found</p>
          </div>
        ) : groups.map((group: any) => (
          <a
            key={group.id}
            href={`/admin/groups/${group.id}`}
            className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-5 hover:border-blue-500/40 transition-all group block"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/15 flex items-center justify-center">
                <Users className="w-5 h-5 text-indigo-400" />
              </div>
              <span className={cn("text-xs px-2 py-0.5 rounded-full border", statusColor(group.status))}>
                {group.status}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
              {group.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {group.description || "No description"}
            </p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[hsl(var(--border))]">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <UserCheck className="w-3.5 h-3.5" />
                {group.users_count ?? 0} members
              </div>
              <span className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-0.5">
                Manage <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
