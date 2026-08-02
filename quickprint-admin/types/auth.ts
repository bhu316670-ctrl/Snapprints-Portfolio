export type UserType = "ADMIN" | "USER";

export interface User {
  id: number;

  name?: string;
  full_name?: string;

  email: string;

  role?: "ADMIN";

  type: UserType;
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