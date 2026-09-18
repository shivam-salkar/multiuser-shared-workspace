import React, { useRef, useMemo } from "react";
import { Editor } from "@monaco-editor/react";
import { MonacoBinding } from "y-monaco";
import * as Y from "yjs";
import { SocketIOProvider } from "y-socket.io";

const editorOptions = {
  fontFamily: "'JetBrains Mono', Fira Code, monospace",
  fontSize: 14,
  fontLigatures: true,
  minimap: { enabled: false },
  wordWrap: "on",
  bracketPairColorization: { enabled: true },
  cursorBlinking: "smooth",
  smoothScrolling: true,
};

export default function CodeEditor({
  serverUrl = "http://localhost:3000",
  roomName = "monaco",
  theme = "vs-dark",
}) {
  const editorRef = useRef(null);

  const ydoc = useMemo(() => new Y.Doc(), []);
  const yText = useMemo(() => ydoc.getText(roomName), [ydoc, roomName]);

  const handleMount = (editor) => {
    editorRef.current = editor;

    const provider = new SocketIOProvider(serverUrl, roomName, ydoc, {
      autoConnect: true,
    });
    const binding = new MonacoBinding(
      yText,
      editor.getModel(),
      new Set([editor]),
      provider.awareness
    );
  };

  return (
    <section className="flex-1 h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col shadow-sm min-w-0">
      <Editor
        options={editorOptions}
        theme={theme}
        defaultValue=""
        onMount={handleMount}
      />
    </section>
  );
}
