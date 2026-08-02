"use client";

export type RevenuePeriod =
  | "today"
  | "week"
  | "month"
  | "six_months"
  | "year";

interface Props {
  value: RevenuePeriod;
  onChange: (period: RevenuePeriod) => void;
}

const periods: {
  label: string;
  value: RevenuePeriod;
}[] = [
  {
    label: "Today",
    value: "today",
  },
  {
    label: "Week",
    value: "week",
  },
  {
    label: "Month",
    value: "month",
  },
  {
    label: "6 Months",
    value: "six_months",
  },
  {
    label: "Year",
    value: "year",
  },
];

export default function RevenueFilters({
  value,
  onChange,
}: Props) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">

      <div className="flex flex-wrap gap-3">

        {periods.map((period) => (

          <button
            key={period.value}
            onClick={() => onChange(period.value)}
            className={`px-5 py-2 rounded-lg border transition-all duration-200 font-medium ${
              value === period.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {period.label}
          </button>

        ))}

      </div>

    </div>
  );
}