"use client"
import { useState } from "react"
import { InfoModal } from "./info-modal-team"
import { Button } from "@/components/ui/button"
import { ArrowUp, Mail, Phone } from "lucide-react"


export function TeamCard({ name, position, email, imageUrl }) {
  return (
    <div className="bg-[#f5f8fb] rounded-2xl shadow-md p-3 max-w-sm text-center">
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
    <div className="space-y-12 text-gray-700">

      {/* Faculty Advisors */}
      <div >
        <h2 className="text-xl font-bold mb-6 text-center">Faculty</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          <TeamCard name={`Dr. Subbareddy Daggumati`} position="Faculty Advisor Placement"email={`subbareddy.daggumati@iittp.ac.in`} imageUrl="/Team_photo/fa.png"/>
          
          <TeamCard name={`Dr. Prashanth Vooka`} position="Faculty advisor Internships"email={`prashanthv@iittp.ac.in`} imageUrl="/Team_photo/fa_internship.png"/>
          <TeamCard name={`Abhinay IRALA`} position="Placement Officer"email={`placement_officer@iittp.ac.in`} imageUrl="/Team_photo/po1.png"/>
          <TeamCard name={`Prabhu Kiran Jakkula`} position="Placement Officer"email={`placement@iittp.ac.in`} imageUrl="/Team_photo/po2.png"/>

        </div>
      </div>

      {/* Placement Coordinators */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-6 text-center">Placement Coordinators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          <TeamCard name={`Prakhar Gupta`} position="Placement Coordinator"email={`placement_coordinator@iittp.ac.in`} imageUrl="/Team_photo/pc1.png"/>
          <TeamCard name={`Prakhar Gupta`} position="Placement Coordinator"email={`placement_coordinator@iittp.ac.in`} imageUrl="/Team_photo/pc2.png"/>
        </div>
      </div>

      {/* Placement Representatives */}
      <div>
        <h2 className="text-xl font-bold mb-6 text-center">Placement Representatives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <TeamCard name={`Siddhant Chatse`} position="Placement Representative"email={`cs22b016@iittp.ac.in`} imageUrl="/Team_photo/CS22B016.png"/>
          <TeamCard name={`Ambaliya Shankesh`} position="Placement Representative"email={`cs22b005@iittp.ac.in`} imageUrl="/Team_photo/CS22B005.png"/>
          <TeamCard name={`Aniket Johri`} position="Placement Representative"email={`cs22b028@iittp.ac.in`} imageUrl="/Team_photo/CS22B028.png"/>
          <TeamCard name={`Gowlikar Ajitesh`} position="Placement Representative"email={`cs24m118@iittp.ac.in`} imageUrl="/Team_photo/CS24M118.jpg"/>
          <TeamCard name={`Yuvraj`} position="Placement Representative"email={`ee22b054@iittp.ac.in`} imageUrl="/Team_photo/EE22B054.jpg"/>
          <TeamCard name={`Vanama Sai Srinivas`} position="Placement Representative"email={`ee22b052@iittp.ac.in`} imageUrl="/Team_photo/EE22B052.jpg"/>
          <TeamCard name={`Surapuraju Krishna Niketh`} position="Placement Representative"email={`ee22b047@iittp.ac.in`} imageUrl="/Team_photo/EE22B047.jpg"/>
          <TeamCard name={`Akshatha C`} position="Placement Representative"email={`ee24m118@iittp.ac.in`} imageUrl="/Team_photo/EE24M118.jpeg"/>
          <TeamCard name={`Geggila Kiran`} position="Placement Representative"email={`ee24m205@iittp.ac.in`} imageUrl="/Team_photo/EE24M205.jpg"/>
          <TeamCard name={`Rajit Billowria`} position="Placement Representative"email={`ee24m303@iittp.ac.in`} imageUrl="/Team_photo/EE24M303.jpg"/>
          <TeamCard name={`Atharv Nagar`} position="Placement Representative"email={`me22b006@iittp.ac.in`} imageUrl="/Team_photo/ME22B006.png"/>
          <TeamCard name={`Dasari Pranavesh Reddy`} position="Placement Representative"email={`me22b017@iittp.ac.in`} imageUrl="/Team_photo/ME22B017.jpeg"/>
          <TeamCard name={`Jada Saikeerthi`} position="Placement Representative"email={`me22b025@iittp.ac.in`} imageUrl="/Team_photo/ME22B025.jpg"/> 
          <TeamCard name={`Boni Sadgurunag Kaushik `} position="Placement Representative"email={`me24m116@iittp.ac.in`} imageUrl="/Team_photo/ME24M116.jpg"/> 
          <TeamCard name={`Kambala Kiran kumar`} position="Placement Representative"email={`me24m208@iittp.ac.in`} imageUrl="/Team_photo/ME24M208.jpg"/> 
          <TeamCard name={`Kushagra Agarwal`} position="Placement Representative"email={`ch22b020@iittp.ac.in`} imageUrl="/Team_photo/CH22B020.png"/>
          <TeamCard name={`Palak Khandelwal`} position="Placement Representative"email={`ch22b026@iittp.ac.in`} imageUrl="/Team_photo/CH22B026.jpg"/>
          <TeamCard name={`Aryan raj`} position="Placement Representative"email={`ch24m101@iittp.ac.in`} imageUrl="/Team_photo/CH24M101.jpg"/>
          <TeamCard name={`Adarsh Kumar`} position="Placement Representative"email={`ce22b001@iittp.ac.in`} imageUrl="/Team_photo/CE22B001.png"/>
          <TeamCard name={`Tanvi Gupta`} position="Placement Representative"email={`ce22b035@iittp.ac.in`} imageUrl="/Team_photo/CE22B035.jpg"/>
          <TeamCard name={`Tarun Raj`} position="Placement Representative"email={`ce24m114@iittp.ac.in`} imageUrl="/Team_photo/CE24M114.jpg"/>
          <TeamCard name={`Omkar Pise`} position="Placement Representative"email={`ce24m205@iittp.ac.in`} imageUrl="/Team_photo/CE24M205.jpg"/>
          <TeamCard name={`Anna Tomy`} position="Placement Representative"email={`ce24m303@iittp.ac.in`} imageUrl="/Team_photo/CE24M303.jpg"/>
          <TeamCard name={`Ayush Nagle`} position="Placement Representative"email={`ce24m404@iittp.ac.in`} imageUrl="/Team_photo/CE24M404.png"/>
          
          <TeamCard name={`Deepak Kumar Kaushal`} position="Placement Representative"email={`ph24m003@iittp.ac.in`} imageUrl="/Team_photo/PH24M003.jpg"/> 
          <TeamCard name={`Navin Balaji Vallakati`} position="Placement Representative"email={`cy24m008@iittp.ac.in`} imageUrl="/Team_photo/CY24M008.png"/>
          <TeamCard name={`Debasish Pradhan`} position="Placement Representative"email={`ma24m004@iittp.ac.in`} imageUrl="/Team_photo/MA24M004.jpg"/>
          <TeamCard name={`Sompalli Pranav Surya`} position="Placement Representative"email={`hs24m116@iittp.ac.in`} imageUrl="/Team_photo/HS24M116.png"/>
        </div>
      </div>

    </div>
  )



  return (
    <footer id="contact" className="bg-[#113F67]  text-white relative px-8 py-4">
      <div className="container mx-8 px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact At Section */}
          <div className="pl-20">
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
                <a className="text-gray-300 hover:text-white transition-colors cursor-pointer"
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
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#113f67] hover:bg-[#d92c54] shadow-lg z-50"
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
