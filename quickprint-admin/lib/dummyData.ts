export interface Machine {
  id: number;
  machineId: string;
  name: string;
  location: string;
  owner: string;
  status: "Online" | "Offline";
  revenue: number;
}

export const machines: Machine[] = [
  {
    id: 1,
    machineId: "SNP001",
    name: "Engineering Block",
    location: "Mumbai",
    owner: "Bhushan",
    status: "Online",
    revenue: 12500,
  },
  {
    id: 2,
    machineId: "SNP002",
    name: "Library",
    location: "Pune",
    owner: "Rahul",
    status: "Online",
    revenue: 8400,
  },
  {
    id: 3,
    machineId: "SNP003",
    name: "Admin Building",
    location: "Delhi",
    owner: "Amit",
    status: "Offline",
    revenue: 5600,
  },
];