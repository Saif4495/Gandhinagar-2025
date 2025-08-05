"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const fabData = [
  {
    name: "Visit BHM Official Website",
    link: "https://bhm2025.com/",
    logo: "/logo/bhm.jpg",
  },
  {
    name: "Visit Perth 2027",
    link: "https://wpfg2027.com/",
    logo: "/logo/perth.jpg",
  },
];

export function LogoFABs() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
    console.error(`Failed to load image: ${fabData[index].logo}`);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {fabData.map((fab, index) => (
        <Link
          key={index}
          href={fab.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          className="group"
        >
          <div
            className={`
              flex items-center justify-start
              bg-white hover:bg-gray-50
              text-black py-2 px-2 pl-3 rounded-full
              shadow-lg hover:shadow-2xl
              transition-all duration-300 ease-in-out
              cursor-pointer transform hover:scale-105 active:scale-95
              border border-gray-200 hover:border-gray-300
              backdrop-blur-sm bg-opacity-95
              group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50
            `}
          >
            {/* Logo Image Container with Animation */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
              {!imageErrors[index] ? (
                <Image
                  src={fab.logo}
                  alt={fab.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  onError={() => handleImageError(index)}
                  priority={index === 0} // Priority loading for first image
                />
              ) : (
                // Fallback when image fails to load with custom gradients
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    index === 0
                      ? "bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500" // BHM - Orange/Yellow
                      : "bg-gradient-to-br from-green-400 via-emerald-400 to-lime-400" // Perth - Neon Green
                  }`}
                >
                  <span
                    className={`text-lg font-bold ${
                      index === 0
                        ? "text-white drop-shadow-lg"
                        : "text-gray-800 drop-shadow-sm"
                    }`}
                  >
                    {fab.name.charAt(0)}
                  </span>
                </div>
              )}

              {/* Animated ring on hover with custom colors */}
              <div
                className={`
                absolute inset-0 rounded-full border-2 border-transparent
                transition-all duration-300
                ${
                  hoverIndex === index
                    ? index === 0
                      ? "border-orange-400 animate-pulse shadow-lg shadow-orange-300/50" // BHM - Orange
                      : "border-green-400 animate-pulse shadow-lg shadow-green-300/50" // Perth - Green
                    : ""
                }
              `}
              />

              {/* Color overlay on hover */}
              <div
                className={`
                absolute inset-0 rounded-full transition-all duration-300
                ${
                  hoverIndex === index
                    ? index === 0
                      ? "bg-gradient-to-br from-orange-400/20 via-yellow-400/15 to-orange-500/20" // BHM overlay
                      : "bg-gradient-to-br from-green-400/20 via-emerald-400/15 to-lime-400/20" // Perth overlay
                    : "bg-transparent"
                }
              `}
              />
            </div>

            {/* Expanding Text with improved animation */}
            <div className="overflow-hidden">
              <span
                className={`
                  block text-sm font-medium whitespace-nowrap 
                  transition-all duration-300 ease-in-out
                  ${
                    hoverIndex === index
                      ? "opacity-100 max-w-xs ml-3 translate-x-0"
                      : "opacity-0 max-w-0 ml-0 -translate-x-2"
                  }
                `}
              >
                {fab.name}
              </span>
            </div>

            {/* Subtle glow effect on hover with custom colors */}
            <div
              className={`
              absolute inset-0 rounded-full transition-opacity duration-300
              ${
                hoverIndex === index
                  ? index === 0
                    ? "opacity-100 bg-gradient-to-r from-orange-400/10 to-yellow-400/10" // BHM glow
                    : "opacity-100 bg-gradient-to-r from-green-400/10 to-lime-400/10" // Perth glow
                  : "opacity-0"
              }
            `}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
