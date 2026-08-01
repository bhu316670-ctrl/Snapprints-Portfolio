export interface Report {
  id: number;

  date: string;

  machineId: string;
  machineName: string;

  owner: string;

  prints: number;

  revenue: number;

  commission: number;

  ownerEarnings: number;
}

export const reports: Report[] = [
  {
    id: 1,
    date: "2026-07-20",
    machineId: "SNP001",
    machineName: "Engineering Block",
    owner: "Bhushan Jadhav",
    prints: 421,
    revenue: 2450,
    commission: 490,
    ownerEarnings: 1960,
  },
  {
    id: 2,
    date: "2026-07-19",
    machineId: "SNP002",
    machineName: "Library",
    owner: "Rahul Sharma",
    prints: 318,
    revenue: 1810,
    commission: 362,
    ownerEarnings: 1448,
  },
  {
    id: 3,
    date: "2026-07-18",
    machineId: "SNP003",
    machineName: "Admin Building",
    owner: "Amit Patil",
    prints: 502,
    revenue: 2980,
    commission: 596,
    ownerEarnings: 2384,
  },
];