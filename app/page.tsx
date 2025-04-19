import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ResumeSection } from "@/components/resume-section"
import { MusicSection } from "@/components/music-section"
import { ContactSection } from "@/components/contact-section"
import { CommunitySection } from "@/components/community-section"
import { GitHubStatsSection } from "@/components/github-stats-section"
import { CertificatesSection } from "@/components/certificates-section"
import { CalendlySection } from "@/components/calendly-section"
import { ApnaChatSection } from "@/components/apna-chat-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GitHubStatsSection />
      <AchievementsSection />
      <CertificatesSection />
      <ApnaChatSection />
      <ResumeSection />
      <MusicSection />
      <CommunitySection />
      <CalendlySection />
      <ContactSection />
    </>
  )
}
