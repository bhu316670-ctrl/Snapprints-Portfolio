"use client";

import { useEffect, useState } from "react";

import machineService, {
  Machine,
} from "@/services/machine.service";

export default function useMachines() {
  const [machines, setMachines] = useState<Machine[]>([]);

  const [loading, setLoading] = useState(true);

  async function loadMachines() {
    try {
      const data =
        await machineService.getMachines();

      setMachines(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMachines();
  }, []);

  return {
    loading,
    machines,
    reload: loadMachines,
  };
}