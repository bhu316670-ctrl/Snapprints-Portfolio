import PageHeader from "@/components/ui/PageHeader";

import ProfileSettings from "@/components/admin/settings/ProfileSettings";
import BusinessSettings from "@/components/admin/settings/BusinessSettings";
import CommissionSettings from "@/components/admin/settings/CommissionSettings";
import NotificationSettings from "@/components/admin/settings/NotificationSettings";
import SecuritySettings from "@/components/admin/settings/SecuritySettings";

export default function SettingsPage() {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Settings"
        description="Manage platform settings and administrator preferences."
      />

      <ProfileSettings />

      <BusinessSettings />

      <CommissionSettings />

      <NotificationSettings />

      <SecuritySettings />

    </div>
  );
}