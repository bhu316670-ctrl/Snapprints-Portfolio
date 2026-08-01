import BankForm from "@/components/admin/bank/BankForm";

export default function AddBankPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Add Bank Account
      </h1>

      <BankForm />

    </div>
  );
}