"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Trophy } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const { isLoaded } = useUser();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Results", href: "/results" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string): boolean => pathname === path;

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  // Show loading state until both mounted and Clerk is loaded
  if (!mounted || !isLoaded) {
    return (
      <header className="bg-gradient-to-r from-green-600 via-yellow-400 to-green-500 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="animate-pulse bg-white/20 h-12 w-64 rounded-lg"></div>
            <div className="animate-pulse bg-white/20 h-10 w-32 rounded-lg"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-green-700/95 via-yellow-500/95 to-green-600/95 backdrop-blur-xl shadow-2xl border-b border-white/20"
          : "bg-gradient-to-r from-green-600 via-yellow-400 to-green-500 shadow-xl"
      }`}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-yellow-300/10 to-green-400/10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-white/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/logo/marathon.png"
                  alt="Marathon Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white drop-shadow-lg group-hover:text-yellow-100 transition-colors duration-300">
                Gandhinagar Marathon
              </span>
              <span className="text-sm text-white/90 font-semibold drop-shadow-md">
                2025 • Run for Glory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                  isActive(item.href)
                    ? "text-green-800 bg-white/90 shadow-lg backdrop-blur-sm"
                    : "text-white hover:text-green-800 hover:bg-white/80 hover:shadow-lg hover:backdrop-blur-sm"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/50 to-green-200/50 rounded-xl animate-pulse"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-green-700 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center bg-white/20 rounded-full p-1 backdrop-blur-sm shadow-lg">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-10 h-10 rounded-full ring-3 ring-white/50 hover:ring-yellow-300 transition-all duration-300 shadow-lg",
                    },
                  }}
                />
              </div>
            </SignedIn>
            <Button
              size="sm"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-green-800 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-yellow-300/50 hover:border-yellow-200"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Register Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-800 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-b-2xl shadow-2xl">
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-6 py-4 text-base font-semibold rounded-xl mx-4 transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-green-800 bg-white/90 shadow-lg"
                      : "text-white hover:text-green-800 hover:bg-white/80 hover:shadow-lg"
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 space-y-4 border-t border-white/20 mt-6 mx-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-green-700 font-semibold backdrop-blur-sm transition-all duration-300 py-3 rounded-xl shadow-lg"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-center py-3">
                    <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm shadow-lg">
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox:
                              "w-10 h-10 rounded-full ring-3 ring-white/50",
                          },
                        }}
                      />
                    </div>
                  </div>
                </SignedIn>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-green-800 font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-yellow-300/50"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Register Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-yellow-300 to-green-400 animate-pulse"></div>
    </header>
  );
}
