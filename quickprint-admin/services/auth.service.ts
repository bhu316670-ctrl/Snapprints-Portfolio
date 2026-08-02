import api from "@/lib/axios";
import { LoginResponse, User } from "@/types/auth";

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
    localStorage.setItem("user", JSON.stringify(data.user));

    document.cookie = `token=${data.token}; path=/`;
    document.cookie = `role=${data.user.role}; path=/`;

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
    localStorage.setItem("user", JSON.stringify(data.user));

    document.cookie = `token=${data.token}; path=/`;
    document.cookie = `role=${data.user.role}; path=/`;

    return data;
  }

  async me(): Promise<{
    success: boolean;
    user: User;
  }> {
    const { data } = await api.get("/auth/me");

    return data;
  }

  async logout() {
    try {
      await api.post("/auth/logout");
    } catch {}

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    document.cookie =
      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    document.cookie =
      "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  }
}

export default new AuthService();