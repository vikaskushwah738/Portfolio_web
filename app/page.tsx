import AboutSection from "@/components/AboutSection";
import { EmailSection } from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
  
    <div className="container mx-auto px-12 py-4 md:pt-20 pt-12">
          <HeroSection/>
          <AboutSection/>
          <Project/>
          <EmailSection />
    </div>
    </main>
  );
}


