import PageHeader from "@/components/ui/PageHeader";
import ProfileForm from "@/components/user/profile/ProfileForm";

const profile = {
  fullName: "Bhushan Jadhav",
  email: "bhushan@gmail.com",
  phone: "+91 9876543210",
  address: "Engineering College Campus",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400001",
};

export default function EditProfilePage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Edit Profile"
        description="Update your personal information."
      />

      <ProfileForm
        initialValues={profile}
      />

    </div>
  );
}