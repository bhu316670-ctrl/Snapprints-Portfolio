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
  async getMachines() {
    const { data } = await api.get("/admin/machineinfo");
    return data;
  }

  async getMachine(machineId: string) {
    const machines = await this.getMachines();

    return machines.find(
      (m: Machine) => m.machine_id === machineId
    );
  }

  async createMachine(payload: MachinePayload) {
    const { data } = await api.post(
      "/admin/createmachine",
      payload
    );

    return data;
  }
async deleteMachine(machineId: string) {
  const { data } = await api.delete(
    `/admin/machines/${machineId}`
  );

  return data;
} 

  async updateMachine(
    machineId: string,
    payload: MachinePayload
  ) {
    const { data } = await api.put(
      `/admin/machines/${machineId}`,
      payload
    );

    return data;
  }
}

export default new MachineService();