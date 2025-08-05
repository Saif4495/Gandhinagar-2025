"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, X } from "lucide-react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set target date to July 15, 2029
    const targetDate = new Date("2029-10-07T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        // Event has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 
                     bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 
                     backdrop-blur-sm rounded-xl p-4 border border-blue-400/20 
                     shadow-2xl max-w-xs"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 3 }}
        >
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-white">
                Next Event
              </span>
            </div>
            <button
              onClick={handleClose}
              className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200 
                         active:scale-95 transform"
              aria-label="Close countdown"
            >
              <X className="w-4 h-4 text-white/60 hover:text-white" />
            </button>
          </div>

          <div className="text-xs text-white/60 mb-3">Police Games 2029</div>

          {/* Mobile-optimized grid */}
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-white/5 rounded-lg p-2 border border-white/10">
              <div className="text-lg font-bold text-blue-400">
                {timeLeft.days}
              </div>
              <div className="text-xs text-white/60">DAYS</div>
            </div>
            <div className="bg-white/5 rounded-lg p-2 border border-white/10">
              <div className="text-lg font-bold text-cyan-400">
                {timeLeft.hours}
              </div>
              <div className="text-xs text-white/60">HRS</div>
            </div>
            <div className="bg-white/5 rounded-lg p-2 border border-white/10">
              <div className="text-lg font-bold text-blue-400">
                {timeLeft.minutes}
              </div>
              <div className="text-xs text-white/60">MIN</div>
            </div>
            <div className="bg-white/5 rounded-lg p-2 border border-white/10">
              <div className="text-lg font-bold text-cyan-400">
                {timeLeft.seconds}
              </div>
              <div className="text-xs text-white/60">SEC</div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-3 space-x-1">
            <Clock className="w-3 h-3 text-white/40" />
            <span className="text-xs text-white/40">Oct 07, 2029</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
