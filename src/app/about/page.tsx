"use client";
import { motion } from "framer-motion";
import AboutContent from "@/components/layout/AboutContent";
import ProfileImage from "@/components/layout/ProfileImage";
import SectionHeader from "@/components/layout/SectionHeader";

const skills = [
  { name: "HTML", level: 50 },
  { name: "CSS", level: 50 },
  { name: "Bootstrap", level: 50 },
  { name: "JavaScript", level: 40 },
  { name: "React JS", level: 40 },
  { name: "Node JS", level: 35 },
  { name: "Nest JS", level: 30 },
  { name: "Tailwind CSS", level: 50 },
  { name: "Express JS", level: 40 },
  { name: "TypeORM", level: 35 },
  { name: "PostgreSQL", level: 30 },
  { name: "MongoDB", level: 30 },
  { name: "Next Js", level: 35 },
  { name: "Prisma", level: 35 },
];

interface FramerTypes {
  name: string;
  level: number;
}

const ProgressBar = ({ name, level }: FramerTypes) => (
  <motion.div
    className="mb-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1, duration: 1 }}
  >
    <div className="flex justify-between items-center mb-2">
      <motion.span
        className="text-md font-semibold"
        whileHover={{ scale: 1.05, color: "#3498db" }}
      >
        {name}
      </motion.span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 50,
        }}
      />
    </div>
  </motion.div>
);

export default function Page() {
  return (
    <div className="flex gap-10 mt-5 font-serif h-[81.5vh] pr-5 overflow-auto bg-gray-100 p-8 rounded-lg shadow-lg">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <ProfileImage />
      </motion.div>

      <div className="w-full lg:w-3/4 mt-5">
        <SectionHeader title="About Me" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, staggerChildren: 0.2 }}
        >
          <motion.div>
            <p className="mb-2 font-normal font-sans text-gray-700">
              Hello there! My name is Alan Walker. I am a graphic designer, and
              I'm very passionate and dedicated to my work.
            </p>
            <p className="font-normal font-sans text-gray-700">
              With 20 years of experience as a professional graphic designer, I
              have acquired the skills and knowledge necessary to make your
              project a success.
            </p>
          </motion.div>
          <motion.div>
            <AboutContent name="Name" desc="Alan Walker" />
            <AboutContent name="Address" desc="Sharah-e-Faisal, Karachi" />
            <AboutContent name="Study" desc="Shah Abdul Latif Bhittai University" />
            <AboutContent name="Degree" desc="Bachelors of Computer Science" />
            <AboutContent name="Email" desc="akhtar.hameed521@gmail.com" />
          </motion.div>
        </motion.div>

        <div className="mt-10">
          <SectionHeader title="Expertise" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, staggerChildren: 0.3 }}
          >
            {skills.map((skill) => (
              <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
