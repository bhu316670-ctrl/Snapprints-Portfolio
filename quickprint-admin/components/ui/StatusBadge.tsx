"use client";

interface StatusBadgeProps {
  status: string;
}

const styles: Record<
  string,
  {
    bg: string;
    text: string;
  }
> = {
    Verified: {
  bg: "bg-emerald-100",
  text: "text-emerald-700",
},
  Active: {
    bg: "bg-green-100",
    text: "text-green-700",
  },

  Online: {
    bg: "bg-green-100",
    text: "text-green-700",
  },

  Approved: {
    bg: "bg-blue-100",
    text: "text-blue-700",
  },

  Paid: {
    bg: "bg-indigo-100",
    text: "text-indigo-700",
  },

  Pending: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },

  Locked: {
    bg: "bg-orange-100",
    text: "text-orange-700",
  },

  Offline: {
    bg: "bg-red-100",
    text: "text-red-700",
  },

  Rejected: {
    bg: "bg-red-100",
    text: "text-red-700",
  },

  Inactive: {
    bg: "bg-gray-100",
    text: "text-gray-700",
  },
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const style =
    styles[status] || {
      bg: "bg-gray-100",
      text: "text-gray-700",
    };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${style.bg} ${style.text}`}
    >
      {status}
    </span>
  );
}