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

interface framerTypes {
  name: string;
  level: number;
}

const ProgressBar = ({ name, level }: framerTypes) => (
  <div className="mb-4">
    <div className="flex justify-between items-center">
      <span className="text-md font-semibold">{name}</span>
      <span className="text-sm">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 h-2 rounded-md">
      <motion.div
        className="bg-black h-full rounded-md"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5 }}
      />
    </div>
  </div>
);

export default function Page() {
  return (
    <>
     
    <div className="flex gap-10 mt-5 font-serif h-[81.5vh] pr-5 overflow-auto bg-slate-100 ">
      <div>
        <ProfileImage />
      </div>
      <div className="w-full lg:w-3/4 mt-5">
        <SectionHeader title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <p className="mb-2 font-normal font-sans">
              Hello there! My name is Alan Walker. I am a graphic designer, and
              I'm very passionate and dedicated to my work.
            </p>
            <p className="font-normal font-sans">
              With 20 years of experience as a professional graphic designer, I
              have acquired the skills and knowledge necessary to make your
              project a success.
            </p>
          </div>
          <div>
            <AboutContent name="Name" desc="Alan Walker" />
            <AboutContent name="Address" desc="Sharah-e-Faisal, Karachi" />
            <AboutContent name="Study" desc="Shah Abdul Latif Bhittai University" />
            <AboutContent name="Degree" desc="Bachelors of Computer Science" />
            <AboutContent name="Email" desc="akhtar.hameed521@gmail.com" />
          </div>
        </div>

        <div className="mt-10">
          <SectionHeader title="Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {skills.map((skill) => (
              <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
