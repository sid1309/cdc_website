"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, ChevronRight } from "lucide-react"
import { InfoModal } from "./info-modal"

export function AcademicInfo() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    content: null,
  })

  const reports = [
    { title: "Placement Brochure 2024-25", year: "2024-25" },
    { title: "Placement Report 2023-24", year: "2023-24" },
    { title: "Placement Report 2022-23", year: "2022-23" },
    { title: "Placement Report 2021-22", year: "2021-22" },
    { title: "Placement Report 2020-21", year: "2020-21" },
  ]

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

  const academicFacilitiesContent = (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed">
        IIT Tirupati offers a robust academic environment with 6 B.Tech programs, multiple M.Tech, M.Sc, and Ph.D options, and a strong interdisciplinary focus. The institute has a faculty strength of 119, supporting over 1,100 students, including 852 undergraduates. The new permanent campus includes a modern lecture hall complex, advanced labs, smart classrooms, and library facilities. Students undergo 8-week industrial training after the 6th semester and participate in research, international conferences, and exchange programs through MoUs with global institutions. Regular seminars, workshops, and industry lectures complement classroom learning, equipping students for real-world challenges.
      </p>
    </div>
  )

  const idcContent = (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed">
        The Center for Atomic, Molecular and Optical Sciences & Technologies (CAMOST) is India’s first nationally recognized center dedicated to research in Atomic, Molecular, and Optical (AMO) sciences. It was established to tackle critical challenges in cutting-edge AMO domains, which have far-reaching applications in health, communication, navigation, metrology, space, internet, and quantum technologies. CAMOST is a collaborative initiative between IIT Tirupati and IISER Tirupati, two leading institutions in science and engineering education. It brings together researchers from across India to work under a unified platform. The center was officially inaugurated on 14th August 2020 by Dr. Arabinda Mitra, Scientific Secretary in the Office of the Principal Scientific Advisor to the Government of India, marking the eve of India’s 73rd Independence Day.
      </p>
    </div>
  )

  const departmentsContent = (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed">
         IIT Tirupati is an emerging institute of national importance dedicated to excellence in engineering, science, and technology education. The institute currently offers undergraduate, postgraduate, and doctoral programs across multiple departments.
      </p>
      <p className="text-gray-700 leading-relaxed">
        With a focus on academic rigor and holistic development, IIT Tirupati is continuously expanding its infrastructure and academic offerings. It hosts vibrant departments in core engineering and sciences, along with growing initiatives in design, management, and entrepreneurship, fostering multi-disciplinary learning and innovation.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Engineering Departments:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Computer Science & Engineering</li>
            <li>Electrical Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Civil Engineering</li>
            <li>Chemical Engineering</li>
          </ul>
        </div>
      </div>
    </div>
  )

  return (
    <section id="academic-info" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div>
            <Card className="mb-8 hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Academic Facilities</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  IIT Tirupati offers a robust academic environment with 6 B.Tech programs, multiple M.Tech, M.Sc, and Ph.D options, and a strong interdisciplinary focus. The institute has a faculty strength of 119, supporting over 1,100 students, including 852 undergraduates...

                </p>
                <Button
                  className="bg-[#6366f1] hover:bg-[#5855eb] text-white"
                  onClick={() => openModal("Academic Facilities", academicFacilitiesContent)}
                >
                  See more
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">CAMOST</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  The Center for Atomic, Molecular and Optical Sciences & Technologies (CAMOST) is India’s first nationally recognized center dedicated to research in Atomic, Molecular, and Optical (AMO) sciences. It was established to tackle critical challenges...
                </p>
                <Button
                  className="bg-[#6366f1] hover:bg-[#5855eb] text-white"
                  onClick={() => openModal("CAMOST", idcContent)}
                >
                  Explore CAMOST
                </Button>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Departments & Programs at IIT Tirupati</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                   IIT Tirupati is an emerging institute of national importance dedicated to excellence in engineering, science, and technology education. The institute currently offers undergraduate, postgraduate, and doctoral programs across multiple departments...
                </p>
              
                <Button
                  className="bg-[#6366f1] hover:bg-[#5855eb] text-white"
                  onClick={() => openModal("Departments & Programs at IIT Tirupati", departmentsContent)}
                >
                  Know more
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-[#6366f1]" />
                      <div>
                        <h4 className="font-medium text-[#6366f1]">
                          {report.title.split(" ")[0]} {report.title.split(" ")[1]}
                        </h4>
                        <p className="text-sm text-gray-600">{report.year}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
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
