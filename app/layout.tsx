import "./globals.css";
import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "Marathon 2025",
  description:
    "Marathon 2025 Gandhinagar is a premier marathon event that brings together runners from all over the world to celebrate fitness, community, and the spirit of competition. Join us for an unforgettable experience in the heart of Gujarat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${rajdhani.variable} scroll-smooth`}>
        <body
          className={`${rajdhani.className} bg-slate-950 text-white overflow-x-hidden antialiased`}
        >
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
