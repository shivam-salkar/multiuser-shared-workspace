import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import CodeEditor from "../../components/editor/CodeEditor";

export default function Workspace() {
  return (
    <main className="h-screen w-screen bg-gray-950 p-3 flex flex-col gap-3 box-border overflow-hidden">
      {/* Top Bar */}
      <Header />

      {/* Bottom Content Area */}
      <div className="flex-1 w-full flex gap-3 min-h-0">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Work Area */}
        <CodeEditor />
      </div>
    </main>
  );
}
