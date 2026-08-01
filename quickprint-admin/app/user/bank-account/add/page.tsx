import PageHeader from "@/components/ui/PageHeader";
import BankForm from "@/components/user/bank/BankForm";

export default function AddBankPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Add Bank Account"
        description="Add a new bank account for withdrawals."
      />

      <BankForm />

    </div>
  );
}