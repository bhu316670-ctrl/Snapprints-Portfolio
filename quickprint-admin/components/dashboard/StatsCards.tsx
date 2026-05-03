import { Card, CardContent } from "@/components/ui/card"

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">

      <Card>
        <CardContent className="p-6">
          <p className="text-gray-500 text-sm">Machines</p>
          <h2 className="text-2xl font-bold">12</h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-gray-500 text-sm">Online</p>
          <h2 className="text-2xl font-bold text-green-600">10</h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-gray-500 text-sm">Prints Today</p>
          <h2 className="text-2xl font-bold">342</h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-gray-500 text-sm">Revenue</p>
          <h2 className="text-2xl font-bold">₹684</h2>
        </CardContent>
      </Card>

    </div>
  )
}