"use client";

import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689813308!2d72.4194074!3d23.2156354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b4f9!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
  );

  // Distance typewriter effect state
  const [distanceText, setDistanceText] = useState("");
  const [currentDistanceIndex, setCurrentDistanceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Slogan typewriter effect state
  const [sloganText, setSloganText] = useState("");
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [isSloganDeleting, setIsSloganDeleting] = useState(false);

  const distances = ["3KM", "5KM", "10KM", "Half Marathon"];
  const slogans = [
    "Run Beyond Limits",
    "Where Champions Rise",
    "Every Step Counts",
    "Unite Through Running",
    "Chase Your Dreams",
  ];

  // Distance typewriter effect
  useEffect(() => {
    const currentDistance = distances[currentDistanceIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDistanceText(
            currentDistance.substring(0, distanceText.length + 1)
          );
          if (distanceText === currentDistance) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDistanceText(
            currentDistance.substring(0, distanceText.length - 1)
          );
          if (distanceText === "") {
            setIsDeleting(false);
            setCurrentDistanceIndex((prev) => (prev + 1) % distances.length);
          }
        }
      },
      isDeleting ? 75 : 150
    );

    return () => clearTimeout(timeout);
  }, [distanceText, isDeleting, currentDistanceIndex, distances]);

  // Slogan typewriter effect
  useEffect(() => {
    const currentSlogan = slogans[currentSloganIndex];
    const timeout = setTimeout(
      () => {
        if (!isSloganDeleting) {
          setSloganText(currentSlogan.substring(0, sloganText.length + 1));
          if (sloganText === currentSlogan) {
            setTimeout(() => setIsSloganDeleting(true), 3000);
          }
        } else {
          setSloganText(currentSlogan.substring(0, sloganText.length - 1));
          if (sloganText === "") {
            setIsSloganDeleting(false);
            setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
          }
        }
      },
      isSloganDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [sloganText, isSloganDeleting, currentSloganIndex, slogans]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Video Container with Increased Height */}
      <div className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
        {/* Background Video */}
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

        {/* Semi-dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

        {/* Registration Button - Floating at Top Center */}
        <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-20">
          <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 sm:gap-3 border-2 border-red-400/50 text-sm sm:text-base">
            REGISTRATION NOW
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Floating Cards Layout - HIDDEN ON MOBILE (lg and above only) */}
        <div className="absolute inset-0 z-10 lg:flex items-center justify-between px-12 hidden">
          {/* Left Side Cards - Desktop Only */}
          <div className="space-y-5 w-[25%]">
            {/* Save The Date Card - Transparent */}
            <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-5 text-white shadow-2xl border border-white/20 hover:bg-black/30 transition-all duration-300">
              <h3 className="text-base font-semibold mb-3 text-orange-300">
                Save The Date!
              </h3>
              <div className="text-3xl font-bold text-red-400 mb-2">
                10 JUNE 2025
              </div>
              <div className="text-lg text-gray-200 mb-4">AT 6 AM</div>
              <button className="bg-white/90 text-black px-4 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm">
                Add to Calendar
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Distance Card with Typewriter Effect - Transparent */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-base font-semibold mb-3 text-orange-300">
                Distance
              </h3>
              <div className="text-5xl font-bold text-red-400 min-h-[3rem] flex items-center">
                {distanceText}
                <span className="animate-pulse text-orange-400 ml-1">|</span>
              </div>
              <div className="text-sm text-gray-300 mt-2">
                Multiple race categories
              </div>
            </div>
          </div>

          {/* Right Side Cards - Desktop Only */}
          <div className="space-y-5 w-[25%]">
            {/* Attendant Card - Transparent */}
            <div className="bg-black/25 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border border-white/25 hover:bg-black/35 transition-all duration-300">
              <h3 className="text-base font-semibold mb-2 text-orange-500">
                Attendant
              </h3>
              <p className="text-sm text-gray-300 mb-3">More Than</p>
              <div className="text-3xl font-bold text-red-400 flex items-baseline gap-2">
                1000+
                <span className="text-sm font-normal text-gray-300">
                  Participants
                </span>
              </div>
            </div>

            {/* Route Map Card - Transparent */}
            <div className="bg-black/25 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border border-white/25 hover:bg-black/35 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-orange-500">
                  Route
                </h3>
                <button className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold hover:bg-red-600 transition-colors">
                  Open
                </button>
              </div>

              {/* Interactive Map */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg border border-white/30">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>

                {/* Map Overlay Info */}
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm rounded-md p-2 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-gray-700">
                        Start
                      </div>
                      <div className="text-xs text-gray-600">Monas</div>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-gray-700">
                        Finish
                      </div>
                      <div className="text-xs text-gray-600">Ancol</div>
                    </div>
                  </div>

                  {/* Route line visualization */}
                  <div className="mt-1 flex items-center justify-center">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-red-400 to-red-500 rounded-full relative">
                      <div className="absolute left-0 w-2 h-2 bg-red-500 rounded-full -top-0.75 border border-white shadow-lg"></div>
                      <div className="absolute right-0 w-2 h-2 bg-red-500 rounded-full -top-0.75 border border-white shadow-lg"></div>
                    </div>
                  </div>

                  <div className="text-center mt-1">
                    <div className="text-xs text-gray-600">
                      Multi-distance Marathon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Title Text - UPDATED with larger mobile sizes */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-15 text-center px-4">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {/* Main Title - Three Lines Centered - INCREASED MOBILE SIZES */}
            <div className="space-y-1 sm:space-y-2">
              {/* Marathon - Increased from text-3xl to text-5xl on mobile */}
              <div
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight"
                style={{
                  WebkitTextStroke: "2px rgba(255,255,255,0.5)",
                  filter: "drop-shadow(3px 3px 6px rgba(0,0,0,0.9))",
                  fontWeight: "900",
                }}
              >
                MARATHON
              </div>

              {/* 2025 - Increased from text-4xl to text-6xl on mobile */}
              <div
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-white drop-shadow-2xl leading-tight"
                style={{
                  fontWeight: "900",
                  filter: "drop-shadow(3px 3px 6px rgba(0,0,0,0.9))",
                }}
              >
                2025
              </div>

              {/* Gandhinagar - Increased from text-3xl to text-5xl on mobile */}
              <div
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight"
                style={{
                  WebkitTextStroke: "2px rgba(255,255,255,0.5)",
                  filter: "drop-shadow(3px 3px 6px rgba(0,0,0,0.9))",
                  fontWeight: "900",
                }}
              >
                Gandhinagar
              </div>
            </div>

            {/* Typewriter Slogan - Also increased mobile size */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-medium leading-relaxed">
                <div
                  className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-4 sm:py-5 md:py-6 border border-white/30 shadow-2xl max-w-5xl"
                  style={{
                    textShadow:
                      "3px 3px 6px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.7)",
                  }}
                >
                  <span className="text-orange-300 font-semibold tracking-wide">
                    {sloganText}
                  </span>
                  <span className="animate-pulse text-orange-400 ml-2 font-thin">
                    |
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Info Cards - Only visible on mobile/tablet */}
      <div className="lg:hidden bg-gradient-to-br from-slate-800 to-slate-900 py-8 px-4">
        <div className="max-w-md mx-auto space-y-4">
          {/* Date & Time Card - Mobile */}
          <div className="bg-black/40 backdrop-blur-lg rounded-xl p-4 text-white shadow-xl border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold mb-1 text-orange-300">
                  Event Date
                </h3>
                <div className="text-xl font-bold text-red-400">
                  10 JUNE 2025
                </div>
                <div className="text-sm text-gray-300">6:00 AM</div>
              </div>
              <Calendar className="w-8 h-8 text-orange-400" />
            </div>
          </div>

          {/* Distance & Participants - Mobile */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-white shadow-xl border border-white/20">
              <h3 className="text-sm font-semibold mb-2 text-orange-300">
                Distances
              </h3>
              <div className="text-lg font-bold text-red-400">3KM - Half</div>
              <div className="text-xs text-gray-300">Multiple categories</div>
            </div>

            <div className="bg-black/25 backdrop-blur-lg rounded-xl p-4 text-white shadow-xl border border-white/25">
              <h3 className="text-sm font-semibold mb-2 text-orange-300">
                Expected
              </h3>
              <div className="text-lg font-bold text-red-400">1000+</div>
              <div className="text-xs text-gray-300">Participants</div>
            </div>
          </div>

          {/* Location Card - Mobile */}
          <div className="bg-black/25 backdrop-blur-lg rounded-xl p-4 text-white shadow-xl border border-white/25">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-orange-300">
                Route Location
              </h3>
              <MapPin className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-base font-semibold text-white">
              Sabarmati River Front, Gandhinagar
            </div>
            <div className="text-xs text-gray-300 mt-1">
              Multi-distance Marathon Route
            </div>
          </div>
        </div>
      </div>

      {/* Red Banner at Bottom */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-4 sm:py-6 md:py-8 shadow-2xl">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide drop-shadow-lg">
          Gandhinagar Marathon 2025
        </div>
      </div>

      {/* Bottom Section for Additional Content */}
      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Additional content can go here */}
        </div>
      </div>

      {/* Custom Map URL Input (for development/admin) - Hidden on small screens */}
      <div className="fixed bottom-4 right-4 z-50 opacity-10 hover:opacity-80 transition-opacity duration-300 hidden md:block">
        <div className="bg-black/90 backdrop-blur-md rounded-lg p-3 text-white text-xs max-w-xs">
          <label className="block mb-2 font-semibold">Map URL:</label>
          <input
            type="text"
            value={mapUrl}
            onChange={(e) => setMapUrl(e.target.value)}
            className="w-full px-2 py-1 bg-white/20 rounded border border-white/30 text-xs"
            placeholder="Google Maps embed URL"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
