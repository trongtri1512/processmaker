"use client";

import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { Bell, Search, LogOut, User, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navbar({ session }: { session: Session }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))] shrink-0">
      {/* Search */}
      <div className="flex items-center gap-2 bg-[hsl(var(--secondary))] rounded-lg px-3 py-1.5 w-64 border border-[hsl(var(--border))]">
        <Search className="w-4 h-4 text-slate-500" />
        <input
          placeholder="Search..."
          className="bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none flex-1"
        />
        <span className="text-xs text-slate-600 bg-[hsl(var(--background))] px-1.5 py-0.5 rounded border border-[hsl(var(--border))]">⌘K</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-[hsl(var(--secondary))] transition-all">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-[hsl(var(--background))]" />
        </button>

        {/* User menu */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg hover:bg-[hsl(var(--secondary))] transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold">
              {session.user?.name?.[0]?.toUpperCase() ?? "U"}
            </div>
            <span className="text-sm text-slate-300 font-medium max-w-28 truncate">
              {session.user?.name}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {dropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
              <div className="absolute right-0 top-full mt-1 w-44 z-20 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg shadow-xl overflow-hidden">
                <div className="px-3 py-2 border-b border-[hsl(var(--border))]">
                  <p className="text-xs text-slate-400">{session.user?.email}</p>
                </div>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:bg-[hsl(var(--secondary))] hover:text-white transition-all">
                  <User className="w-4 h-4" /> Profile
                </button>
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-all"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
