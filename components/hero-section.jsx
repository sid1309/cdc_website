"use client"
import { Button } from "@/components/ui/button"
import { User, Briefcase, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import { InfoModal } from "./info-modal"
import { useState } from "react"

export function HeroSection() {

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

     const ResumeBuilder = (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed">
        <div className="flex flex-col gap-4 items-center justify-center h-full">
            <Button className="bg-[#113F67] hover:bg-[#D92C54] text-white py-6 px-4 text-lg flex items-center gap-3 justify-start w-90">
              <User className="w-6 h-6" />
              <a href="https://iittp.pod.ai/" target="_blank" rel="noopener noreferrer"> 
              Build Resume using POD (Auto Resume Builder)
              </a>
            </Button>
              
            <Button className="bg-[#113F67] hover:bg-[#D92C54] text-white py-6 px-16 text-lg flex items-center gap-3 justify-start w-90">
              <Briefcase className="w-6 h-6" />
              <a href="#" target="_blank" rel="noopener noreferrer">
              Build Resume using Overleaf (LaTeX)   
              </a>
            </Button>
        </div>
      </p>
    </div>
  )

  return (
    <section className="relative min-h-[600px] flex items-center">
      <Image src="/images/iit-tirupati-campus.jpg" alt="IIT Tirupati Campus" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto h-full min-h-[600px]">
         <div className="text-white flex flex-col items-center justify-center h-full px-4">
            <div className="bg-black/20 rounded-lg p-6">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Talent Connect - IIT Tirupati
              </h1>
              <p className="text-lg mb-8 leading-relaxed">
                We’re excited to have you here at the official recruitment platform of IIT Tirupati.
                As one of India’s fastest-growing IITs, we’re proud to nurture talented, driven, and well-rounded students ready to make a difference. Through a strong academic foundation, hands-on learning, and real-world exposure, our students are prepared to take on challenges and create meaningful impact

                <br />
                We look forward to connecting you with the bright minds of IIT Tirupati. Let’s get started!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <Button  className="bg-[#113F67] hover:bg-[#D92C54] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64">
              <User className="w-6 h-6" />
              <a href="https://iittp.pod.ai/" target="_blank" rel="noopener noreferrer">
              Student
              </a> 
            </Button>
            <Button className="bg-[#113F67] hover:bg-[#D92C54] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64">
              <Briefcase className="w-6 h-6" />
              <a href="https://iittp.pod.ai/pages/campus-placements" target="_blank" rel="noopener noreferrer">
              Recruiter
              </a>
            </Button>
            <Button className="bg-[#113F67] hover:bg-[#D92C54] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64">
              <Users className="w-6 h-6" />
              Placement Team
            </Button>
            <Button className="bg-[#113F67] hover:bg-[#D92C54] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64" onClick={() => openModal("Build Your Resume", ResumeBuilder)}>
              <Users className="w-6 h-6" />
              Resume Builder
            </Button>
          </div>
        </div>
      </div>
      <InfoModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        content={modalState.content}
      />
    </section>
  )
}
