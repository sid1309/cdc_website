import "./App.css"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { DirectorsMessage } from "./components/DirectorsMessage"
import { WhyIITTirupati } from "./components/WhyIITTirupati"
import { AcademicInfo } from "./components/AcademicInfo"
import { RecruitmentProcess } from "./components/RecruitmentProcess"
import { RecruitersCarousel } from "./components/RecruitersCarousel"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <DirectorsMessage />
      <WhyIITTirupati />
      <AcademicInfo />
      <RecruitmentProcess />
      <RecruitersCarousel />
      <Footer />
    </div>
  )
}

export default App
