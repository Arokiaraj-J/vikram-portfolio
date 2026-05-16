import { ParticlesBackground } from "@/components/portfolio/particles-background";
import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { GithubSection } from "@/components/portfolio/github-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <GithubSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
