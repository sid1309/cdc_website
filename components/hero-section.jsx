"use client"
import { Button } from "@/components/ui/button"
import { User, Briefcase, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import { InfoModal } from "./info-modal-team"
import { useState } from "react"
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
            <Button className="bg-[#113F67] hover:bg-[#D92C54] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64" onClick={() => openModal("Meet our Team", TeamContent)} >
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
