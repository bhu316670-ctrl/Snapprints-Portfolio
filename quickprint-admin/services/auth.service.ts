import api from "@/lib/axios";
import {
  LoginResponse,
  User,
} from "@/types/auth";

class AuthService {
  async adminLogin(
    email: string,
    password: string
  ): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>(
      "/auth/admin/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", data.token);

    return data;
  }

  async userLogin(
    email: string,
    password: string
  ): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>(
      "/auth/user/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", data.token);

    return data;
  }

  async me(): Promise<{
    success: boolean;
    user: User;
  }> {
    const { data } = await api.get("/auth/me");

    return data;
  }

  async logout(): Promise<void> {
    try {
      await api.post("/auth/logout");
    } catch (_) {}

    localStorage.removeItem("token");
  }
}

export default new AuthService();