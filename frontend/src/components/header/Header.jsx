import React from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // 1. Get user from localStorage (fallback to route state or Guest)
  const storedUser = JSON.parse(localStorage.getItem("user") || "null");
  const userName = location.state?.user?.name || storedUser?.name || "Guest";

  return (
    <header className="h-16 w-full bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-between px-6 shadow-sm shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-zinc-200 font-semibold tracking-wide text-sm">Workspace App</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Username retrieved from SQLite / localStorage */}
        <span className="text-zinc-300 text-sm font-medium">{userName}</span>

        {/* Profile Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-500 border border-white flex items-center justify-center text-white text-xs font-bold uppercase shadow-sm">
          {userName.charAt(0)}
        </div>
      </div>
    </header>
  );
}

