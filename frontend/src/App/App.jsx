import "./App.css";
import { Editor } from "@monaco-editor/react";

const editorOptions = {
  fontFamily: "'JetBrains Mono', Fira Code, monospace",
  fontSize: 14,
  fontLigatures: true,
  minimap: { enabled: false },
  wordWrap: 'on',
  bracketPairColorization: { enabled: true },
  cursorBlinking: 'smooth',
  smoothScrolling: true,
};



function App() {

  return (
    <>
      <main className="h-screen w-screen bg-gray-950 p-3 flex flex-col gap-3 box-border overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 w-full bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-between px-6 shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-zinc-200 font-semibold tracking-wide text-sm">Workspace App</span>
          </div>
          <div className="flex items-center gap-3">
            {/* profile placeholder */}
          </div>
        </header>

        {/* Bottom Content Area */}
        <div className="flex-1 w-full flex gap-3 min-h-0">
          {/* Left Sidebar */}
          <aside className="w-64 md:w-72 lg:w-80 h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col shrink-0 shadow-sm">
            {/* Sidebar content */}
          </aside>

          {/* Main Work Area */}
          <section className="flex-1 h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col shadow-sm min-w-0">
            <Editor
              options={editorOptions}
              theme="vs-dark"
              defaultValue=""
            >

            </Editor>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
