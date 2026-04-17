import { auth } from "@/lib/auth";
import { createAuthClient } from "@/lib/api";
import { redirect } from "next/navigation";
import {
  Settings, Bell, Database, Globe, Shield,
  Mail, Sliders, ChevronRight,
} from "lucide-react";

export const metadata = { title: "Settings – Admin – ProcessMaker" };

const SECTION_ICONS: Record<string, any> = {
  Notifications: Bell, Email: Mail, Users: Shield,
  "Log In": Shield, System: Sliders, "Email Default": Mail,
  Format: Globe, Bcc: Mail,
};

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ group?: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  const client = createAuthClient((session as any).apiToken);
  const params = await searchParams;

  let groups: string[] = [];
  let settings: any[] = [];
  let activeGroup = params.group || "";

  try {
    const [groupsRes] = await Promise.allSettled([
      client.get("/settings/groups"),
    ]);
    if (groupsRes.status === "fulfilled") {
      groups = groupsRes.value.data ?? [];
      if (!activeGroup && groups.length) activeGroup = groups[0];
    }

    if (activeGroup) {
      const res = await client.get("/settings", {
        params: { group: activeGroup, per_page: 100 },
      });
      settings = res.data?.data ?? [];
    }
  } catch {}

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-sm text-slate-400 mt-0.5">System configuration</p>
      </div>

      <div className="flex gap-5">
        {/* Sidebar groups */}
        <div className="w-52 shrink-0 space-y-1">
          {groups.map((group: string) => {
            const Icon = SECTION_ICONS[group] ?? Settings;
            return (
              <a
                key={group}
                href={`/admin/settings?group=${encodeURIComponent(group)}`}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeGroup === group
                    ? "bg-blue-600 text-white shadow"
                    : "text-slate-400 hover:text-white hover:bg-[hsl(var(--secondary))]"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {group}
              </a>
            );
          })}
        </div>

        {/* Settings panel */}
        <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
          {settings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-14">
              <Settings className="w-10 h-10 text-slate-600 mb-3" />
              <p className="text-slate-400">Select a group to view settings</p>
            </div>
          ) : (
            <>
              <div className="px-6 py-4 border-b border-[hsl(var(--border))]">
                <h2 className="text-sm font-semibold text-white">{activeGroup}</h2>
              </div>
              <div className="divide-y divide-[hsl(var(--border))]">
                {settings.map((setting: any) => (
                  <div key={setting.id} className="flex items-start justify-between px-6 py-4 gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white">{setting.name}</p>
                      {setting.helper && (
                        <p className="text-xs text-slate-500 mt-0.5">{setting.helper}</p>
                      )}
                    </div>
                    <div className="shrink-0">
                      {setting.format === "boolean" ? (
                        <div className={`w-10 h-5 rounded-full transition-all ${setting.config ? "bg-blue-600" : "bg-slate-700"}`}>
                          <div className={`w-4 h-4 rounded-full bg-white mt-0.5 transition-all ${setting.config ? "ml-5" : "ml-0.5"}`} />
                        </div>
                      ) : (
                        <span className="text-sm text-slate-300 bg-[hsl(var(--secondary))] px-2.5 py-1 rounded text-right max-w-48 truncate block">
                          {String(setting.config ?? "—")}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
