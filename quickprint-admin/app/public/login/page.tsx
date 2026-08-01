"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockUsers } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const user = mockUsers.find(
      (u) =>
        u.email === email.trim() &&
        u.password === password.trim()
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: user.email,
        role: user.role,
      })
    );

    router.push(user.redirect);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={login}
        className="bg-white shadow-md rounded-lg p-8 w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          SnapPrint Login
        </h1>

        <div className="mb-4">
          <label className="block mb-2">
            Email
          </label>

          <input
            type="email"
            className="border rounded w-full p-2"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            Password
          </label>

          <input
            type="password"
            className="border rounded w-full p-2"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-red-600 mb-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <a
            href="/public/forgot-password"
            className="text-blue-600 text-sm"
          >
            Forgot Password?
          </a>
        </div>

      </form>

    </div>
  );
}