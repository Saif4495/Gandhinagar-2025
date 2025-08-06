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
    { name: "Information", href: "#information" },
    { name: "Route", href: "#route" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ];

  const isActive = (path: string): boolean => pathname === path;

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  // Show loading state until both mounted and Clerk is loaded
  if (!mounted || !isLoaded) {
    return (
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-gradient-to-r from-red-500/20 via-orange-400/20 to-pink-500/20 border-b border-white/10 shadow-2xl">
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
          ? "backdrop-blur-2xl bg-gradient-to-r from-red-600/30 via-orange-500/30 to-pink-600/30 shadow-2xl border-b border-white/20"
          : "backdrop-blur-xl bg-gradient-to-r from-red-500/25 via-orange-400/25 to-pink-500/25 shadow-xl border-b border-white/10"
      }`}
    >
      {/* Animated glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse"></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-black-400/90 backdrop-blur-sm rounded-xl p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-white/20">
                <Image
                  src="/logo/marathon.png"
                  alt="Soekarno Run Solo Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white drop-shadow-lg group-hover:text-orange-100 transition-colors duration-300">
                <span className="text-red-400">Gandhinagar</span>
              </span>
              <span className="text-sm text-white/90 font-semibold drop-shadow-md -mt-1">
                RUN 2025
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 group backdrop-blur-sm ${
                  isActive(item.href)
                    ? "text-red-600 bg-white/90 shadow-lg border border-white/30"
                    : "text-white hover:text-red-600 hover:bg-white/20 hover:shadow-lg border border-transparent hover:border-white/20"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-orange-100/50 rounded-full animate-pulse"></div>
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
                  className="border-2 border-white/40 bg-white/10 text-white hover:bg-white/90 hover:text-red-600 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-full px-6"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center bg-white/20 rounded-full p-1 backdrop-blur-sm shadow-lg border border-white/20">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-10 h-10 rounded-full ring-3 ring-white/50 hover:ring-red-300 transition-all duration-300 shadow-lg",
                    },
                  }}
                />
              </div>
            </SignedIn>
            <Button
              size="sm"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-red-400/30 hover:border-red-300 backdrop-blur-sm"
            >
              <Trophy className="w-4 h-4 mr-2" />
              REGISTRATION NOW
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-600 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 hover:border-white/40"
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
          <div className="lg:hidden py-6 border-t  bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl rounded-b-2xl shadow-2xl mt-2 border-x border-b border-white/10">
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-6 py-4 text-base font-semibold rounded-full mx-4 transition-all duration-300 backdrop-blur-sm border ${
                    isActive(item.href)
                      ? "text-red-600 bg-white/90 shadow-lg border-white/30"
                      : "text-white hover:text-red-600 hover:bg-white/20 hover:shadow-lg border-transparent hover:border-white/20"
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
                      className="w-full border-2 border-white/40 bg-white/10 text-white hover:bg-white/90 hover:text-red-600 font-semibold backdrop-blur-sm transition-all duration-300 py-3 rounded-full shadow-lg"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-center py-3">
                    <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm shadow-lg border border-white/20">
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
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-400/30 backdrop-blur-sm"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  REGISTRATION NOW
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-400/50 via-orange-300/70 to-red-400/50"></div>
    </header>
  );
}
