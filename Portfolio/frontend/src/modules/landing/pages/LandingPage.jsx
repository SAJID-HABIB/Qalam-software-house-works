import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Skils from "../components/SkillsSection";
import Eperince from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
// import projects from "../constants/projects";
// import ProjectCard from "../components/ProjectCard";
function LandingPge() {
  return(
  <>
  <NavBar />
  <HeroSection></HeroSection>
  <AboutSection></AboutSection>
  <Skils></Skils>
  <Eperince></Eperince>
  <ProjectsSection></ProjectsSection>
   </>
  );
}

export default LandingPge;