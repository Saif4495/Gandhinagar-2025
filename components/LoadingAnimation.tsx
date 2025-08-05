"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Star } from "lucide-react";

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Minimum loading time
    const minLoadingTime = setTimeout(() => {
      setProgress(100);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(minLoadingTime);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Static Badge with Pulse */}
            <motion.div
              className="relative mb-8"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                <Shield className="w-24 h-24 text-blue-400" />
                <Star className="w-8 h-8 text-cyan-400 absolute top-8 left-8" />

                {/* Enhanced Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(59, 130, 246, 0.6)",
                      "0 0 60px rgba(59, 130, 246, 1)",
                      "0 0 30px rgba(59, 130, 246, 0.6)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Additional outer glow */}
                <motion.div
                  className="absolute -inset-4 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(6, 182, 212, 0)",
                      "0 0 40px rgba(6, 182, 212, 0.4)",
                      "0 0 0px rgba(6, 182, 212, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Enhanced Loading Text with Multiple Animations */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Animated POLICE text */}
              <motion.h2
                className="text-2xl font-black text-white"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255, 255, 255, 0.5)",
                    "0 0 20px rgba(255, 255, 255, 0.8)",
                    "0 0 10px rgba(255, 255, 255, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                POLICE{" "}
              </motion.h2>

              {/* Glowing animated main title */}
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.h1
                  className="text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  World Police And Fire Games
                </motion.h1>

                {/* Glowing underline effect */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  animate={{
                    width: ["0%", "100%", "0%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Year with glow */}
              <motion.p
                className="text-xl font-bold text-cyan-400"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(6, 182, 212, 0.5)",
                    "0 0 15px rgba(6, 182, 212, 0.8)",
                    "0 0 5px rgba(6, 182, 212, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                2029
              </motion.p>

              <motion.p
                className="text-white/60"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading elite competition...
              </motion.p>
            </motion.div>

            {/* Enhanced Progress Bar */}
            <div className="mt-8 w-64 mx-auto">
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full relative"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Moving shimmer effect on progress bar */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
              <motion.div
                className="text-center mt-2 text-cyan-400 text-sm font-semibold"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(6, 182, 212, 0.5)",
                    "0 0 10px rgba(6, 182, 212, 0.8)",
                    "0 0 5px rgba(6, 182, 212, 0.5)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>

            {/* Enhanced animated dots */}
            <div className="flex justify-center space-x-3 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 1, 0.4],
                    boxShadow: [
                      "0 0 0px rgba(6, 182, 212, 0)",
                      "0 0 15px rgba(6, 182, 212, 0.8)",
                      "0 0 0px rgba(6, 182, 212, 0)",
                    ],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-blue-400"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border border-cyan-400"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full border border-white"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>

          {/* Additional floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
