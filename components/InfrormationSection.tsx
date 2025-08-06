"use client";

import React, { useState, useEffect } from "react";
import { X, Clock, Users, MapPin, Droplets, Award, Info } from "lucide-react";

interface RaceCategory {
  id: number;
  title: string;
  distance: string;
  image: string;
  ageGroup: string;
  startTime: string;
  maxDuration: string;
  reportingTime: string;
  hydrationPoints: string;
  gear: string;
  instructions: string[];
  color: string;
}

const InformationSection: React.FC = () => {
  const [selectedRace, setSelectedRace] = useState<RaceCategory | null>(null);

  const raceCategories: RaceCategory[] = [
    {
      id: 1,
      title: "3KM Fun Run",
      distance: "3 Kilometers",
      image: "/images/3km-fun-run.jpg",
      ageGroup: "All ages welcome (8+)",
      startTime: "6:30 AM",
      maxDuration: "45 minutes",
      reportingTime: "5:30 AM",
      hydrationPoints: "1 station at 1.5KM",
      gear: "Comfortable running shoes, light clothing",
      instructions: [
        "Perfect for beginners and families",
        "Chip timing provided for all participants",
        "Medal and certificate for all finishers",
        "Photography points along the route",
        "Post-race refreshments included",
      ],
      color: "from-green-400 to-blue-500",
    },
    {
      id: 2,
      title: "5KM Race",
      distance: "5 Kilometers",
      image: "/images/5km-race.jpg",
      ageGroup: "12 years and above",
      startTime: "7:00 AM",
      maxDuration: "1 hour",
      reportingTime: "6:00 AM",
      hydrationPoints: "2 stations at 2KM & 4KM",
      gear: "Running shoes, moisture-wicking clothing",
      instructions: [
        "Ideal for recreational runners",
        "Professional chip timing system",
        "Category-wise prizes for top performers",
        "Medical support available throughout",
        "Digital certificate and finisher medal",
      ],
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      title: "10KM Challenge",
      distance: "10 Kilometers",
      image: "/images/10km-challenge.jpg",
      ageGroup: "16 years and above",
      startTime: "6:00 AM",
      maxDuration: "1.5 hours",
      reportingTime: "5:00 AM",
      hydrationPoints: "4 stations every 2.5KM",
      gear: "Professional running gear recommended",
      instructions: [
        "For intermediate to advanced runners",
        "Qualifying time certificates available",
        "Age-group category prizes",
        "Energy stations with sports drinks",
        "Professional photography and live tracking",
      ],
      color: "from-orange-400 to-red-500",
    },
    {
      id: 4,
      title: "Half Marathon",
      distance: "21.1 Kilometers",
      image: "/images/half-marathon.jpg",
      ageGroup: "18 years and above",
      startTime: "5:30 AM",
      maxDuration: "3 hours",
      reportingTime: "4:30 AM",
      hydrationPoints: "8 stations every 2.5KM",
      gear: "Professional running attire, GPS watch recommended",
      instructions: [
        "For experienced long-distance runners",
        "Medical clearance certificate required",
        "Premium finisher medal and t-shirt",
        "Energy gels and electrolyte drinks provided",
        "Professional masseurs at finish line",
      ],
      color: "from-red-500 to-purple-600",
    },
  ];

  const openModal = (race: RaceCategory): void => {
    setSelectedRace(race);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (): void => {
    setSelectedRace(null);
    document.body.style.overflow = "unset";
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (selectedRace) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedRace]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-red-200 to-yellow-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg mb-6">
            <Info className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Race Information
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Challenge
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select your race category below to view detailed instructions, route
            information, and participation guidelines.
          </p>
        </div>

        {/* Race Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {raceCategories.map((race) => (
            <div
              key={race.id}
              onClick={() => openModal(race)}
              className="group cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(race);
                }
              }}
            >
              <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-white/70 hover:-translate-y-2">
                {/* Card Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${race.color} opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Race Image */}
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${race.color} opacity-80 flex items-center justify-center`}
                    >
                      <div className="text-white text-center">
                        <Award className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Race Preview</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-gray-600 text-sm">→</span>
                  </div>
                </div>

                {/* Race Info */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {race.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{race.distance}</p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>{race.ageGroup}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span>Start: {race.startTime}</span>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Click for details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedRace && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden">
              {/* Modal Header */}
              <div
                className={`relative bg-gradient-to-r ${selectedRace.color} p-6 text-white`}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-3xl font-bold mb-2 pr-12">
                  {selectedRace.title}
                </h3>
                <p className="text-white/90 text-lg">
                  {selectedRace.distance} Challenge
                </p>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col lg:flex-row max-h-[calc(95vh-120px)]">
                {/* Left Side - Image */}
                <div className="lg:w-2/5 p-6 flex-shrink-0">
                  <div className="w-full h-64 lg:h-80 bg-gray-200 rounded-xl overflow-hidden mb-4">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${selectedRace.color} opacity-80 flex items-center justify-center`}
                    >
                      <div className="text-white text-center">
                        <Award className="w-16 h-16 mx-auto mb-3" />
                        <p className="font-semibold text-lg">
                          {selectedRace.title}
                        </p>
                        <p className="text-sm opacity-90">
                          {selectedRace.distance}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Duration Info */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Race Duration
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Maximum time allowed:{" "}
                      <span className="font-semibold">
                        {selectedRace.maxDuration}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="lg:w-3/5 p-6 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                        <Users className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="text-sm text-blue-600 font-medium">
                            Age Group
                          </p>
                          <p className="font-bold text-blue-800">
                            {selectedRace.ageGroup}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                        <Clock className="w-6 h-6 text-green-600" />
                        <div>
                          <p className="text-sm text-green-600 font-medium">
                            Start Time
                          </p>
                          <p className="font-bold text-green-800">
                            {selectedRace.startTime}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
                        <MapPin className="w-6 h-6 text-red-600" />
                        <div>
                          <p className="text-sm text-red-600 font-medium">
                            Reporting Time
                          </p>
                          <p className="font-bold text-red-800">
                            {selectedRace.reportingTime}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg border border-cyan-200">
                        <Droplets className="w-6 h-6 text-cyan-600" />
                        <div>
                          <p className="text-sm text-cyan-600 font-medium">
                            Hydration
                          </p>
                          <p className="font-bold text-cyan-800 text-sm leading-tight">
                            {selectedRace.hydrationPoints}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Instructions */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-blue-600" />
                        Race Instructions
                      </h4>
                      <ul className="space-y-3">
                        {selectedRace.instructions.map((instruction, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-800 leading-relaxed">
                              {instruction}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Gear Requirements */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
                      <h4 className="font-bold text-amber-800 mb-3 text-lg flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Recommended Gear
                      </h4>
                      <p className="text-amber-800 leading-relaxed">
                        {selectedRace.gear}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InformationSection;
