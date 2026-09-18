import React from "react";

export default function Login() {
  return (
    <main className="h-screen w-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl flex flex-col items-center">
        <h1 className="text-2xl font-bold text-zinc-100 mb-2">Login</h1>
        <p className="text-zinc-400 text-sm mb-6 text-center">
          Sign in to access your collaborative workspace
        </p>
        {/* Login content will go here */}
      </div>
    </main>
  );
}
