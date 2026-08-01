export interface Payout {
  id: number;

  userId: string;
  userName: string;
  email: string;
  phone: string;

  machineId: string;
  machineName: string;
  location: string;

  grossRevenue: number;
  platformFee: number;
  ownerEarnings: number;
  availableBalance: number;

  amount: number;

  bankName: string;
  accountHolder: string;
  accountNumber: string;
  ifsc: string;

  requestedAt: string;

  status: "Pending" | "Approved" | "Rejected" | "Paid";
}

export const payouts: Payout[] = [
  {
    id: 1,
    userId: "USR001",
    userName: "Bhushan Jadhav",
    email: "bhushan@gmail.com",
    phone: "+91 9876543210",

    machineId: "SNP001",
    machineName: "Engineering Block",
    location: "Pune",

    grossRevenue: 24500,
    platformFee: 4900,
    ownerEarnings: 19600,
    availableBalance: 9840,

    amount: 7250,

    bankName: "ICICI Bank",
    accountHolder: "Bhushan Jadhav",
    accountNumber: "XXXX2456",
    ifsc: "ICIC0001234",

    requestedAt: "2026-07-20",

    status: "Pending",
  },

  {
    id: 2,
    userId: "USR002",
    userName: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9123456780",

    machineId: "SNP002",
    machineName: "Library",
    location: "Mumbai",

    grossRevenue: 18000,
    platformFee: 3600,
    ownerEarnings: 14400,
    availableBalance: 6000,

    amount: 4800,

    bankName: "HDFC Bank",
    accountHolder: "Rahul Sharma",
    accountNumber: "XXXX8891",
    ifsc: "HDFC0004321",

    requestedAt: "2026-07-19",

    status: "Approved",
  },

  {
    id: 3,
    userId: "USR003",
    userName: "Amit Patil",
    email: "amit@gmail.com",
    phone: "+91 9988776655",

    machineId: "SNP003",
    machineName: "Admin Building",
    location: "Nagpur",

    grossRevenue: 12000,
    platformFee: 2400,
    ownerEarnings: 9600,
    availableBalance: 3200,

    amount: 3200,

    bankName: "SBI",
    accountHolder: "Amit Patil",
    accountNumber: "XXXX1012",
    ifsc: "SBIN0005678",

    requestedAt: "2026-07-18",

    status: "Paid",
  },
];