import { Button } from "./ui/button"
import { User, Briefcase, Users, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <img
        src="/images/iit-tirupati-campus.jpg"
        alt="IIT Tirupati Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="text-white flex flex-col justify-center px-4">
            <div className="bg-black/20 rounded-lg p-6">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                A one stop portal for Placements & Internships
              </h1>
              <p className="text-lg mb-8 leading-relaxed">
                Welcome to the recruitment website For IIT Tirupati.
                <br />
                IIT is India's foremost industrial leadership development institution. Our graduates are a combination
                of rigorous thinking, hardwork and fundamental stronghold. They are nurtured by the institute to strive
                for excellence and deliver impact in their field of work. Let us begin...
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 justify-center">
            <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64 mx-auto lg:mx-0">
              <User className="w-6 h-6" />
              Student
            </Button>
            <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64 mx-auto lg:mx-0">
              <Briefcase className="w-6 h-6" />
              Recruiter
            </Button>
            <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64 mx-auto lg:mx-0">
              <Users className="w-6 h-6" />
              Coordinator
            </Button>
            <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white py-6 px-8 text-lg flex items-center gap-3 justify-start w-64 mx-auto lg:mx-0">
              <CheckCircle className="w-6 h-6" />
              Verifier
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
