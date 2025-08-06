"use client";
import React, { useState } from "react";
import {
  MapPin,
  Route,
  Navigation,
  Clock,
  Maximize2,
  Users,
  X,
} from "lucide-react";

// Type definitions
interface RouteHighlight {
  id: string;
  name: string;
}

interface RouteData {
  id: number;
  title: string;
  distance: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Advanced";
  participants: string;
  startPoint: string;
  endPoint: string;
  highlights: string[];
  estimatedTime: string;
  elevation: string;
  mapPreview: string;
  description: string;
  color: string;
  bgColor: string;
  textColor: string;
}

interface RouteCardProps {
  route: RouteData;
  onRouteClick: (route: RouteData) => void;
}

interface RouteModalProps {
  route: RouteData;
  onClose: () => void;
}

// Route Card Component
const RouteCard: React.FC<RouteCardProps> = ({ route, onRouteClick }) => {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => onRouteClick(route)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onRouteClick(route);
        }
      }}
      aria-label={`View details for ${route.title}`}
    >
      <div
        className={`relative ${route.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-white/70 hover:-translate-y-2`}
      >
        {/* Card Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {route.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Navigation className="w-4 h-4" />
                {route.distance}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {route.participants}
              </span>
            </div>
          </div>
          <div
            className={`px-3 py-1 ${route.bgColor} ${route.textColor} rounded-full text-sm font-semibold border border-current/20`}
          >
            {route.difficulty}
          </div>
        </div>

        {/* Map Preview */}
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <div className="aspect-video bg-gray-200 relative">
            {/* Mock Map Interface */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${route.color} opacity-20`}
            />
            <div className="absolute inset-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 flex flex-col justify-between">
              {/* Map Header */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium text-gray-700">
                    Start: {route.startPoint}
                  </span>
                </div>
                <Maximize2 className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors" />
              </div>

              {/* Route Visualization */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-full h-16">
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <path
                      d="M10,30 Q50,10 100,25 T190,30"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      className={`${route.textColor} opacity-60`}
                      strokeDasharray="5,5"
                    />
                    <circle cx="10" cy="30" r="4" className="fill-green-500" />
                    <circle cx="190" cy="30" r="4" className="fill-red-500" />
                  </svg>
                </div>
              </div>

              {/* Map Footer */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="font-medium text-gray-700">
                    Finish: {route.endPoint}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {route.estimatedTime}
                </span>
              </div>
            </div>
          </div>

          {/* Overlay Button */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold text-gray-800">
              View Details
            </div>
          </div>
        </div>

        {/* Route Info */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">{route.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Elevation:</span>
              <p className="font-semibold text-gray-800">{route.elevation}</p>
            </div>
            <div>
              <span className="text-gray-500">Est. Time:</span>
              <p className="font-semibold text-gray-800">
                {route.estimatedTime}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <span className="text-gray-500 text-sm">Route Highlights:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {route.highlights.map((highlight, index) => (
                <span
                  key={`${route.id}-highlight-${index}`}
                  className="px-3 py-1 bg-white/70 backdrop-blur-sm text-xs font-medium rounded-full border border-white/50 text-gray-700"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Route Modal Component
const RouteModal: React.FC<RouteModalProps> = ({ route, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`bg-gradient-to-r ${route.color} p-6 text-white`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 id="modal-title" className="text-2xl font-bold mb-2">
                {route.title}
              </h3>
              <p className="text-white/90">
                {route.distance} • {route.difficulty}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-96">
          <div className="aspect-video bg-gray-100 rounded-xl mb-6 p-4">
            <div className="w-full h-full bg-white rounded-lg p-4 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="text-gray-700 font-medium">
                  Interactive Route Map
                </p>
                <p className="text-sm">Full route details and GPS navigation</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Clock className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="font-semibold text-gray-800">
                  {route.estimatedTime}
                </p>
                <p className="text-sm text-gray-600">Est. Time</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Users className="w-6 h-6 mx-auto mb-2 text-green-500" />
                <p className="font-semibold text-gray-800">
                  {route.participants}
                </p>
                <p className="text-sm text-gray-600">Expected</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-800">
                Route Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                {route.highlights.map((highlight, index) => (
                  <span
                    key={`modal-${route.id}-highlight-${index}`}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main RouteSection Component
const RouteSection: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<RouteData | null>(null);

  const routes: RouteData[] = [
    {
      id: 1,
      title: "3KM Fun Run Route",
      distance: "3.0 KM",
      difficulty: "Easy",
      participants: "500+",
      startPoint: "Gandhi Circle",
      endPoint: "Children's Park",
      highlights: ["City Garden", "Heritage Walk", "Photo Points"],
      estimatedTime: "20-30 min",
      elevation: "Mostly Flat",
      mapPreview: "/maps/3km-route.jpg",
      description:
        "A scenic route perfect for families and beginners, passing through the beautiful city gardens.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      id: 2,
      title: "5KM Race Route",
      distance: "5.0 KM",
      difficulty: "Moderate",
      participants: "800+",
      startPoint: "Central Square",
      endPoint: "Riverside Park",
      highlights: ["River View", "Historic Bridge", "Market Street"],
      estimatedTime: "25-40 min",
      elevation: "Slight Inclines",
      mapPreview: "/maps/5km-route.jpg",
      description:
        "Experience the cultural heart of Gandhinagar with riverside views and historic landmarks.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      id: 3,
      title: "10KM Challenge Route",
      distance: "10.0 KM",
      difficulty: "Challenging",
      participants: "600+",
      startPoint: "Sports Complex",
      endPoint: "Victory Stadium",
      highlights: ["Hill Section", "Forest Trail", "Athletic Track"],
      estimatedTime: "45-70 min",
      elevation: "Rolling Hills",
      mapPreview: "/maps/10km-route.jpg",
      description:
        "A challenging route with varied terrain, including forest trails and hill sections.",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
    {
      id: 4,
      title: "Half Marathon Route",
      distance: "21.1 KM",
      difficulty: "Advanced",
      participants: "400+",
      startPoint: "Marathon Plaza",
      endPoint: "Finish Line Arena",
      highlights: [
        "Complete City Tour",
        "Multiple Landmarks",
        "Scenic Overlooks",
      ],
      estimatedTime: "1.5-3 hours",
      elevation: "Mixed Terrain",
      mapPreview: "/maps/half-marathon-route.jpg",
      description:
        "The ultimate Gandhinagar experience covering major landmarks and scenic routes.",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
  ];

  const openRouteDetail = (route: RouteData): void => {
    setSelectedRoute(route);
  };

  const closeRouteDetail = (): void => {
    setSelectedRoute(null);
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-teal-200 via-cyan-200 to-blue-200
 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40 shadow-lg mb-6">
            <Route className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Race Routes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Routes
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the carefully designed routes that showcase the best of
            Gandhinagar while providing the perfect challenge for every runner.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {routes.map((route) => (
            <RouteCard
              key={route.id}
              route={route}
              onRouteClick={openRouteDetail}
            />
          ))}
        </div>

        {/* Interactive Route Comparison */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Route Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Route
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">
                    Distance
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">
                    Difficulty
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">
                    Est. Time
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">
                    Participants
                  </th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route, index) => (
                  <tr
                    key={`table-${route.id}`}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50/50" : "bg-white/50"
                    } hover:bg-white/80 transition-colors`}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${route.color}`}
                        />
                        <span className="font-medium text-gray-800">
                          {route.title}
                        </span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 font-semibold text-gray-800">
                      {route.distance}
                    </td>
                    <td className="text-center py-4 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${route.bgColor} ${route.textColor}`}
                      >
                        {route.difficulty}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-800">
                      {route.estimatedTime}
                    </td>
                    <td className="text-center py-4 px-4 font-semibold text-gray-800">
                      {route.participants}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Route Detail Modal */}
      {selectedRoute && (
        <RouteModal route={selectedRoute} onClose={closeRouteDetail} />
      )}
    </section>
  );
};

export default RouteSection;
