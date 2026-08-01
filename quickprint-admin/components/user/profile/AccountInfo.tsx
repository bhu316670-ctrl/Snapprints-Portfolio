"use client";

interface Props {
  account: {
    userId: string;
    role: string;
    joinedOn: string;
    assignedMachines: number;
    status: string;
  };
}

export default function AccountInfo({ account }: Props) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Account Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-sm text-gray-500">User ID</p>
          <p className="font-medium mt-1">{account.userId}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Role</p>
          <p className="font-medium mt-1">{account.role}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Joined On</p>
          <p className="font-medium mt-1">{account.joinedOn}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Assigned Machines</p>
          <p className="font-medium mt-1">
            {account.assignedMachines}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Status</p>

          <span
            className={`inline-flex mt-2 px-3 py-1 rounded-full text-sm font-medium ${
              account.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {account.status}
          </span>

        </div>

      </div>

    </div>
  );
}