import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Skils from "../components/SkillsSection";
import Eperince from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
function LandingPge() {
  return (
    <>
      <NavBar />
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <Skils></Skils>
      <Eperince></Eperince>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </>
  );
}

export default LandingPge;
