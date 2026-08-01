"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/AuthContext";

export default function UserLoginPage() {
  const router = useRouter();

  const { loginAsUser } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await loginAsUser({
        email,
        password,
      });

      router.replace("/user/dashboard");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          User Login
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Sign in to your SnapPrint account
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />

          </div>

          <div>

            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />

          </div>

          {error && (
            <div className="text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 transition disabled:opacity-50"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}