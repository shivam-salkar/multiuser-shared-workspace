import React from "react";

export default function Header() {
  return (
    <header className="h-16 w-full bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-between px-6 shadow-sm shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-zinc-200 font-semibold tracking-wide text-sm">Workspace App</span>
      </div>
      <div className="flex items-center gap-3">
        {/* profile placeholder */}
      </div>
    </header>
  );
}
