"use client";

import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;

  icon?: ReactNode;

  subtitle?: string;

  trend?: string;

  trendType?: "up" | "down";

  color?: "blue" | "green" | "yellow" | "red" | "purple";
}

const colors = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  yellow: "bg-yellow-100 text-yellow-600",
  red: "bg-red-100 text-red-600",
  purple: "bg-purple-100 text-purple-600",
};

export default function StatsCard({
  title,
  value,
  icon,
  subtitle,
  trend,
  trendType = "up",
  color = "blue",
}: StatsCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-1 text-sm text-gray-400">
              {subtitle}
            </p>
          )}

        </div>

        {icon && (
          <div
            className={`h-14 w-14 rounded-xl flex items-center justify-center ${colors[color]}`}
          >
            {icon}
          </div>
        )}

      </div>

      {trend && (
        <div className="mt-4 flex items-center gap-2">

          {trendType === "up" ? (
            <TrendingUp
              size={18}
              className="text-green-600"
            />
          ) : (
            <TrendingDown
              size={18}
              className="text-red-600"
            />
          )}

          <span
            className={
              trendType === "up"
                ? "text-green-600 text-sm font-medium"
                : "text-red-600 text-sm font-medium"
            }
          >
            {trend}
          </span>

        </div>
      )}

    </div>
  );
}