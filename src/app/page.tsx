"use client";
import ProfileImage from "@/components/layout/ProfileImage";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(50);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, typingSpeed, loopNum, titles]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="bg-slate-100 rounded-2xl shadow-2xl p-10 md:p-16 mt-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2"
        >
          <ProfileImage/>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left space-y-8 lg:w-1/2"
        >
          <h1 className="text-6xl font-extrabold tracking-tight text-black">
            Akhtar Hameed
          </h1>
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto lg:mx-0 w-32 h-1 bg-black rounded-lg mt-3"
          />
          <h2 className="mt-5 text-2xl lg:text-3xl font-semibold text-black">
            {text}
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 1 }}
              className="blinking-cursor text-black"
            >
              |
            </motion.span>
          </h2>
          <p className="text-black leading-relaxed text-lg lg:text-xl">
            A passionate developer focused on creating impactful solutions that bridge user experience and technology.
          </p>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-8"
          >
            <Button className="px-10 py-4 bg-yellow-500 text-white rounded-full shadow-lg font-medium hover:bg-yellow-600 transition-all duration-300 transform hover:scale-110">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"
          animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"
          animate={{ y: [0, 10, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
      </div>
    </motion.div>
  );
}
