"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Target,
  Dumbbell,
  Activity,
  Zap,
  Flame,
  Mountain,
  Award,
  X,
  ZoomIn,
  Users,
  Calendar,
} from "lucide-react";

// Temporary Card and Badge components for TypeScript compatibility
const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const Badge = ({
  children,
  className,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: string;
}) => <span className={className}>{children}</span>;

// Define the category type
type Category = "Strength" | "Endurance" | "Precision" | "Physique" | "Skills";

// Define the Game interface
interface Game {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  image: string;
  participants: string;
  category: Category;
  details: string;
}

// Define GameWithClasses interface
interface GameWithClasses extends Game {
  gridClass: string;
  categoryColor: string;
}

const games: Game[] = [
  {
    id: 1,
    name: "Arm Wrestling",
    icon: Zap,
    description:
      "Head-to-head power contest showcasing raw upper body strength",
    image: "/sports/arm-wrestling.jpeg",
    participants: "2,900+",
    category: "Strength",
    details: "Single elimination tournament format with weight divisions",
  },
  {
    id: 2,
    name: "Bench Press",
    icon: Award,
    description:
      "Classic powerlifting challenge testing maximum pressing power",
    image: "/sports/bench-press.jpg",
    participants: "3,200+",
    category: "Strength",
    details: "Three attempts to achieve maximum single rep",
  },
  {
    id: 3,
    name: "Darts",
    icon: Target,
    description: "Precision and accuracy in this classic pub game",
    image: "/sports/darts.jpg",
    participants: "1,800+",
    category: "Precision",
    details: "Standard 501 format with double-out finish",
  },
  {
    id: 4,
    name: "Indoor Rowing",
    icon: Activity,
    description: "Endurance test on the rowing ergometer",
    image: "/sports/indoor-rowing.jpg",
    participants: "4,100+",
    category: "Endurance",
    details: "2000m distance race for time",
  },
  {
    id: 5,
    name: "Push Pull Lifting",
    icon: Dumbbell,
    description: "Ultimate strength competition combining multiple lifts",
    image: "/sports/push-pull.jpeg",
    participants: "2,500+",
    category: "Strength",
    details: "Combined bench press and deadlift total",
  },
  {
    id: 6,
    name: "Cross Country 5KM",
    icon: Mountain,
    description: "Endurance running challenge through varied terrain",
    image: "/sports/running.jpg",
    participants: "5,600+",
    category: "Endurance",
    details: "5 kilometer course with natural obstacles",
  },
  {
    id: 7,
    name: "Bodybuilding",
    icon: Flame,
    description: "Physique competition judged on symmetry and conditioning",
    image: "/sports/body-building.jpg",
    participants: "1,400+",
    category: "Physique",
    details: "Multiple rounds including mandatory poses",
  },
  {
    id: 8,
    name: "Muster",
    icon: Trophy,
    description: "Traditional formation and drill competition",
    image: "/sports/muster.jpeg",
    participants: "2,100+",
    category: "Skills",
    details: "Team-based precision drill and ceremony",
  },
];

const categoryColors: Record<Category, string> = {
  Strength: "from-red-500/30 to-orange-500/30",
  Endurance: "from-blue-500/30 to-cyan-500/30",
  Precision: "from-purple-500/30 to-pink-500/30",
  Physique: "from-yellow-500/30 to-orange-500/30",
  Skills: "from-green-500/30 to-teal-500/30",
};

// Optimized bento grid pattern for 8 items
const bentoPattern = [
  "col-span-2 row-span-2", // Large
  "col-span-1 row-span-1", // Small
  "col-span-1 row-span-1", // Small
  "col-span-1 row-span-2", // Tall
  "col-span-2 row-span-1", // Wide
  "col-span-1 row-span-1", // Small
  "col-span-1 row-span-1", // Small
  "col-span-2 row-span-1", // Wide
];

export default function GamesSection(): JSX.Element {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Memoize games with their grid classes
  const gamesWithClasses = useMemo((): GameWithClasses[] => {
    return games.map((game, index) => ({
      ...game,
      gridClass: bentoPattern[index % bentoPattern.length],
      categoryColor: categoryColors[game.category],
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <section
      id="games"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              COMPETITION
            </span>
            <span className="text-white block mt-2">EVENTS</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            8 incredible sporting events where first responders showcase their
            skills, strength, and determination.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{
            gridAutoRows: "200px",
          }}
        >
          {gamesWithClasses.map((game) => {
            const IconComponent = game.icon;

            return (
              <motion.div
                key={game.id}
                // variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${game.gridClass} cursor-pointer group`}
                onClick={() => setSelectedGame(game)}
              >
                <Card className="h-full bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-700/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-0 h-full relative">
                    {/* Background Image */}
                    <div
                      className="h-full bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${game.image})` }}
                    >
                      {/* Gradient Overlays */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${game.categoryColor}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-white/20 text-white border-white/30 text-xs"
                          >
                            {game.category}
                          </Badge>
                        </div>

                        <h3 className="text-lg lg:text-xl font-bold text-white mb-2 leading-tight group-hover:transform group-hover:translate-y-[-2px] transition-all duration-300">
                          {game.name}
                        </h3>
                        <p className="text-white/90 text-sm mb-3 line-clamp-2 group-hover:text-white transition-colors duration-300">
                          {game.description}
                        </p>
                      </div>

                      <div className="flex items-center text-white/80 text-xs">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{game.participants} participants</span>
                      </div>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedGame && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedGame(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedGame(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={selectedGame.image}
                        alt={selectedGame.name}
                        className="w-full h-64 md:h-80 object-cover rounded-t-lg"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          categoryColors[selectedGame.category]
                        } rounded-t-lg`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-lg" />
                      {/* Icon overlay */}
                      <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                        <selectedGame.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {selectedGame.name}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-blue-600/30 text-blue-200 border-blue-500/30"
                        >
                          {selectedGame.category}
                        </Badge>
                      </div>

                      <p className="text-gray-300 mb-6 text-lg">
                        {selectedGame.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Users className="w-5 h-5 mr-3 text-blue-400" />
                          <div>
                            <div className="text-sm text-gray-400">
                              Participants
                            </div>
                            <div className="font-semibold">
                              {selectedGame.participants}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Trophy className="w-5 h-5 mr-3 text-purple-400" />
                          <div>
                            <div className="text-sm text-gray-400">
                              Category
                            </div>
                            <div className="font-semibold">
                              {selectedGame.category}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">
                          Competition Details
                        </h4>
                        <p className="text-gray-300">{selectedGame.details}</p>
                      </div>

                      <div className="mt-6 flex gap-4">
                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                          Register Now
                        </button>
                        <button className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/70 mb-8">
            Ready to compete at the highest level?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            View All Events & Register
          </button>
        </motion.div>
      </div>
    </section>
  );
}
