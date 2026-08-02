import api from "./axios";
import { LoginRequest, LoginResponse, User } from "@/types/auth";

const TOKEN_KEY = "token";
const USER_KEY = "user";

/* -------------------- Storage -------------------- */

export function saveAuth(data: LoginResponse) {
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(USER_KEY, JSON.stringify(data.user));
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser(): User | null {
  const user = localStorage.getItem(USER_KEY);

  if (!user) return null;

  return JSON.parse(user);
}

export function isAuthenticated() {
  return !!getToken();
}

/* -------------------- API -------------------- */

export async function adminLogin(
  payload: LoginRequest
): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>(
    "/auth/admin/login",
    payload
  );

  saveAuth(data);

  return data;
}

export async function userLogin(
  payload: LoginRequest
): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>(
    "/auth/user/login",
    payload
  );

  saveAuth(data);

  return data;
}

export async function getCurrentUser(): Promise<User> {
  const { data } = await api.get<{
    success: boolean;
    user: User;
  }>("/auth/me");

  return data.user;
}

export async function logout() {
  try {
    await api.post("/auth/logout");
  } catch {
    // Ignore logout API errors
  }

  clearAuth();
}