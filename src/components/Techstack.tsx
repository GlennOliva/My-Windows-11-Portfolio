import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import tsIcon from '../assets/images/typescript.png';
import jsIcon from '../assets/images/js.png';
import reactIcon from '../assets/images/react.png';
import nodeIcon from '../assets/images/nodejs.png';
import tailwindIcon from '../assets/images/icons8-tailwind-css-512.png';
import firebaseIcon from '../assets/images/firebase.png';
import vercelIcon from '../assets/images/vercel_ico-removebg-preview.png';
import laravelIcon from '../assets/images/laravel.png';
import flutterIcon from '../assets/images/flutter.png';
import ExpressJsIcon from '../assets/images/icons8-express-js-512.png'
import FlaskIcon from '../assets/images/icons8-flask-512.png'
import TfIcon from '../assets/images/icons8-tensorflow-512.png'
import VuejsIcon from '../assets/images/icons8-vue-js-512.png'

const Techstack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const techStacks = [
    { name: 'TypeScript', image: tsIcon },
    { name: 'JavaScript', image: jsIcon },
    { name: 'React Js', image: reactIcon },
    { name: 'Node.js', image: nodeIcon },
    { name: 'Tailwind CSS', image: tailwindIcon },
    { name: 'Firebase', image: firebaseIcon },
    { name: 'Vercel', image: vercelIcon },
    { name: 'Laravel 11', image: laravelIcon },
    { name: 'Flutter', image: flutterIcon },
    { name: 'Express Js', image: ExpressJsIcon },
    { name: 'Flask', image: FlaskIcon },
    { name: 'Tensorflow', image: TfIcon },
    { name: 'Vue Js', image: VuejsIcon },
  ];

  return (
    <motion.section
      id="techstack"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-10 text-white text-center bg-[#1a1418]"
    >
      <motion.h2 
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        TECHSTACKS
      </motion.h2>

      <div className="relative flex items-center justify-center px-6 md:px-10">
        
        {/* Left Scroll Button (Hidden on Mobile) */}
        <motion.button
          className="hidden md:block absolute left-40 text-3xl px-4 bg-[#302B2B] p-2 rounded-full hover:bg-[#302B2B]  transition"
          onClick={() => scroll('left')}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          &#x2039;
        </motion.button>

        {/* Scrolling Tech Stack */}
        <motion.div
          ref={scrollRef}
          className="flex items-center overflow-x-auto space-x-6 scrollbar-hide w-full max-w-4xl p-6 md:p-10 scroll-smooth"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {techStacks.map((tech, index) => (
            <motion.div
              key={index}
              className="border border-white p-4 rounded-md w-32 md:w-40 flex flex-col items-center shrink-0"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              <img src={tech.image} alt={tech.name} className="w-16 md:w-24 h-16 md:h-24 object-contain rounded" />
              <h1 className="mt-2 text-xs md:text-sm">{tech.name}</h1>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Scroll Button (Hidden on Mobile) */}
        <motion.button
          className="hidden md:block absolute right-40 text-3xl px-4 bg-[#302B2B] p-2 rounded-full hover:bg-[#302B2B]  transition"
          onClick={() => scroll('right')}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          &#x203A;
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Techstack;
