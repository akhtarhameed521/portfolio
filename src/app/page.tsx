"use client"
import ProfileImage from "@/components/layout/ProfileImage";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        setTypingSpeed(50); // Fast delete speed
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // Reset typing speed after deleting
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, typingSpeed, loopNum, titles]);

  return (
    <>
      
      <div className="bg-slate-100  capitalize rounded-md  ">
        <div className="mt-5">
          <div className="grid grid-col-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="w-fit">
              <ProfileImage />
            </div>
            <div className="flex flex-col justify-center  items-center lg:items-baseline lg:h-auto">
              <h1 className="text-[50px] font-bold">Akhtar Hameed</h1>
              <hr className="h-2 w-28 bg-black rounded-lg" />
              
              <h2 className="mt-5 text-[20px] font-semibold">
                {text}
                <span className="blinking-cursor">|</span>
              </h2>

              <div className="mt-5">
                <Button>Get in touch</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 20px;
          color: black;
          animation: blink 0.8s infinite;
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
}
