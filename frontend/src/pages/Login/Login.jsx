import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName.trim()) return;

    try {
      const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: userName.trim()}),
      });

      const data = await res.json();
      if (res.ok) {
        // Save SQLite user in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/workspace", { state: { user: data.user } });
      }
    } catch(e){
      console.log(e);
    }
  };

  return (
    <main className="h-screen w-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl flex flex-col items-center">
        <h1 className="text-2xl font-bold text-zinc-100 mb-2">Login</h1>
        <p className="text-zinc-400 text-sm mb-6 text-center">
          Enter a username to join the collaborative workspace
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 text-center font-medium"
          />

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition cursor-pointer"
          >
            Join Workspace
          </button>
        </form>
      </div>
    </main>
  );
}
