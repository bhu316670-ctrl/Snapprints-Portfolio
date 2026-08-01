"use client";

import SearchBox from "@/components/ui/SearchBox";

interface ReportFiltersProps {
  search: string;
  period: string;
  onSearchChange: (value: string) => void;
  onPeriodChange: (value: string) => void;
}

const periods = [
  { label: "Today", value: "today" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
  { label: "6 Months", value: "six_months" },
  { label: "Year", value: "year" },
];

export default function ReportFilters({
  search,
  period,
  onSearchChange,
  onPeriodChange,
}: ReportFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">

      <SearchBox
        value={search}
        onChange={onSearchChange}
        placeholder="Search reports..."
      />

      <div className="flex flex-wrap gap-2">

        {periods.map((item) => (
          <button
            key={item.value}
            onClick={() => onPeriodChange(item.value)}
            className={`px-4 py-2 rounded-lg border transition ${
              period === item.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {item.label}
          </button>
        ))}

      </div>

    </div>
  );
}