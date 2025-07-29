import { Button } from "@/components/ui/button"
import { Share2, Star, GraduationCap, BookOpen } from "lucide-react"

export function WhyIITBombay() {
  return (
    <section
      id="why-recruit"
      className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#6366f1] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-8">Why Recruit from IIT Tirupati</h2>
        <p className="text-center text-lg leading-relaxed mb-16 max-w-6xl mx-auto">
          IIT Tirupati is one of the most rapidly developing third-generation IITs. The campus offers modern labs, digital classrooms, and eco-friendly facilities, supporting advanced learning and innovation. We employ faculty from renowned institutes in India and abroad. With an excellent teacher to student ratio, students benefit from close interaction with faculty, going practical insights and engaging in research. The curriculum allows students to select electives, minors from various streams of science and engineering. Almost all undergraduates secure internships with leading companies and research organizations, ensuring practical exposure and workplace readiness.
          <br/>
          Holds 40+ MoUs with corporate firms like Kia, Nvidia Graphics Private Limited and also international universities such as Canada's University of Calgary, Texas A&M Engineering Equipment Station, and Nagaoka University of Technology(Japan), Indian Navy and ISRO. Regular workshops and training sessions are conducted to enhance students’ technical, professional, and soft skills, preparing them for diverse upcoming workspace challenges.

        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Share2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Alumni</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Our Alumni have emerged successful and excelled in varied professions across the globe. This network is
              highly enriching for the growth of our community.
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#1e3a8a]"
            >
              Know more
            </Button>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Rankings</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Recognized as India's No. 1 University, we strive for excellence. Our rankings are reflective of our steep
              progress.
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#1e3a8a]"
            >
              Know more
            </Button>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Admission Process</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              All the students enrolled at IIT Tirupati are selected after rigorous screening process. It ensures that
              we nurture India's few most brilliant minds.
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#1e3a8a]"
            >
              Know more
            </Button>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">All Round Development</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              One's skills, aptitude and perception reflect the personality of an individual. We offer numerous
              opportunities for multi dimensional growth of an individual.
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#1e3a8a]"
            >
              Know more
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
