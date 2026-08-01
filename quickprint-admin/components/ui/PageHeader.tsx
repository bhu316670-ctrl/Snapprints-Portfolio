"use client";

import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function PageHeader({
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-gray-500">
            {description}
          </p>
        )}

      </div>

      {/* Right */}

      {action && (
        <div>
          {action}
        </div>
      )}

    </div>
  );
}