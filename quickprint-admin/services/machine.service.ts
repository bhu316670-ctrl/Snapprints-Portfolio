import api from "@/lib/axios";

export interface Machine {
  machine_id: string;
  name: string;
  status: string;

  is_print_locked: boolean;

  location_name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;

  revenue: number;
  total_jobs: number;

  last_seen_at: string | null;
  is_online: boolean;
}

export interface MachinePayload {
  name: string;
  locationName: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  latitude?: number;
  longitude?: number;
}

class MachineService {
  async getMachines(): Promise<Machine[]> {
    const { data } = await api.get<Machine[]>(
      "/admin/machineinfo"
    );

    return data;
  }

  async getMachine(
    machineId: string
  ): Promise<Machine | undefined> {
    const machines = await this.getMachines();

    return machines.find(
      (m) => m.machine_id === machineId
    );
  }

  async createMachine(
    payload: MachinePayload
  ): Promise<Machine> {
    const { data } = await api.post<Machine>(
      "/admin/createmachine",
      payload
    );

    return data;
  }

  async updateMachine(
    machineId: string,
    payload: MachinePayload
  ): Promise<Machine> {
    const { data } = await api.put<Machine>(
      `/admin/machines/${machineId}`,
      payload
    );

    return data;
  }

  async deleteMachine(
    machineId: string
  ): Promise<void> {
    await api.delete(
      `/admin/machines/${machineId}`
    );
  }
}

export default new MachineService();