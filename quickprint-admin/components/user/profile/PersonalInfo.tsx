"use client";

interface Props {
  profile: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export default function PersonalInfo({
  profile,
}: Props) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <p className="text-sm text-gray-500">
            Full Name
          </p>

          <p className="font-medium mt-1">
            {profile.fullName}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Email Address
          </p>

          <p className="font-medium mt-1">
            {profile.email}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Phone Number
          </p>

          <p className="font-medium mt-1">
            {profile.phone}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            City
          </p>

          <p className="font-medium mt-1">
            {profile.city}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            State
          </p>

          <p className="font-medium mt-1">
            {profile.state}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            PIN Code
          </p>

          <p className="font-medium mt-1">
            {profile.pincode}
          </p>

        </div>

        <div className="md:col-span-2">

          <p className="text-sm text-gray-500">
            Address
          </p>

          <p className="font-medium mt-1">
            {profile.address}
          </p>

        </div>

      </div>

    </div>
  );
}