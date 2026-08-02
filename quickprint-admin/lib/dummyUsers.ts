export interface User {
  id: number;

  fullName: string;

  email: string;

  phone: string;

  company: string;

  address: string;

  status: "Active" | "Inactive";

  assignedMachines: string[];
}

export const users: User[] = [
  {
    id: 1,
    fullName: "Bhushan Jadhav",
    email: "bhushan@snapprint.com",
    phone: "9876543210",
    company: "SnapPrint",
    address: "Mumbai",
    status: "Active",
    assignedMachines: ["SNP001", "SNP003"],
  },
  {
    id: 2,
    fullName: "Rahul Sharma",
    email: "rahul@snapprint.com",
    phone: "9876500000",
    company: "SnapPrint",
    address: "Pune",
    status: "Active",
    assignedMachines: ["SNP002"],
  },
];