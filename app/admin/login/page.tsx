"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    if (password === "avenoir2026") {
      localStorage.setItem("admin", "true");
      router.push("/admin");
    } else {
      alert("Şifre yanlış");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-white/10 p-8 rounded-2xl">
        <h1 className="text-3xl font-light mb-2">AVENOIR</h1>
        <p className="text-neutral-500 mb-8">Admin Login</p>

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-transparent border border-white/20 px-4 py-3 outline-none mb-6"
        />

        <button
          onClick={login}
          className="w-full bg-white text-black py-3 tracking-[0.25em] hover:opacity-90 transition"
        >
          LOGIN
        </button>
      </div>
    </main>
  );
}