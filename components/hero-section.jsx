import { Button } from "@/components/ui/button"
import { User, Briefcase, Users, CheckCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
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
            <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64">
              <User className="w-6 h-6" />
              Student
            </Button>
            <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64">
              <Briefcase className="w-6 h-6" />
              Recruiter
            </Button>
            <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64">
              <Users className="w-6 h-6" />
              Placement Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
