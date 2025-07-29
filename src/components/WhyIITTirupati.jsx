import { Button } from "./ui/button"
import { Share2, Star, GraduationCap, BookOpen } from "lucide-react"

export function WhyIITTirupati() {
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
        <h2 className="text-4xl font-bold text-center mb-8">Why IIT Tirupati</h2>
        <p className="text-center text-lg leading-relaxed mb-16 max-w-6xl mx-auto">
          Established in 2009, as an institute of national importance, IIT Tirupati is recognized worldwide as a leader
          in the field of research and education in engineering and sciences. Our mission is to create an ambience in
          which new ideas and creativity flourish. The motto of IIT Tirupati is to provide learning blended with
          excellence, to create leaders of tomorrow. The dynamic and constantly evolving academic program reflects the
          institute's commitment to stay in tune with the expanding frontiers of knowledge worldwide. Extracurricular
          activities are also treated with equal importance towards overall development making the students at IIT
          Tirupati fit to take on the challenges faced in the competitive corporate world. Backed by the support of
          Alumni in different sectors and guidance of esteemed professors, we strive to offer highly nurturing
          environment to all its students.
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
