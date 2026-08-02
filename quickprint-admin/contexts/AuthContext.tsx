"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import authService from "@/services/auth.service";

import {
  LoginRequest,
  User,
} from "@/types/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  authenticated: boolean;

  loginAsAdmin: (
    payload: LoginRequest
  ) => Promise<void>;

  loginAsUser: (
    payload: LoginRequest
  ) => Promise<void>;

  logout: () => Promise<void>;

  refreshUser: () => Promise<void>;
}

const AuthContext =
  createContext<AuthContextType | null>(null);

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  const authenticated = !!user;

  useEffect(() => {
    refreshUser();
  }, []);

  async function refreshUser() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        return;
      }
      const savedUser = localStorage.getItem("user");

if (savedUser) {
  setUser(JSON.parse(savedUser));
}
      const response = await authService.me();

      setUser(response.user);
    } catch (err) {
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function loginAsAdmin(
    payload: LoginRequest
  ) {
    setLoading(true);

    try {
      const response =
        await authService.adminLogin(
          payload.email,
          payload.password
        );

      setUser(response.user);

    } finally {
      setLoading(false);
    }
  }

  async function loginAsUser(
    payload: LoginRequest
  ) {
    setLoading(true);

    try {
      const response =
        await authService.userLogin(
          payload.email,
          payload.password
        );

      setUser(response.user);

    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    localStorage.removeItem("user");
    setLoading(true);

    try {
      await authService.logout();

      setUser(null);

    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authenticated,
        loginAsAdmin,
        loginAsUser,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}