"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";
import AboutContent from "@/components/layout/AboutContent";
import ProfileImage from "@/components/layout/ProfileImage";
import SectionHeader from "@/components/layout/SectionHeader";

// Dummy image data for the gallery
const images = [
  "/img/project1.png",
  "/img/project2.png",
  "/img/project3.png",
  "/img/project4.png",
  "/img/project5.png",
];

const sliderVariants = {
  hidden: { opacity: 0, y: -100 }, 
  visible: { opacity: 1, y: 0 }, 
  exit: { opacity: 0, y: 100 }, 
};

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0); // Slider index for 1st and 2nd slide

  const handleNextSlide = () => {
    setSliderIndex((prev) => (prev + 1) % 2); // Only two slides, 1st and 2nd
  };

  const handlePrevSlide = () => {
    setSliderIndex((prev) => (prev - 1 + 2) % 2);
  };

  const handleNextImage = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="flex gap-10 mt-5 font-serif h-auto bg-slate-100 pr-5 overflow-hidden ">
        {/* Profile Image */}
        <div>
          <ProfileImage />
        </div>

        {/* Project Section */}
        <div className="w-full sm:w-full md:w-full lg:w-3/4 mt-5">
          <SectionHeader title="Projects" />

          {/* Slider container for 1st and 2nd slides */}
          <div className="h-full w-full flex flex-col gap-10 items-center  relative">
            <div className=" flex justify-end mt-5 gap-4">
              <Button
                className="text-white p-3 rounded-lg"
                onClick={handlePrevSlide}
              >
                <FaArrowLeft />
              </Button>
              <Button
                className="text-white p-3 rounded-lg"
                onClick={handleNextSlide}
              >
                <FaArrowRight />
              </Button>
            </div>
            <AnimatePresence mode="wait">
              {sliderIndex === 0 && (
                <motion.div
                  key="slide1"
                  className="relative p-2 rounded-2xl group"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={sliderVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/img/project1.png"
                    width={500}
                    height={500}
                    alt="project image"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  >
                    <Button
                      className="text-white p-3 rounded-lg"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <FaArrowUp />
                    </Button>
                  </motion.div>
                  <div className="capitalize mt-5">
                    <AboutContent name="Tech" desc="HTML CSS JS" />
                    <AboutContent name="Title" desc="Bachat Mart" />
                    <AboutContent name="Type" desc="E-commerce Website" />
                    <AboutContent name="Duration" desc="1 month" />
                  </div>
                </motion.div>
              )}

              {sliderIndex === 1 && (
                <motion.div
                  key="slide2"
                  className="relative p-2 group"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={sliderVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/img/project1.png"
                    width={500}
                    height={500}
                    alt="project image"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  >
                    <Button
                      className="text-white p-3 rounded-lg"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <FaArrowUp />
                    </Button>
                  </motion.div>
                  <div className="capitalize mt-5">
                    <AboutContent name="Tech" desc="HTML CSS JS" />
                    <AboutContent name="Title" desc="Bachat Mart" />
                    <AboutContent name="Type" desc="E-commerce Website" />
                    <AboutContent name="Duration" desc="1 month" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Slider Controls */}
          </div>
        </div>
      </div>

      {/* Modal for image gallery */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative p-4 bg-white w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sliderVariants}
            >
              <Image
                src={images[activeSlide]}
                alt="Gallery Image"
                width={500}
                height={500}
              />
              <div className="flex justify-between mt-4">
                <Button className="text-white" onClick={handlePrevImage}>
                  <FaArrowLeft />
                </Button>
                <Button className="text-white" onClick={handleNextImage}>
                  <FaArrowRight />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
