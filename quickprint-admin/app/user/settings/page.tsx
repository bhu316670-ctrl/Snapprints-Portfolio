import PageHeader from "@/components/ui/PageHeader";

import GeneralSettings from "@/components/user/settings/GeneralSettings";
import NotificationSettings from "@/components/user/settings/NotificationSettings";
import SecuritySettings from "@/components/user/settings/SecuritySettings";

export default function UserSettingsPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Settings"
        description="Manage your application preferences, notifications, and account security."
      />

      <GeneralSettings />

      <NotificationSettings />

      <SecuritySettings />

    </div>
  );
}