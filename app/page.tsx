"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "./apis/loginapi";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res= await login({ email, password })
    localStorage.setItem("token", res);
    router.push('/dashboard')

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Login
        </h2>

        <div>
          <label className="text-sm text-gray-300">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}