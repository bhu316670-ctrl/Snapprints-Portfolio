import PageHeader from "@/components/ui/PageHeader";

import ProfileCard from "@/components/user/profile/ProfileCard";
import PersonalInfo from "@/components/user/profile/PersonalInfo";
import AccountInfo from "@/components/user/profile/AccountInfo";
import ProfileActivity from "@/components/user/profile/ProfileActivity";

const profile = {
  fullName: "Bhushan Jadhav",
  email: "bhushan@gmail.com",
  phone: "+91 9876543210",
  address: "Engineering College Campus",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400001",

  role: "Machine Owner",
  status: "Active",

  userId: "USR001",
  joinedOn: "10 Jan 2026",
  assignedMachines: 3,
};

export default function ProfilePage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Profile"
        description="Manage your personal information and account details."
      />

      <ProfileCard
        profile={{
          fullName: profile.fullName,
          email: profile.email,
          phone: profile.phone,
          role: profile.role,
          status: profile.status,
        }}
      />

      <PersonalInfo profile={profile} />

      <AccountInfo
        account={{
          userId: profile.userId,
          role: profile.role,
          joinedOn: profile.joinedOn,
          assignedMachines: profile.assignedMachines,
          status: profile.status,
        }}
      />

      <ProfileActivity />

    </div>
  );
}