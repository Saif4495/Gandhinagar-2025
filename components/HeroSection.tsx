"use client";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Clock,
  Play,
  ChevronDown,
  Trophy,
  Users,
  Route,
  Award,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Run for Fitness",
    "Run for Unity",
    "Run for Gujarat",
    "Run for Victory",
  ];

  useEffect(() => {
    setIsLoaded(true);
    setIsInView(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setTypewriterText(
            currentWord.substring(0, typewriterText.length + 1)
          );
          if (typewriterText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setTypewriterText(
            currentWord.substring(0, typewriterText.length - 1)
          );
          if (typewriterText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentWordIndex, words]);

  const handleWatchHighlights = () => {
    console.log("Watch highlights clicked");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black px-2 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
      {/* Video Background Container with Responsive Rounded Edges */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-12 xl:inset-16 z-0 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          poster="/assets/poster.jpg"
        >
          <source src="/hero-section/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Multi-layer overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/5 to-black/30"></div>
      </div>

      {/* Floating Marathon Location Button - Responsive positioning */}
      <div
        className="absolute top-6 sm:top-8 md:top-10 lg:top-12 right-6 sm:right-8 md:right-10 lg:right-12 xl:right-16 z-30 bg-gradient-to-r from-green-600 to-green-700 hover:from-yellow-500 hover:to-orange-500 border border-white/30 rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-white font-semibold text-xs sm:text-sm transition-all duration-500 hover:scale-110 shadow-2xl cursor-pointer backdrop-blur-sm"
        style={{
          animation: "float 3s ease-in-out infinite",
          animationDelay: "2s",
        }}
      >
        <div className="flex items-center gap-1 sm:gap-1.5">
          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors" />
          <span className="drop-shadow-lg whitespace-nowrap">Gandhinagar</span>
        </div>
      </div>

      {/* Main Content - Reduced top padding and responsive spacing */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center flex flex-col justify-center min-h-[calc(100vh-2rem)]">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* Main Title with Responsive Font Sizes */}
          <div className="space-y-1 sm:space-y-2">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight tracking-tight">
              <div
                className="block bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-2xl font-extrabold"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
                  animation: "fadeInUp 1s ease-out 0.3s both",
                }}
              >
                Gandhinagar
              </div>
              <div
                className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl font-extrabold"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
                  animation: "fadeInUp 1s ease-out 0.5s both",
                }}
              >
                Marathon
              </div>
              <div
                className="block bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent font-extrabold"
                style={{
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.3)",
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
                  animation: "fadeInUp 1s ease-out 0.7s both",
                }}
              >
                2025
              </div>
            </div>

            {/* Typewriter Effect Subtitle - Responsive */}
            <div
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto font-medium leading-relaxed px-2 sm:px-4 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center"
              style={{ animation: "fadeInUp 0.8s ease-out 0.8s both" }}
            >
              <span
                className="inline-block"
                style={{
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)",
                }}
              >
                {typewriterText}
                <span className="animate-pulse text-green-400">|</span>
              </span>
            </div>

            <p
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto font-medium leading-relaxed px-2 sm:px-4 mt-2 sm:mt-3"
              style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                animation: "fadeInUp 0.8s ease-out 1.2s both",
              }}
            >
              Join thousands of runners in Gujarat's capital city for an
              unforgettable marathon experience. Every step counts, every runner
              matters.
            </p>
          </div>

          {/* Event Details with Indian Flag Colors - Responsive */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-white flex-wrap"
            style={{
              animation: "fadeInUp 0.8s ease-out 1.4s both",
            }}
          >
            <div className="flex items-center space-x-1.5 backdrop-blur-md bg-gradient-to-r from-green-600/20 to-green-500/20 border border-white/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-300" />
              <span
                className="text-xs sm:text-sm font-semibold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
              >
                June 15, 2025
              </span>
            </div>
            <div className="flex items-center space-x-1.5 backdrop-blur-md bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 border border-white/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300" />
              <span
                className="text-xs sm:text-sm font-semibold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
              >
                6:00 AM
              </span>
            </div>
            <div className="flex items-center space-x-1.5 backdrop-blur-md bg-gradient-to-r from-orange-600/20 to-orange-500/20 border border-white/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-300" />
              <span
                className="text-xs sm:text-sm font-semibold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
              >
                Gandhinagar, Gujarat
              </span>
            </div>
          </div>

          {/* CTA Buttons with Indian Theme - Responsive */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4 sm:mt-6 px-2 sm:px-4"
            style={{
              animation: "fadeInUp 0.8s ease-out 1.6s both",
            }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-110 shadow-2xl border-2 border-green-400/30 hover:shadow-green-500/25"
            >
              Register Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleWatchHighlights}
              className="w-full sm:w-auto border-2 border-white/80 text-white hover:bg-white hover:text-green-800 font-semibold px-5 sm:px-6 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-white/25"
            >
              <Play className="mr-2 w-4 h-4" />
              View Route Map
            </Button>
          </div>

          {/* Floating Glass Cards with Entry Animations - Responsive Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-6 sm:mt-8 px-2 sm:px-4">
            {[
              {
                icon: Users,
                value: "1000+",
                label: "Participants",
                color: "green",
                delay: 0,
              },
              {
                icon: Route,
                value: "4",
                label: "Race Categories",
                color: "yellow",
                delay: 1,
              },
              {
                icon: Trophy,
                value: "21.1",
                label: "Max Distance (KM)",
                color: "orange",
                delay: 2,
              },
              {
                icon: Award,
                value: "₹50L",
                label: "Prize Pool",
                color: "green",
                delay: 3,
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`backdrop-blur-lg bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-white/20 hover:border-${item.color}-400/50 transition-all duration-500 shadow-xl hover:shadow-${item.color}-500/20 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group`}
                  style={{
                    animation: `floatingCard 0.8s ease-out ${
                      1.8 + index * 0.2
                    }s both`,
                    boxShadow:
                      "0 6px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  <div className="text-center">
                    <IconComponent
                      className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-${item.color}-400 group-hover:text-${item.color}-300 transition-colors duration-300`}
                    />
                    <div
                      className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-green-300 transition-colors duration-300"
                      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="text-white/90 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300"
                      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tagline at Bottom of Video Card with Curved Edges */}
      {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-16 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 z-20">
        <div className="bg-gradient-to-r from-green-600/90 via-yellow-500/90 to-orange-600/90 backdrop-blur-lg rounded-t-2xl sm:rounded-t-3xl border-t border-white/30 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 shadow-2xl">
          <div className="text-center">
            <h3
              className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
            >
              Where Every Step Tells a Story
            </h3>
            <p
              className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-relaxed"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
            >
              Experience the spirit of Gujarat through running • Unite with
              thousands • Create memories that last forever
            </p>
          </div>
        </div>
      </div> */}

      {/* Scroll Indicator with Indian Colors - Hide on small screens */}
      <div
        className="hidden lg:block absolute bottom-8 xl:bottom-12 left-1/2 transform -translate-x-1/2 z-30"
        style={{
          animation: "fadeInUp 0.8s ease-out 2.2s both",
        }}
      >
        {/* <div
          className="flex flex-col items-center text-white cursor-pointer hover:text-green-400 transition-colors duration-300"
          style={{
            animation: "bounce 2s infinite",
          }}
        > */}
        {/* <span
            className="text-xs uppercase tracking-wider mb-1 font-medium"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
          >
            Scroll
          </span>
          <ChevronDown
            className="w-5 h-5"
            style={{ filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))" }}
          />
        </div> */}
      </div>

      {/* Custom CSS Animations with Responsive Improvements */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatingCard {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate(-50%, 0);
          }
          40%,
          43% {
            transform: translate(-50%, -10px);
          }
          70% {
            transform: translate(-50%, -5px);
          }
          90% {
            transform: translate(-50%, -2px);
          }
        }

        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .min-h-screen {
            min-height: 100dvh; /* Dynamic viewport height for mobile */
          }
        }

        /* Ensure proper spacing on all devices */
        @media (min-width: 1280px) {
          .max-w-6xl {
            max-width: 80rem;
          }
        }

        /* Tablet-specific adjustments */
        @media (min-width: 768px) and (max-width: 1024px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
