import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DirectorsMessage } from "@/components/directors-message"
import { WhyiitTirupati } from "@/components/why-iit-Tirupati"
import { AcademicInfo } from "@/components/academic-info"
import { RecruitmentProcess } from "@/components/recruitment-process"
import { RecruitersCarousel } from "@/components/recruiters-carousel"
import { NewFooter } from "@/components/new-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AcademicInfo />
      <WhyiitTirupati />
      <DirectorsMessage />
      <RecruitmentProcess />
      <RecruitersCarousel />
      <NewFooter />
    </main>
  )
}
