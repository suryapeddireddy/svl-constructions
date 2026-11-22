import HeroSection from "@/components/sections/HeroSection";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import CommitmentsSection from "@/components/sections/CommitmentsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <ServicesSection />
      <CommitmentsSection />
      <ProjectsSection />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
