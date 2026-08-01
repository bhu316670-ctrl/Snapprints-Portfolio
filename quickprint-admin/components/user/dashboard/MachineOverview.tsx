"use client";

const machines = [
  {
    id: "SNP001",
    name: "Engineering Block",
    status: "Online",
    revenue: "₹6,250",
  },
  {
    id: "SNP002",
    name: "Library",
    status: "Offline",
    revenue: "₹4,820",
  },
  {
    id: "SNP003",
    name: "Admin Building",
    status: "Online",
    revenue: "₹7,380",
  },
];

export default function MachineOverview() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        My Machines
      </h2>

      <div className="space-y-4">

        {machines.map((machine) => (

          <div
            key={machine.id}
            className="flex justify-between items-center border rounded-lg p-4 hover:bg-gray-50"
          >

            <div>

              <h3 className="font-semibold">
                {machine.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {machine.id}
              </p>

            </div>

            <div className="text-center">

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  machine.status === "Online"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {machine.status}
              </span>

            </div>

            <div className="font-bold text-lg">

              {machine.revenue}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}