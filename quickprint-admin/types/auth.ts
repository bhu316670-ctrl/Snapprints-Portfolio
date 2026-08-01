export type UserRole = "admin" | "user";

export interface User {
  id: number;
  fullName: string;
  email: string;
  phone?: string;
  role: UserRole;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: User;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
}

export interface ApiError {
  message: string;
}