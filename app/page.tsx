import AboutSection from "@/components/AboutSection";
import { EmailSection } from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
          <HeroSection/>
          <AboutSection/>
          <Project/>
          <EmailSection />
    </main>
  );
}



