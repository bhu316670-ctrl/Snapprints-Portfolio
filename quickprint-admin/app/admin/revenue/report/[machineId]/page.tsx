import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  IndianRupee,
  FileText,
  Copy,
} from "lucide-react";


import PageHeader from "@/components/ui/PageHeader";

interface Props {
  params: Promise<{
    machineId: string;
  }>;
}

export default async function MachineRevenueReportPage({
  params,
}: Props) {

  const { machineId } = await params;

  return (
    <div className="space-y-6">

      <PageHeader
        title={`Revenue Report - ${machineId}`}
        description="Machine-wise revenue report"
        action={
          <Link
            href="/admin/revenue"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Back
          </Link>
        }
      />

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white rounded-xl border p-5 shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">
              Total Revenue
            </span>

            <IndianRupee className="text-green-600" />
          </div>

          <h2 className="text-3xl font-bold mt-4">
            ₹18,640
          </h2>
        </div>

        <div className="bg-white rounded-xl border p-5 shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">
              Print Jobs
            </span>

            <FileText className="text-blue-600" />
          </div>

          <h2 className="text-3xl font-bold mt-4">
            682
          </h2>
        </div>

        <div className="bg-white rounded-xl border p-5 shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">
              Pages Printed
            </span>

            <Copy className="text-purple-600" />
          </div>

          <h2 className="text-3xl font-bold mt-4">
            4,921
          </h2>
        </div>

        <div className="bg-white rounded-xl border p-5 shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">
              Machine Status
            </span>

            <Printer className="text-orange-500" />
          </div>

          <h2 className="text-xl font-semibold mt-4 text-green-600">
            Active
          </h2>
        </div>

      </div>

      {/* Machine Information */}

      <div className="bg-white rounded-xl border shadow-sm">

        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">
            Machine Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">

          <div>
            <p className="text-sm text-gray-500">
              Machine ID
            </p>

            <p className="font-semibold">
              {machineId}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Location
            </p>

            <p className="font-semibold">
              Mumbai Central Station
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Installed On
            </p>

            <p className="font-semibold">
              15 Jan 2026
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Last Print
            </p>

            <p className="font-semibold">
              Today • 10:42 AM
            </p>
          </div>

        </div>

      </div>

      {/* Revenue Breakdown */}

      <div className="bg-white rounded-xl border shadow-sm">

        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">
            Revenue Breakdown
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left px-6 py-3">
                Category
              </th>

              <th className="text-left px-6 py-3">
                Revenue
              </th>

              <th className="text-left px-6 py-3">
                Jobs
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t">
              <td className="px-6 py-4">
                Black & White
              </td>

              <td className="px-6 py-4">
                ₹9,120
              </td>

              <td className="px-6 py-4">
                418
              </td>
            </tr>

            <tr className="border-t">
              <td className="px-6 py-4">
                Color Prints
              </td>

              <td className="px-6 py-4">
                ₹9,520
              </td>

              <td className="px-6 py-4">
                264
              </td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* Recent Transactions */}

      <div className="bg-white rounded-xl border shadow-sm">

        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">
            Recent Print Jobs
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="px-6 py-3 text-left">
                Job ID
              </th>

              <th className="px-6 py-3 text-left">
                Date
              </th>

              <th className="px-6 py-3 text-left">
                Pages
              </th>

              <th className="px-6 py-3 text-left">
                Amount
              </th>

              <th className="px-6 py-3 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t">
              <td className="px-6 py-4">
                JOB100248
              </td>

              <td className="px-6 py-4">
                Today
              </td>

              <td className="px-6 py-4">
                12
              </td>

              <td className="px-6 py-4">
                ₹48
              </td>

              <td className="px-6 py-4">
                <span className="text-green-600 font-medium">
                  Printed
                </span>
              </td>
            </tr>

            <tr className="border-t">
              <td className="px-6 py-4">
                JOB100247
              </td>

              <td className="px-6 py-4">
                Today
              </td>

              <td className="px-6 py-4">
                5
              </td>

              <td className="px-6 py-4">
                ₹20
              </td>

              <td className="px-6 py-4">
                <span className="text-green-600 font-medium">
                  Printed
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}