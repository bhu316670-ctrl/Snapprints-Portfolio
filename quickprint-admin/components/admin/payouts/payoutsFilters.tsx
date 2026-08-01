"use client";
import SearchBox from "@/components/ui/SearchBox";
interface PayoutFiltersProps {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const statuses = [
  "All",
  "Pending",
  "Approved",
  "Rejected",
  "Paid",
];

export default function PayoutFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: PayoutFiltersProps) {
  return (
    <div className="bg-white border rounded-xl p-4 flex flex-col md:flex-row gap-4 justify-between">
    <SearchBox
  value={search}
  onChange={onSearchChange}
  placeholder="Search withdrawals..."
/>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full md:w-56"
      >
        {statuses.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}