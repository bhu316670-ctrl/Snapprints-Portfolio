import api from "@/lib/axios";

export interface User {
  id: number;

  full_name: string;
  email: string;
  phone: string | null;

  business_name: string | null;
  gst_number: string | null;
  profile_photo: string | null;

  status: "ACTIVE" | "PENDING" | "SUSPENDED";

  created_at: string;
  updated_at: string;
}

export interface UserPayload {
  full_name: string;
  email: string;
  phone?: string;

  business_name?: string;
  gst_number?: string;

  password?: string;
  assignedMachines?: string[];
}

class UserService {
  async getUsers(): Promise<User[]> {
    const { data } = await api.get<User[]>("/admin/users");
    return data;
  }

  async getUser(
    id: number | string
  ): Promise<User | undefined> {
    const users = await this.getUsers();

    return users.find(
      (user) => user.id === Number(id)
    );
  }

  async createUser(
    payload: UserPayload
  ): Promise<User> {
    const { data } = await api.post<User>(
      "/admin/users",
      payload
    );

    return data;
  }

  async updateUser(
    id: number | string,
    payload: UserPayload
  ): Promise<User> {
    const { data } = await api.put<User>(
      `/admin/users/${id}`,
      payload
    );

    return data;
  }

  async deleteUser(
    id: number | string
  ): Promise<void> {
    await api.delete(`/admin/users/${id}`);
  }
}

export default new UserService();