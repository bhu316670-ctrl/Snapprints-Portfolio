import Link from "next/link";
import {
  Printer,
  FileText,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function PublicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Hero */}

        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-900">
            Welcome to
            <span className="text-blue-600">
              {" "}
              SnapPrint
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Print your documents securely from anywhere.
            Upload, pay online and collect your prints
            instantly from any SnapPrint kiosk.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/public/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Login
            </Link>

            <Link
              href="/"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition"
            >
              Go to Printing Portal
            </Link>

          </div>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          <div className="bg-white rounded-xl shadow p-6">

            <Printer
              className="text-blue-600 mb-4"
              size={36}
            />

            <h3 className="font-semibold text-lg mb-2">
              Instant Printing
            </h3>

            <p className="text-gray-600 text-sm">
              Print documents in less than a minute from any
              SnapPrint kiosk.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <FileText
              className="text-green-600 mb-4"
              size={36}
            />

            <h3 className="font-semibold text-lg mb-2">
              Multiple Formats
            </h3>

            <p className="text-gray-600 text-sm">
              Supports PDF, DOCX, images and other commonly
              used document formats.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <ShieldCheck
              className="text-purple-600 mb-4"
              size={36}
            />

            <h3 className="font-semibold text-lg mb-2">
              Secure
            </h3>

            <p className="text-gray-600 text-sm">
              Files are encrypted and automatically removed
              after printing.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Clock
              className="text-orange-500 mb-4"
              size={36}
            />

            <h3 className="font-semibold text-lg mb-2">
              24 × 7 Available
            </h3>

            <p className="text-gray-600 text-sm">
              Access your nearest SnapPrint machine anytime,
              day or night.
            </p>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 bg-white rounded-2xl shadow-lg p-10 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Print?
          </h2>

          <p className="text-gray-600 mb-8">
            Login to your account and start printing in just a
            few clicks.
          </p>

          <Link
            href="/public/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Login Now
          </Link>

        </div>

      </div>

    </div>
  );
}