"use client";

import ProfileImage from "@/components/layout/ProfileImage";
import SectionHeader from "@/components/layout/SectionHeader";
import { motion } from "framer-motion";
import React from "react";

const experienceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projectVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export default function Page() {
  return (
    <div className="flex gap-10 mt-5 font-serif h-[80vh] overflow-auto bg-slate-100 pr-5 p-5">
      <div className="flex-shrink-0">
        <ProfileImage />
      </div>

      {/* Right experience Section */}
      <div className="w-full lg:w-3/4 mt-5">
        <SectionHeader title="Experience" />

        {/* Experience details */}
        <div className="mt-8 space-y-8 pb-4">
          {/* Experience Card */}
          <motion.div
            variants={experienceVariants}
            initial="hidden"
            animate="visible"
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Digitech Infra Associates - MERN Developer
            </h3>
            <p className="text-sm text-gray-500 mt-1">19 March 2024 – Present</p>

            {/* Stepper for experience */}
            <div className="relative mt-4">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              <ul className="ml-8 space-y-4 text-gray-700">
                <li className="flex items-start gap-2">
                  {/* Step Indicator */}
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 mt-1"></div>
                  <span>Worked on an e-commerce website, developing the vendor dashboard and admin dashboard using HTML, CSS, and JavaScript.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 mt-1"></div>
                  <span>Developed interactive features that improved user engagement and streamlined vendor and admin tasks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 mt-1"></div>
                  <span>Architected a full-stack customer review website from scratch, utilizing the MERN stack (MongoDB, Express, React, Node.js).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 mt-1"></div>
                  <span>Developed a comprehensive CRM system that streamlined sales and purchase processes for over 10k employees and 100k customers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 mt-1"></div>
                  <span>Enhanced customer interaction tracking, resulting in a 30% increase in customer satisfaction scores.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Professional Projects Section */}
          <motion.div
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">Professional Projects</h3>

            <div className="mt-4 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Bachat Mart – E-commerce Website</h4>
                <p className="text-gray-600 mt-1">
                  Collaborated with a Laravel developer to integrate the frontend built with HTML, CSS, and JS, and the backend developed with Laravel, ensuring seamless communication and data flow.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700">Apna Connection – Social Networking Platform</h4>
                <p className="text-gray-600 mt-1">
                  Developed using the MERN stack, Apna Connection is a social networking platform designed to connect individuals within a specific community or interest group.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700">Pakistan Cables CRM – Customer Relationship Management</h4>
                <p className="text-gray-600 mt-1">
                  Created a CRM system using NestJS and PostgreSQL to handle the sales and purchases of employees, salespersons, and customers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
