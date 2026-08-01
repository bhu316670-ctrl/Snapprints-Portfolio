import api from "./axios";
import { LoginRequest, LoginResponse, User } from "@/types/auth";

const TOKEN_KEY = "token";
const REFRESH_TOKEN_KEY = "refreshToken";
const USER_KEY = "user";

/* -------------------- Storage -------------------- */

export function saveAuth(data: LoginResponse) {
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
  localStorage.setItem(USER_KEY, JSON.stringify(data.user));

  // Cookie for middleware
  document.cookie = `token=${data.token}; path=/`;
  document.cookie = `role=${data.user.role}; path=/`;
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);

  document.cookie =
    "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  document.cookie =
    "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
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
  const { data } = await api.get<User>(
    "/auth/me"
  );

  return data;
}

export async function logout() {
  try {
    await api.post("/auth/logout");
  } catch {
    // Ignore logout API errors
  }

  clearAuth();
}