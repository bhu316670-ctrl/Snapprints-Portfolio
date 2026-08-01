export interface Revenue {
  id: number;

  date: string;

  machineId: string;

  machineName: string;

  owner: string;

  prints: number;

  grossRevenue: number;

  platformFee: number;

  ownerEarnings: number;

  status: "Settled" | "Pending";
}

export const revenues: Revenue[] = [
  {
    id: 1,
    date: "2026-07-20",
    machineId: "SNP001",
    machineName: "Engineering Block",
    owner: "Bhushan",
    prints: 154,

    grossRevenue: 2450,
    platformFee: 490,
    ownerEarnings: 1960,

    status: "Settled",
  },
  {
    id: 2,
    date: "2026-07-20",
    machineId: "SNP002",
    machineName: "Library",
    owner: "Rahul",
    prints: 82,

    grossRevenue: 1260,
    platformFee: 252,
    ownerEarnings: 1008,

    status: "Pending",
  },
];