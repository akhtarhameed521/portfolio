import ProfileImage from '@/components/layout/ProfileImage';
import SectionHeader from '@/components/layout/SectionHeader';
import React from 'react';

export default function Page() {
  return (
    <div className="flex gap-10 mt-5 font-serif h-[80vh] overflow-auto bg-slate-100 pr-5 ">
     
      <div className="flex-shrink-0">
        <ProfileImage />
      </div>

      {/* Right experience Section */}
      <div className="w-full lg:w-3/4 mt-5  ">
        <SectionHeader title="Experience" />

        {/* experience details */}
        <div className="mt-8 space-y-8 pb-4 ">
          {/* experience card */}
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 ">
            <h3 className="text-xl font-semibold text-gray-800">
              Digitech Infra Associates - MERN Developer
            </h3>
            <p className="text-sm text-gray-500 mt-1">19 March 2024 – Present</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                Worked on an e-commerce website, developing the vendor dashboard and admin dashboard using HTML, CSS, and JavaScript.
              </li>
              <li>
                Developed interactive features that improved user engagement and streamlined vendor and admin tasks.
              </li>
              <li>
                Architected a full-stack customer review website from scratch, utilizing the MERN stack (MongoDB, Express, React, Node.js).
              </li>
              <li>
                Developed a comprehensive CRM system that streamlined sales and purchase processes for over 10k employees and 100k customers.
              </li>
              <li>
                Enhanced customer interaction tracking, resulting in a 30% increase in customer satisfaction scores.
              </li>
            </ul>
          </div>

          {/* professional projects section */}
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">
              Professional Projects
            </h3>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-700">Bachat Mart – E-commerce Website</h4>
              <p className="text-gray-600 mt-1">
                Collaborated with a Laravel developer to integrate the frontend built with HTML, CSS, and JS, and the backend developed with Laravel, ensuring seamless communication and data flow.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-700">Apna Connection – Social Networking Platform</h4>
              <p className="text-gray-600 mt-1">
                Developed using the MERN stack, Apna Connection is a social networking platform designed to connect individuals within a specific community or interest group.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-700">Pakistan Cables CRM – Customer Relationship Management</h4>
              <p className="text-gray-600 mt-1">
                Created a CRM system using NestJS and PostgreSQL to handle the sales and purchases of employees, salespersons, and customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
