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

  // Trigger the animation when the route changes
  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 1000); // Animation duration

    return () => clearTimeout(timeout); 
  }, [pathname]);

  

  return (
    <html lang="en">
       
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white custom-scrollbar`}
      >
        <div className="w-full h-[100vh] relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {isAnimating && <SinglePageTransition key="page-transition" />}
          </AnimatePresence>

          
          {!isAnimating && (
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="max-w-7xl m-auto p-5">
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
