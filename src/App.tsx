import HeroSection from "./pages/HomePage.tsx/HeroSection"
import Navigation from "./components/Navbar"
import AboutSection from "./pages/HomePage.tsx/AboutSection"
import WhatTrulyMatters from "./pages/HomePage.tsx/WhatTrulyMatters"
import ProjectsShowcase from "./pages/HomePage.tsx/ProjectsSection"
import ContactSection from "./pages/HomePage.tsx/ContactSection"
import Footer from "./components/Footer"
// import ExpertiseSection from "./pages/HomePage.tsx/ExpertiseSection"
const App = () => {
  return (
    <>
    <Navigation />
    <HeroSection />
    <AboutSection />
    <WhatTrulyMatters />
    <ProjectsShowcase />
    <ContactSection />
    <Footer />
    </>
  )
}

export default App