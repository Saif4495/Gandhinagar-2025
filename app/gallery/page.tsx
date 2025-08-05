"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Calendar, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Image data - easily expandable
const rruEventsImages = [
  {
    id: 1,
    src: "/gallery/rru/img1.jpg",
  },
  {
    id: 2,
    src: "/gallery/rru/img2.jpg",
  },
  {
    id: 3,
    src: "/gallery/rru/img3.jpg",
  },
  {
    id: 4,
    src: "/gallery/rru/img4.jpg",
  },
  {
    id: 5,
    src: "/gallery/rru/img5.jpg",
  },
  {
    id: 6,
    src: "/gallery/rru/img6.jpeg",
  },
];

const pastGamesImages = [
  {
    id: 1,
    src: "/gallery/past_games/img1.jpg",
  },
  {
    id: 2,
    src: "/gallery/past_games/img2.jpg",
  },
  {
    id: 3,
    src: "/gallery/past_games/img3.jpg",
  },
  {
    id: 4,
    src: "/gallery/past_games/img4.jpg",
  },
  {
    id: 5,
    src: "/gallery/past_games/img5.jpg",
  },
  {
    id: 6,
    src: "/gallery/past_games/img6.jpg",
  },
  {
    id: 7,
    src: "/gallery/past_games/img7.jpg",
  },
  {
    id: 8,
    src: "/gallery/past_games/img8.jpg",
  },
  {
    id: 9,
    src: "/gallery/past_games/img9.jpeg",
  },
  {
    id: 10,
    src: "/gallery/past_games/img10.jpg",
  },
  {
    id: 11,
    src: "/gallery/past_games/img11.jpeg",
  },
  {
    id: 12,
    src: "/gallery/past_games/img12.jpeg",
  },
  {
    id: 13,
    src: "/gallery/past_games/img13.jpeg",
  },
  {
    id: 14,
    src: "/gallery/past_games/img14.jpeg",
  },
  {
    id: 15,
    src: "/gallery/past_games/img15.jpeg",
  },
  {
    id: 16,
    src: "/gallery/past_games/img16.jpeg",
  },
  {
    id: 17,
    src: "/gallery/past_games/img17.jpeg",
  },
  {
    id: 18,
    src: "/gallery/past_games/img18.jpeg",
  },
  {
    id: 19,
    src: "/gallery/past_games/img19.jpeg",
  },
  {
    id: 20,
    src: "/gallery/past_games/img20.jpeg",
  },
  {
    id: 21,
    src: "/gallery/past_games/img21.jpeg",
  },
  {
    id: 22,
    src: "/gallery/past_games/img22.jpeg",
  },
  {
    id: 23,
    src: "/gallery/past_games/img23.jpeg",
  },
  {
    id: 24,
    src: "/gallery/past_games/img24.jpeg",
  },
  {
    id: 25,
    src: "/gallery/past_games/img25.jpeg",
  },
  {
    id: 26,
    src: "/gallery/past_games/img26.jpeg",
  },
  {
    id: 27,
    src: "/gallery/past_games/img27.jpeg",
  },
];

interface ImageData {
  id: number;
  src: string;
}

interface GalleryGridProps {
  images: ImageData[];
  title: string;
  icon: React.ReactNode;
  gridPattern: string[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  images,
  icon,
  gridPattern,
}) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

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
    <div className="mb-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
          {icon}
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {/* {title} */}
          </h2>
          <p className="text-gray-400 mt-1">{images.length} Images</p>
        </div>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gridAutoRows: "200px",
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            // variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${
              gridPattern[index % gridPattern.length]
            } cursor-pointer group`}
            onClick={() => setSelectedImage(image)}
          >
            <Card className="h-full bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-700/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-0 h-full relative">
                <div
                  className="h-full bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image.src})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
                <CardContent className="p-0">
                  <img
                    src={selectedImage.src}
                    // alt={selectedImage.title}
                    // className="w-full h-auto max-h-[70vh] object-contain rounded-t-lg"
                  />
                  <div className="p-6">
                    {/* <h3 className="text-xl font-bold text-white mb-2">
                      {selectedImage.title}
                    </h3> */}
                    <Badge
                      variant="secondary"
                      className="bg-blue-600/30 text-blue-200 border-blue-500/30"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function GalleryPage() {
  // Grid patterns for different layouts
  const rruGridPattern = [
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  const pastGamesGridPattern = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Navbar />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/20 to-black/40" />

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12 max-w-7xl">
          {/* Main Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Capturing moments from RRU events and past police & fire games
              competitions
            </p>
          </motion.div>

          {/* RRU Events Gallery */}
          <GalleryGrid
            images={rruEventsImages}
            title="RRU Events"
            icon={<Trophy className="w-6 h-6 text-blue-400" />}
            gridPattern={rruGridPattern}
          />

          {/* Past Police & Fire Games Gallery */}
          <GalleryGrid
            images={pastGamesImages}
            title="Past Police & Fire Games"
            icon={<Calendar className="w-6 h-6 text-purple-400" />}
            gridPattern={pastGamesGridPattern}
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <Footer />
    </div>
  );
}
