"use client";

interface Props {
  value: "today" | "week" | "month" | "year";
  onChange: (
    value: "today" | "week" | "month" | "year"
  ) => void;
}

const filters = [
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
    label: "Year",
    value: "year",
  },
] as const;

export default function RevenueFilters({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex gap-3 flex-wrap">

      {filters.map((filter) => (

        <button
          key={filter.value}
          onClick={() =>
            onChange(filter.value)
          }
          className={`px-4 py-2 rounded-lg border transition ${
            value === filter.value
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white hover:bg-gray-50"
          }`}
        >
          {filter.label}
        </button>

      ))}

    </div>
  );
}