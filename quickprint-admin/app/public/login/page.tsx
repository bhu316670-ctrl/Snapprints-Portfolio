"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const router = useRouter();

  const { loginAsUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await loginAsUser({
        email,
        password,
      });

      router.push("/user/dashboard");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={login}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-8">
          SnapPrint Login
        </h1>

        <div className="mb-5">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 border border-red-300 text-red-600 p-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 transition disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

        <div className="text-center mt-6">
          <a
            href="/public/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}