import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Printer } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Professor In Charge</h3>
              <div className="flex gap-6">
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Prof. Sameer Jadhav</h4>
                  <p className="text-gray-600 mb-4">Department of Chemical Engineering</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[#6366f1]">
                      <Phone className="w-4 h-4" />
                      <span>+91 22 25767096</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#6366f1]">
                      <Mail className="w-4 h-4" />
                      <span>pic.placement@iittp.ac.in</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Placement Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#6366f1] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    4th floor, Gulmohar Building, IIT Tirupati, Yerpedu, Tirupati - 517619, India
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#6366f1]" />
                  <span className="text-gray-700">
                    +91 70453 10120 / +91 70453 10176 / +91 70453 10181 / +91 70453 10182
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Printer className="w-5 h-5 text-[#6366f1]" />
                  <span className="text-gray-700">+91 22 25767092</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#6366f1]" />
                  <span className="text-[#6366f1]">placementcell@iittp.ac.in (For Placements)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#6366f1]" />
                  <span className="text-[#6366f1]">placementcell_phd@iittp.ac.in (For PhD Placements)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#6366f1]" />
                  <span className="text-[#6366f1]">training@iittp.ac.in (For Internships)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
