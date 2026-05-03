import "./globals.css"
import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import { Toaster } from "react-hot-toast"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100">
        
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="p-6">
            {children}
            <Toaster position="top-right" />
          </main>

        </div>

      </body>
    </html>
  )
}