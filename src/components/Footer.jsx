"use client"
import { Button } from "./ui/button"
import { ArrowUp, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-800 text-white relative">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact At Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 inline-block">Contact At</h3>
            <div className="space-y-4 flex-1">
              <p className="text-gray-300 leading-relaxed">
                Office of Career Services (OCS),
                <br />
                Indian Institute of Technology, Tirupati,
                <br />
                Andhra Pradesh,
                <br />
                India-517601.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a
                    href="mailto:office.placement@iittp.ac.in"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    office.placement@iittp.ac.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a
                    href="mailto:office.internship@iittp.ac.in"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    office.internship@iittp.ac.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">040 2301 6810</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">040 2301 6184</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 inline-block">Quick Links</h3>
            <div className="flex-1">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                    Placement Registration link
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                    Placement Brochure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                    Intern Brochure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                    AIPC Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                    Meet our Team
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* External Links Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 inline-block">External Links</h3>
            <div className="flex-1">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                    IIT Hyderabad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                    Student Gymkhana
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                    Academic Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                    Campus Life
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                    Research Portal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </footer>
  )
}
