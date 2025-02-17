import React from 'react';
import { motion } from "framer-motion";
import bg from '../assets/images/cartoon-bg-png.png';
import cv from '../assets/images/Resume.pdf'

const Hero = () => {
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0, y: 50 }} // Start hidden & slightly down
      animate={{ opacity: 1, y: 0 }} // Fade in & move up
      transition={{ duration: 1 }} // Smooth transition
      className="bg-[#1a1418] text-white flex items-center justify-center py-16 px-6"
    >
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-10">
        
        {/* Avatar Image (Stacks on mobile) */}
        <div className="flex-shrink-0 w-full md:w-auto text-center">
          <img src={bg} alt="Avatar" className="w-60 md:w-80 mx-auto" />
        </div>

        {/* Text Content */}
        <div className="text-justify md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">Hi, I'm Glenn</h2>
          <h3 className="text-lg md:text-2xl text-gray-400 font-semibold mt-2">FULL STACK WEB DEVELOPER</h3>
          <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.
          </p>

      {/* Download CV Button */}
<a 
  href={cv}
  download="Oliva_cv.pdf" 
  className="mt-6 px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition inline-block"
>
  DOWNLOAD CV
</a>

        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
