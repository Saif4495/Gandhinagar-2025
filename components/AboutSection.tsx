"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Award, Users, Target } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            ABOUT <span className="gradient-text">POLICE GAMES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/gallery/past_games/img7.jpg"
                alt="Police Officers Training"
                width={800}
                height={500}
                className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-full p-6 border border-white/20">
                <Shield className="w-12 h-12 text-blue-400" />
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 left-8 glass-effect rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">2029</div>
                  <div className="text-xs text-white/60">YEAR</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">5TH</div>
                  <div className="text-xs text-white/60">EDITION</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Building Stronger Communities Through
                <span className="gradient-text"> Elite Competition</span>
              </h3>

              <p className="text-lg text-white/80 leading-relaxed">
                Police Games 2029 brings together the world&apos;s finest law
                enforcement officers in the ultimate test of strength, skill,
                and determination. Our mission is to foster international
                cooperation, celebrate excellence, and inspire the next
                generation of heroes who serve and protect our communities.
              </p>

              <p className="text-lg text-white/70 leading-relaxed">
                From precision shooting to tactical challenges, every event
                showcases the dedication and professionalism that defines modern
                policing. Join us in celebrating those who put their lives on
                the line every day.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <motion.div
                className="flex items-center space-x-4 p-4 glass-effect rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Award className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Excellence</div>
                  <div className="text-sm text-white/60">
                    World-class competition
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 glass-effect rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Users className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Unity</div>
                  <div className="text-sm text-white/60">
                    Global brotherhood
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 glass-effect rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Target className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Precision</div>
                  <div className="text-sm text-white/60">
                    Elite skill showcase
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 glass-effect rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Shield className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Honor</div>
                  <div className="text-sm text-white/60">
                    Serving with pride
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full border border-blue-400/10"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full border border-cyan-400/10"></div>
      </div>
    </section>
  );
}
