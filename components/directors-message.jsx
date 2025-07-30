"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { InfoModal } from "./info-modal"
import Image from "next/image"

export function DirectorsMessage() {
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

  const directorsMessageContent = (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">
        Among the first three institutes to gain recognition under the Institute of Eminence (IoE) scheme, IIT Tirupati
        continues its upward journey of excellence in world university rankings. IITTP is ranked 1st in India and 118th
        internationally by the 2025 QS World University Rankings. IIT Tirupati has consistently been the first choice
        for both undergraduate students and postgraduate students in the country in almost all the disciplines of
        Science, Engineering, and Technology.
      </p>
      <p className="text-gray-700 leading-relaxed">
        At the heart of IIT Tirupati's vision lies a deep commitment to empowering the brightest minds to strive for
        excellence in education, research, and innovation across diverse fields, contributing significantly to the
        nation's socio-economic development and global competitiveness. IIT Tirupati Alumni have been recognized as
        leaders and trailblazers in Academia and Research & Development organizations and as Innovators, Entrepreneurs,
        Corporate Leaders, Policy Makers, and Administrators.
      </p>
      <p className="text-gray-700 leading-relaxed">
        IIT Tirupati is the most preferred destination for a large number of highly reputed companies, both within India
        and abroad, for recruiting fresh graduates and post-graduates with outstanding capability, skill, intellect, and
        professional readiness. We highly value our relationship with the recruiters for offering our students highly
        competitive profiles with the intention of grooming them to take up high-level leadership positions within their
        organizations.
      </p>
      <p className="text-gray-700 leading-relaxed">
        We wish our recruiting organizations and graduating students a successful placement season ahead.
      </p>
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-gray-800 font-medium italic">Prof. K.N. Satyanarayana,</p>
        <p className="text-gray-700 italic">Civil & Environmental Engineering Professor</p>
        <p className="text-gray-700 italic">Director, IIT Tirupati</p>
      </div>
    </div>
  )

  return (
    <section id="directors-message" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/director.jpg"
              alt="Prof. Shireesh Kedare"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <div>
            <div className="text-[#113F67]  text-xl font-bold mb-4 tracking-wide">Director's Message</div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome esteemed recruiters and industry partners to Indian Institute of Technology Tirupati. Established in 2015, IIT Tirupati aims to lead in higher education with global impact. We offer B.Tech programs in Civil, Chemical, Computer Science, Electrical, and Mechanical Engineering...

            </p>
            <Button
              className="bg-[#113F67] hover:bg-[#D92C54] text-white mb-8"
              onClick={() => openModal("Director's message", directorsMessageContent)}
            >
              Read more
            </Button>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Prof. K.N. Satyanarayana</h3>
              <p className="text-gray-600">Civil & Environmental Engineering Professor</p>
            </div>
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
