import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export function PlacementManagers() {
  const managers = [
    {
      name: "Aryan Khare",
      role: "Placement Manager for M.Tech & IDC programs.",
      phone: "+91 7049999803",
      email: "pm.placement@iittp.ac.in",
    },
    {
      name: "Yash Shah",
      role: "Placement Manager For B.Tech programs",
      phone: "+91 7977312700",
      email: "pm.placement@iittp.ac.in",
    },
    {
      name: "Shreyas Sinha",
      role: "Placement Manager For B.Tech programs",
      phone: "91 9119188492",
      email: "pm.placement@iittp.ac.in",
    },
    {
      name: "Pushpendra Kumar",
      role: "Placement Manager for D.D. & B.S. programs",
      phone: "+91 7060718647",
      email: "pm.placement@iittp.ac.in",
    },
    {
      name: "Gohil Singhal",
      role: "Placement Manager for Internships & M.Sc. programs",
      phone: "+91 7665600257",
      email: "pm.placement@iittp.ac.in",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Institute Placement Managers</h2>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-5 h-5" />
            <span>pm.placement@iittp.ac.in</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managers.map((manager, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{manager.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{manager.role}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#6366f1]">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{manager.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#6366f1]">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{manager.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-5 h-5" />
            <span>pm_phd.placement@iittp.ac.in</span>
          </div>
        </div>
      </div>
    </section>
  )
}
