"use client"
import { useState } from "react"
import { InfoModal } from "./info-modal-team"
import { Button } from "@/components/ui/button"
import { ArrowUp, Mail, Phone } from "lucide-react"

export function TeamCard({ name, position, email, imageUrl }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm text-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{position}</p>
      <div className="flex items-center justify-center gap-2 text-blue-600 hover:underline">
        <Mail className="w-4 h-4" />
        <a href={`mailto:${email}`} className="text-sm">
          {email}
        </a>
      </div>
    </div>
  )
}

export function NewFooter() {

  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    content: null,
  })

  const openModal = (title, content) => {
    setModalState({
      isOpen: true,
      title,
      content,
    })
  }

  const closeModal = () => {
    setModalState({
      isOpen: false,
      title: "",
      content: null,
    })
  }

  const TeamContent = (
    <div className="space-y-6 ">

      <div className="flex flex-wrap  justify-center gap-6 text-gray-700 "> 
        <TeamCard  name="Dr. S. Ramesh" position="Faculty Advisor" email="ramesh@iittp.ac.in" imageUrl="/images/ramesh.jpg"/>
        <TeamCard  name="Dr. S. Ramesh" position="Faculty Advisor" email="ramesh@iittp.ac.in" imageUrl="/images/ramesh.jpg"/>
        <TeamCard  name="Dr. S. Ramesh" position="Faculty Advisor" email="ramesh@iittp.ac.in" imageUrl="/images/ramesh.jpg"/>
        <TeamCard  name="Dr. S. Ramesh" position="Faculty Advisor" email="ramesh@iittp.ac.in" imageUrl="/images/ramesh.jpg"/>
        <TeamCard  name="Dr. S. Ramesh" position="Faculty Advisor" email="ramesh@iittp.ac.in" imageUrl="/images/ramesh.jpg"/>
        <TeamCard  name="Dr. S. Ramesh" position="Faculty Advisor" email="ramesh@iittp.ac.in" imageUrl="/images/ramesh.jpg"/>
        
        
      </div>
      
    </div>)

  
  return (
    <footer id="contact" className="bg-slate-800 text-white relative py-4">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Contact At Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 inline-block">Contact At</h3>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Indian Institute of Technology, Tirupati
                <br />
                Andhra Pradesh,
                <br />
                India - 517619.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a
                    href="mailto:office.placement@iittp.ac.in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                  placement_officer@iittp.ac.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a
                    href="mailto:office.internship@iittp.ac.in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    placement@iittp.ac.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">+91 9966830630</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">+91 8985464383</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://iittp.pod.ai/pages/campus-placements" className="text-gray-300 hover:text-white transition-colors">
                  Placement Registration link
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Placement Brochure
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/11LhF0ejg4GjpGzz7w2RxKdHp8DCRD5rfsodmgYuXE68/edit?tab=t.0#heading=h.22g88jf3mc9a" className="text-gray-300 hover:text-white transition-colors">
                  Placement Policies
                </a>
              </li>
              <li>
                <a href="https://cdc.iittp.ac.in/pdfs/AIPCGuidelines.pdf" className="text-gray-300 hover:text-white transition-colors">
                  AIPC Guidelines
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition-colors " 
                onClick={() => openModal("Meet our Team", TeamContent)} >
                  Meet our Team
                </a>
              </li>
            </ul>
          </div>

          {/* External Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 inline-block">External Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.iittp.ac.in/" className="text-gray-300 hover:text-white transition-colors">
                  IIT Tirupati
                </a>
              </li>
              <li>
                <a href="https://sa.iittp.ac.in/" className="text-gray-300 hover:text-white transition-colors">
                  Student Gymkhana
                </a>
              </li>
            </ul>
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
      <InfoModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        content={modalState.content}
      />
    </footer>
  )
}
