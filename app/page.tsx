import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GamesSection from "@/components/GamesSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import LoadingAnimation from "@/components/LoadingAnimation";
import CountdownTimer from "@/components/CountdownTimer";
import ScrollIndicator from "@/components/ScrollIndicator";
import { LogoFABs } from "@/components/LogoFABs";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <LoadingAnimation />
      <ScrollIndicator />
      <CountdownTimer />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <GamesSection />
      <LogoFABs />
      <Footer />
    </main>
  );
}
