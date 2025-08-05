'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
    >
      {/* Progress Bar */}
      <div className="relative">
        {/* Background Track */}
        <div className="w-1 h-32 bg-white/10 rounded-full">
          {/* Progress Fill */}
          <motion.div
            className="w-full bg-gradient-to-t from-blue-400 to-cyan-400 rounded-full origin-top"
            style={{ 
              height: '100%',
              scaleY: scrollProgress,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 w-1 rounded-full"
          animate={{
            boxShadow: [
              "0 0 5px rgba(59, 130, 246, 0.3)",
              "0 0 15px rgba(59, 130, 246, 0.6)",
              "0 0 5px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Section Indicators */}
      <div className="absolute -right-8 top-0 h-full flex flex-col justify-between text-xs text-white/40">
        <div className="transform -rotate-90 origin-center whitespace-nowrap">HOME</div>
        <div className="transform -rotate-90 origin-center whitespace-nowrap">ABOUT</div>
        <div className="transform -rotate-90 origin-center whitespace-nowrap">EVENTS</div>
        <div className="transform -rotate-90 origin-center whitespace-nowrap">NEWS</div>
      </div>
    </motion.div>
  );
}