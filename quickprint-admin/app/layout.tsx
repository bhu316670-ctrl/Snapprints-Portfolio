import "./globals.css";
import AuthProvider from "@/contexts/AuthContext";

export const metadata = {
  title: "SnapPrint Dashboard",
  description: "SnapPrint Admin & User Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}