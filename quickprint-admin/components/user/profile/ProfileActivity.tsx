"use client";

const activities = [
  {
    id: 1,
    title: "Machine Assigned",
    description: "Engineering Block",
    date: "22 Jul 2026",
  },
  {
    id: 2,
    title: "Withdrawal Requested",
    description: "₹7,500",
    date: "20 Jul 2026",
  },
  {
    id: 3,
    title: "Bank Account Updated",
    description: "ICICI Bank",
    date: "18 Jul 2026",
  },
  {
    id: 4,
    title: "Payout Received",
    description: "₹5,400",
    date: "15 Jul 2026",
  },
];

export default function ProfileActivity() {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity) => (

          <div
            key={activity.id}
            className="flex justify-between items-start border-b last:border-0 pb-4"
          >

            <div>

              <h3 className="font-semibold">
                {activity.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {activity.description}
              </p>

            </div>

            <span className="text-sm text-gray-500">
              {activity.date}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}