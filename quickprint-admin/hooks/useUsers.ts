"use client";

import { useEffect, useState } from "react";

import userService, {
  User,
} from "@/services/user.service";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);

  async function loadUsers() {
    try {
      const data = await userService.getUsers();

      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    loading,
    reload: loadUsers,
  };
}