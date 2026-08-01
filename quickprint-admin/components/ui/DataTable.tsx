"use client";

import { ReactNode } from "react";

interface DataTableProps {
  children: ReactNode;

  loading?: boolean;

  empty?: boolean;

  emptyMessage?: string;
}

export default function DataTable({
  children,
  loading = false,
  empty = false,
  emptyMessage = "No data available.",
}: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

      <div className="overflow-x-auto">

        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading...
          </div>
        ) : empty ? (
          <div className="p-10 text-center text-gray-500">
            {emptyMessage}
          </div>
        ) : (
          children
        )}

      </div>

    </div>
  );
}