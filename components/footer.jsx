"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const quickLinks = [
    "Workflow System",
    "Engineering Unit",
    "Intranet Website",
    "Health Center",
    "Global Engagement, Alumni and Corporate Relations (GAC)",
    "Competency Development & Outreach",
    "Alumni Center",
    "Technology Innovation Hub",
    "I-STEM at IIT Tirupati",
    "Convocation",
  ]

  const importantLinks = [
    "Rajbhasha",
    "Anti Ragging Committee",
    "Internal Complaints Committee (Anti Sexual Harrasment)",
    "Right to Information",
    "SC/ST/OBC Liaison Officers/Cell",
    "Act and Statutes",
    "Help Desk @ Girl Students",
    "Guidance & Counselling Unit",
    "Creche",
    "KV IIT Tirupati Campus",
  ]

  const exploreLinks = [
    "Computer Center",
    "Central Library",
    "Academic Calendar",
    "Media",
    "Spic Macay",
    "SWAYAM Prabha",
    "Tenders",
    "Campus",
    "Annual Report",
    "Moodle",
  ]

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-[#6366f1] pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-[#6366f1] pb-2 inline-block">
              Important Links
            </h3>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-[#6366f1] pb-2 inline-block">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-[#6366f1] pb-2 inline-block">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📞</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Administration</div>
                  <div className="text-gray-300 text-sm">0877 250 3042</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✉️</span>
                </div>
                <div>
                  <div className="text-sm font-medium">E-Mail address</div>
                  <div className="text-gray-300 text-sm">iittirupati@iittp.ac.in</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📍</span>
                </div>
                <div>
                  <div className="text-gray-300 text-sm">
                    Venkatagiri Road, Yerpedu Post,
                    <br />
                    Tirupati District,
                    <br />
                    Andhra Pradesh - 517619.
                  </div>
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Read More →</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                <div className="text-red-700 font-bold text-xs">
                  IIT
                  <br />
                  TIRUPATI
                </div>
              </div>
              <div className="text-sm">
                <div className="text-yellow-300">भारतीय प्रौद्योगिकी संस्थान तिरुपति</div>
                <div className="text-white">INDIAN INSTITUTE OF TECHNOLOGY TIRUPATI</div>
              </div>
            </div>
            <div className="text-right text-sm">
              <div className="text-white">Copyright © 2024 Indian Institute of Technology Tirupati.</div>
              <div className="text-white">All rights reserved.</div>
              <div className="text-gray-300 mt-1">Developed & Maintained by Computer Center, IIT Tirupati.</div>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </footer>
  )
}
