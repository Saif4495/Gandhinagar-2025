import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import LoadingAnimation from "@/components/LoadingAnimation";
import CountdownTimer from "@/components/CountdownTimer";
import InformationSection from "@/components/InfrormationSection";
import RouteSection from "@/components/RouteSection";
import BenefitsSection from "@/components/BenefitsSection";

import { LogoFABs } from "@/components/LogoFABs";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <LoadingAnimation />
      <CountdownTimer />
      <Navbar />
      <HeroSection />

      {/* Main Content Sections */}
      <InformationSection />
      <RouteSection />
      <BenefitsSection />

      <LogoFABs />
      <Footer />
    </main>
  );
}
