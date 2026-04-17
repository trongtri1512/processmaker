import { auth } from "@/lib/auth";
import { createAuthClient } from "@/lib/api";
import { redirect } from "next/navigation";
import { cn, statusColor, formatDateTime } from "@/lib/utils";
import { Bell, CheckCheck, Clock } from "lucide-react";

export const metadata = { title: "Notifications – ProcessMaker" };

export default async function NotificationsPage() {
  const session = await auth();
  if (!session) redirect("/login");
  const client = createAuthClient((session as any).apiToken);

  let notifications: any[] = [];
  try {
    const res = await client.get("/notifications", { params: { per_page: 30 } });
    notifications = res.data?.data ?? [];
  } catch {}

  const unread = notifications.filter((n: any) => !n.read_at);
  const read = notifications.filter((n: any) => n.read_at);

  return (
    <div className="space-y-5 max-w-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Notifications</h1>
          <p className="text-sm text-slate-400 mt-0.5">{unread.length} unread</p>
        </div>
        {unread.length > 0 && (
          <form action="/api/notifications/read-all" method="POST">
            <button
              type="submit"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-slate-300 rounded-lg transition-all"
            >
              <CheckCheck className="w-3.5 h-3.5" /> Mark all read
            </button>
          </form>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl flex flex-col items-center justify-center py-16">
          <Bell className="w-10 h-10 text-slate-600 mb-3" />
          <p className="text-slate-400 font-medium">No notifications</p>
          <p className="text-slate-600 text-sm mt-1">You're all caught up!</p>
        </div>
      ) : (
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
          {unread.length > 0 && (
            <>
              <div className="px-5 py-3 bg-blue-600/5 border-b border-[hsl(var(--border))]">
                <p className="text-xs font-medium text-blue-400 uppercase tracking-wider">Unread</p>
              </div>
              {unread.map((n: any) => (
                <NotificationItem key={n.id} notification={n} />
              ))}
            </>
          )}
          {read.length > 0 && (
            <>
              <div className="px-5 py-3 bg-[hsl(var(--secondary))] border-y border-[hsl(var(--border))]">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Earlier</p>
              </div>
              {read.map((n: any) => (
                <NotificationItem key={n.id} notification={n} muted />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function NotificationItem({ notification: n, muted = false }: { notification: any; muted?: boolean }) {
  const url = n.data?.url || n.data?.url_path;
  const title = n.data?.title || n.data?.message || "Notification";
  const body = n.data?.body || n.data?.description || "";

  const Wrapper = url ? "a" : "div";
  return (
    <Wrapper
      {...(url ? { href: url } : {})}
      className={cn(
        "flex items-start gap-4 px-5 py-4 border-b border-[hsl(var(--border))] last:border-b-0 transition-colors",
        url && "hover:bg-[hsl(var(--secondary))] cursor-pointer",
        muted && "opacity-60"
      )}
    >
      {/* Dot */}
      <div className="mt-1.5 shrink-0">
        {!muted ? (
          <div className="w-2 h-2 rounded-full bg-blue-500" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-slate-700" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white">{title}</p>
        {body && <p className="text-sm text-slate-400 mt-0.5 line-clamp-2">{body}</p>}
        <div className="flex items-center gap-1 mt-1.5 text-xs text-slate-600">
          <Clock className="w-3 h-3" />
          {formatDateTime(n.created_at)}
        </div>
      </div>
    </Wrapper>
  );
}
