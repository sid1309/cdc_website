"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { FileText, ChevronRight } from "lucide-react"
import { InfoModal } from "./InfoModal"

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
        Academics at IIT Tirupati has the flexibility to evolve with ever changing requirements. Various activities are
        carried out to promote research, enhance creativity, learn new skills, implement innovative solutions and
        develop entrepreneurial mindset.
      </p>
      <p className="text-gray-700 leading-relaxed">
        The institute provides state-of-the-art laboratories, research facilities, and computational resources to
        support cutting-edge research across various disciplines. Our faculty members are actively involved in
        interdisciplinary research projects that address real-world challenges.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Advanced research laboratories with modern equipment</li>
        <li>High-performance computing facilities</li>
        <li>Collaborative research centers</li>
        <li>Innovation and entrepreneurship support</li>
        <li>Industry-academia partnerships</li>
      </ul>
    </div>
  )

  const idcContent = (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed">
        IDC School of Design is a unique mix of pedagogic experimentation with pragmatic design approach. IDC has
        academic programs in the areas of Industrial Design, Visual Communication, Interaction Design, Animation and
        Mobility & Vehicle Design.
      </p>
      <p className="text-gray-700 leading-relaxed">
        The center focuses on human-centered design thinking and innovation, preparing students to become design leaders
        in various industries. Our curriculum combines theoretical knowledge with hands-on practical experience.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Industrial Design programs</li>
        <li>Visual Communication specialization</li>
        <li>Interaction Design courses</li>
        <li>Animation and multimedia</li>
        <li>Mobility and Vehicle Design</li>
        <li>Design thinking workshops</li>
      </ul>
    </div>
  )

  const departmentsContent = (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed">
        IIT Tirupati is known as a premier engineering, science and technology institute in India. Currently, it offers
        an opportunity to learn in 20 varied departments and pursue 10 programs across undergraduate, postgraduate, and
        doctoral levels.
      </p>
      <p className="text-gray-700 leading-relaxed">
        This university has strived and evolved over years to offer the students finest of its facilities for
        multi-dimensional growth. It is a home for design, management school and several emerging centres in technical,
        non-technical & entrepreneurial sector.
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
            <li>Aerospace Engineering</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Science Departments:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Mathematics</li>
            <li>Earth Sciences</li>
            <li>Biosciences & Bioengineering</li>
            <li>Energy Science & Engineering</li>
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
                  Academics at IIT Tirupati has the flexibility to evolve with ever changing requirements. Various
                  activities are carried out to promote research, enhance creativity, learn new skills, implement
                  innovative solutions and ...
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
                <h3 className="text-xl font-semibold mb-4">Industrial Design Centre</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  IDC School of Design is a unique mix of pedagogic experimentation with pragmatic design approach. IDC
                  has academic programs in the areas of Industrial Design, Visual Communication, Interaction Design,
                  Animation and Mobility & Vehicle Design.
                </p>
                <Button
                  className="bg-[#6366f1] hover:bg-[#5855eb] text-white"
                  onClick={() => openModal("Industrial Design Centre", idcContent)}
                >
                  Explore IDC
                </Button>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Departments & Programs at IIT Tirupati</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  IIT Tirupati is known as a premier engineering, science and technology institute in India. Currently,
                  it offers an opportunity to learn in 20 varied departments and pursue 10 programs.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  This university has strived and evolved over years to offer the students finest of its facilities for
                  multi-dimensional growth. It is a home for design, management school and several emerging centres in
                  technical, non-technical & entrepreneurial sector.
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
