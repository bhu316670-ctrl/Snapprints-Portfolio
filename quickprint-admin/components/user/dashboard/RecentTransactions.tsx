"use client";

const activities = [
  {
    title: "Print Job Completed",
    subtitle: "Engineering Block",
    amount: "+₹120",
    date: "Today",
  },
  {
    title: "Withdrawal Requested",
    subtitle: "Request #WD1024",
    amount: "₹7,250",
    date: "Yesterday",
  },
  {
    title: "Machine Online",
    subtitle: "Library",
    amount: "",
    date: "2 days ago",
  },
  {
    title: "Revenue Received",
    subtitle: "Admin Building",
    amount: "+₹850",
    date: "3 days ago",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="flex justify-between items-center border-b pb-4 last:border-none"
          >

            <div>

              <h3 className="font-medium">
                {activity.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {activity.subtitle}
              </p>

            </div>

            <div className="text-right">

              <p className="font-semibold">

                {activity.amount}

              </p>

              <p className="text-xs text-gray-400">

                {activity.date}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}