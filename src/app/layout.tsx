"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata: Metadata = {
  title: "My Portfolio - Home",
  description: "portfolio homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false); // Added client state

  // Check if running in the client-side (after initial render)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Capture mouse movements
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({
        x: clientX,
        y: clientY,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  // Trigger the animation when the route changes
  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 1000); // Animation duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!isClient) return null; // Prevent rendering until we are in the client

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white custom-scrollbar`}
      >
        <div className="w-full h-[100vh] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {isAnimating && <SinglePageTransition key="page-transition" />}
          </AnimatePresence>

          {/* Camera Effect Background */}
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-700 z-[-1]"
            initial={{ scale: 1 }}
            animate={{
              scale: 1.05,
              rotate: 10,
              rotateX: (mousePosition.y - window.innerHeight / 2) / 50,
              rotateY: (mousePosition.x - window.innerWidth / 2) / 50,
            }}
            exit={{ scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1500px",
            }}
          />

          {!isAnimating && (
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div
                className="max-w-7xl m-auto p-5"
                style={{
                  transform: `rotateX(${(mousePosition.y - window.innerHeight / 2) / 30}deg) 
                              rotateY(${(mousePosition.x - window.innerWidth / 2) / 30}deg)`,
                }}
              >
                <Navbar />
                {children}
              </div>
            </motion.div>
          )}
        </div>
      </body>
    </html>
  );
}

function SinglePageTransition() {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-50"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  );
}
