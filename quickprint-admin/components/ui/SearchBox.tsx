"use client";

import { Search, X } from "lucide-react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;

  placeholder?: string;

  className?: string;

  showClear?: boolean;
}

export default function SearchBox({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  showClear = true,
}: SearchBoxProps) {
  return (
    <div className={`relative w-full max-w-md ${className}`}>

      {/* Search Icon */}

      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      {/* Input */}

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-10 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

      {/* Clear Button */}

      {showClear && value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
        >
          <X size={16} />
        </button>
      )}

    </div>
  );
}