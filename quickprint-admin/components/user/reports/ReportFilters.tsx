"use client";

import SearchBox from "@/components/ui/SearchBox";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;

  type: string;
  onTypeChange: (value: string) => void;
}

export default function ReportFilters({
  search,
  onSearchChange,
  type,
  onTypeChange,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">

      <SearchBox
        value={search}
        onChange={onSearchChange}
        placeholder="Search reports..."
      />

      <select
        value={type}
        onChange={(e) => onTypeChange(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="All">All Reports</option>
        <option value="Revenue">Revenue</option>
        <option value="Withdrawal">Withdrawal</option>
        <option value="Payout">Payout</option>
      </select>

    </div>
  );
}