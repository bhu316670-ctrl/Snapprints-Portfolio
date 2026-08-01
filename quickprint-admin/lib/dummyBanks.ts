export interface BankAccount {
  id: number;

  userId: string;
  userName: string;
  email: string;
  phone: string;

  bankName: string;
  accountHolder: string;
  accountNumber: string;
  ifsc: string;

  verified: boolean;
}

export const bankAccounts: BankAccount[] = [
  {
    id: 1,
    userId: "USR001",
    userName: "Bhushan Jadhav",
    email: "bhushan@gmail.com",
    phone: "+91 9876543210",

    bankName: "ICICI Bank",
    accountHolder: "Bhushan Jadhav",
    accountNumber: "XXXX2456",
    ifsc: "ICIC0001234",

    verified: true,
  },

  {
    id: 2,
    userId: "USR002",
    userName: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9123456780",

    bankName: "HDFC Bank",
    accountHolder: "Rahul Sharma",
    accountNumber: "XXXX8891",
    ifsc: "HDFC0004321",

    verified: false,
  },

  {
    id: 3,
    userId: "USR003",
    userName: "Amit Patil",
    email: "amit@gmail.com",
    phone: "+91 9988776655",

    bankName: "State Bank of India",
    accountHolder: "Amit Patil",
    accountNumber: "XXXX1012",
    ifsc: "SBIN0005678",

    verified: true,
  },
];