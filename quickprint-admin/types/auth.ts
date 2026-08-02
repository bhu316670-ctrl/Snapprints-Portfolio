export type UserRole = "admin" | "user";

export interface User {
  id: number;

  name?: string;        // Admin
  fullName?: string;    // User

  email: string;

  role: UserRole;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}

export interface ApiError {
  success: boolean;
  message: string;
}