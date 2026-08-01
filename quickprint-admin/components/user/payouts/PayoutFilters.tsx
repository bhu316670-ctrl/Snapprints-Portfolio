"use client";

import SearchBox from "@/components/ui/SearchBox";

interface Props {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const statuses = [
  "All",
  "Pending",
  "Approved",
  "Paid",
  "Rejected",
];

export default function PayoutFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">

      <SearchBox
        value={search}
        onChange={onSearchChange}
        placeholder="Search payouts..."
      />

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="border rounded-lg px-4 py-2 bg-white"
      >
        {statuses.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>

    </div>
  );
}