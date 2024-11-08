"use client";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea"; 
import { Button } from "@/components/ui/button"; 
import { Mail, Phone, MapPin } from "lucide-react";
import ProfileImage from "@/components/layout/ProfileImage";
import SectionHeader from "@/components/layout/SectionHeader";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex gap-10 mt-5 font-serif h-[80vh] overflow-y-auto bg-slate-100 p-8 rounded-lg shadow-lg">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <ProfileImage />
      </motion.div>

      <motion.div
        className="w-full lg:w-3/4 mt-5 pr-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <SectionHeader title="Contact" />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have any questions or need help? Fill out the form below, and we’ll get back to you as soon as possible!
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
              <Input id="name" type="text" placeholder="Enter your name" className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
              <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
            <Textarea id="message" rows={4} placeholder="Type your message..." className="mt-1" />
          </div>
          <div className="text-center">
            <Button type="submit" className="w-full text-white">Send Message</Button>
          </div>
        </form>

        <div className="mt-10 space-y-4 pb-4">
          <h2 className="text-xl font-semibold text-gray-800">Contact Info</h2>
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-gray-600" />
            <p className="text-gray-700">akhtar.hameed521@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-gray-600" />
            <p className="text-gray-700">+1 (234) 567-890</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-gray-600" />
            <p className="text-gray-700">1234 Street, City, Country</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
