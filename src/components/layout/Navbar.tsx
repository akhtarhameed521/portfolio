"use client"; 

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <nav className="relative bg-white shadow-md z-50 ">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        
        <button onClick={toggleMenu} className="lg:hidden">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

       
        <ul className="hidden lg:flex gap-10 font-mono text-lg font-bold capitalize">
          {["home", "about", "projects", "experience", "contact"].map((item) => (
            <Link key={item} href={`/${item === "home" ? "" : item}`}>
              {item}
            </Link>
          ))}
        </ul>

        
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-10 shadow-lg font-mono text-lg font-bold capitalize"
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
              transition={{ type: "spring", stiffness: 80 }}
            >
              {["home", "about", "projects", "experience", "contact"].map((item) => (
                <Link key={item} href={`/${item === "home" ? "" : item}`}>
                  <span onClick={() => setIsOpen(false)}>{item}</span>
                </Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
