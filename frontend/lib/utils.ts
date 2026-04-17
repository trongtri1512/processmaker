import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | null) {
  if (!date) return "—";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

export function formatDateTime(date: string | null) {
  if (!date) return "—";
  return new Date(date).toLocaleString("en-US", {
    month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
  });
}

export function statusColor(status: string) {
  const map: Record<string, string> = {
    ACTIVE:    "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    INACTIVE:  "bg-slate-500/15 text-slate-400 border-slate-500/30",
    COMPLETED: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    CANCELED:  "bg-red-500/15 text-red-400 border-red-500/30",
    ERROR:     "bg-red-500/15 text-red-400 border-red-500/30",
    PENDING:   "bg-amber-500/15 text-amber-400 border-amber-500/30",
  };
  return map[status] ?? "bg-slate-500/15 text-slate-400 border-slate-500/30";
}
