import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      className="lg:w-[400px] h-full relative hidden lg:block group"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Image
        src={'/img/profile.jpg'}
        width={400}
        height={400}
        alt='profile image'
        className="rounded-full shadow-xl group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-indigo-500 transition-all duration-300"></div>
    </motion.div>
  );
}
