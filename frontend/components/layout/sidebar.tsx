"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, CheckSquare, FileText, GitBranch,
  Users, Settings, Zap, ChevronRight, Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Dashboard",  href: "/dashboard",  icon: LayoutDashboard },
  { label: "My Tasks",   href: "/tasks",       icon: CheckSquare },
  { label: "Requests",   href: "/requests",    icon: FileText },
  { label: "Processes",  href: "/processes",   icon: GitBranch },
  { label: "Notifications", href: "/notifications", icon: Bell },
];

const adminNav = [
  { label: "Users",     href: "/admin/users",    icon: Users },
  { label: "Groups",    href: "/admin/groups",   icon: Users },
  { label: "Settings",  href: "/admin/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 flex flex-col h-full bg-[hsl(var(--sidebar))] border-r border-[hsl(var(--sidebar-border))] shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-[hsl(var(--sidebar-border))]">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow shadow-blue-600/40">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <span className="text-white font-semibold text-sm tracking-wide">ProcessMaker</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider px-2 mb-2">
          Main
        </p>
        {nav.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group",
                active
                  ? "bg-blue-600 text-white shadow shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-[hsl(var(--sidebar-accent))]"
              )}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {active && <ChevronRight className="w-3 h-3 opacity-70" />}
            </Link>
          );
        })}

        <div className="pt-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider px-2 mb-2">
            Administration
          </p>
          {adminNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  active
                    ? "bg-blue-600 text-white shadow shadow-blue-600/30"
                    : "text-slate-400 hover:text-white hover:bg-[hsl(var(--sidebar-accent))]"
                )}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="px-3 py-3 border-t border-[hsl(var(--sidebar-border))]">
        <p className="text-xs text-slate-600 text-center">ProcessMaker v4</p>
      </div>
    </aside>
  );
}
