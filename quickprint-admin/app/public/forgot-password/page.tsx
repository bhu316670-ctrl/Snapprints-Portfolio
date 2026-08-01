export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="border p-8 rounded w-[400px]">

        <h1 className="text-2xl font-bold mb-4">
          Forgot Password
        </h1>

        <input
          placeholder="Enter Email"
          className="border p-2 w-full mb-4"
        />

        <button
          className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Send Reset Link
        </button>

      </div>

    </div>
  );
}