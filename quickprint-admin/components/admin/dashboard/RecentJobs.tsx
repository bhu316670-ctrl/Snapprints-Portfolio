"use client";

interface Job {
  job_id: string;
  machine_id: string;
  status: string;
  created_at: string;
}

import type { LiveJob } from "@/services/dashboard.service";

interface Props {
  jobs: LiveJob[];
}

export default function RecentJobs({
  jobs,
}: Props) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-5">
        Recent Print Jobs
      </h2>

      <table className="w-full">

        <thead className="border-b">

          <tr>

            <th className="text-left py-3">
              Job ID
            </th>

            <th className="text-left py-3">
              Machine
            </th>

            <th className="text-left py-3">
              Status
            </th>

            <th className="text-left py-3">
              Time
            </th>

          </tr>

        </thead>

        <tbody>

          {jobs.map((job) => (

            <tr
              key={job.job_id}
              className="border-b hover:bg-gray-50"
            >

              <td className="py-3">
                {job.job_id}
              </td>

              <td>
                {job.machine_id}
              </td>

              <td>

                <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                  {job.status}
                </span>

              </td>

              <td>
                {new Date(
                  job.created_at
                ).toLocaleString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}