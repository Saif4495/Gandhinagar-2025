"use client";

import {
  Shield,
  Star,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ExternalLink,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-red-900 to-yellow-950 border-t border-orange-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative flex-shrink-0">
                  <Image
                    src="/logo/marathon.png"
                    alt="Rashtriya Raksha University"
                    width={60}
                    height={60}
                    className="object-contain sm:w-20 sm:h-20"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-lg sm:text-xl font-black leading-tight text-white">
                    Gandhinagar Marathon 2025
                  </span>
                  <span className="text-xs sm:text-sm text-orange-400 font-semibold leading-tight">
                    Marathon 2025
                  </span>
                </div>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Gandhinagar Marathon 2025 Where passion meets endurance and every
              step echoes a cause. Join thousands in Gujarat capital city for
              the ultimate celebration of fitness, unity, and purpose.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group text-sm sm:text-base"
                >
                  <span>Home</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group text-sm sm:text-base"
                >
                  <span>About</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#games"
                  className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group text-sm sm:text-base"
                >
                  <span>Events</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group text-sm sm:text-base"
                >
                  <span>News</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group text-sm sm:text-base"
                >
                  <span>Registration</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group text-sm sm:text-base"
                >
                  <span>Venues</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">
              Contact
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white/90 font-medium text-sm sm:text-base">
                    Event Location
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">
                    Rashtriya Raksha University
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">
                    Lavad-Dahegam, Gandhinagar - 382305
                  </div>
                </div>
              </li>
              {/* <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="text-white/90 font-medium text-sm sm:text-base">
                    079-6812680
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">
                    Registration Hotline
                  </div>
                </div>
              </li> */}
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                <div>
                  <div className="text-white/90 font-medium text-sm sm:text-base">
                    rru.ac.in
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">
                    General Inquiries
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            {/* Copyright and Developer Credit */}
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm">
              <div className="text-white/60">
                © 2025 Marathon. All rights reserved. | Built with pride for law
                enforcement heroes.
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white/50">Developed by</span>
                <motion.a
                  href="https://www.linkedin.com/in/dev-mohd-saif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>MOHD SAIF SIDDIQI</span>
                </motion.a>
              </div>
            </div>

            {/* Footer Links */}
            {/* <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                Code of Conduct
              </a>
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-orange-400/10"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-48 sm:h-48 rounded-full border border-cyan-400/10"></div>
      </div>
    </footer>
  );
}
