import  { useRef } from 'react';
import { motion } from 'framer-motion';
import cert1 from '../assets/images/cert1-java.jpg';
import cert2 from '../assets/images/cert2-python.jpg';
import cert3 from '../assets/images/cert3-sql.jpg';
import cert4 from '../assets/images/cert4-php.jpg';
import cert5 from '../assets/images/cert5-itspecialist.jpg';
import cert6 from '../assets/images/cert6-freecode.jpg';
import cert7 from '../assets/images/cert7-webdevefundamentals.jpg';
import cert8 from '../assets/images/cert8-cybber.jpg';
import cert9 from '../assets/images/cert9-network.jpg';

const Certification = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const certifications = [
    { title: 'SOLOLEARN JAVA', image: cert1 },
    { title: 'SOLOLEARN PYTHON CORE', image: cert2 },
    { title: 'SOLOLEARN SQL', image: cert3 },
    { title: 'SOLOLEARN PHP', image: cert4 },
    { title: 'INFORMATION TECHNOLOGY SPECIALIST IN HTML & CSS', image: cert5 },
    { title: 'FREECODECAMP RESPONSIVE WEB DESIGN', image: cert6 },
    { title: 'SOLOLEARN WEBDEV FUNDAMENTALS', image: cert7 },
    { title: 'INFORMATION TECHNOLOGY SPECIALIST IN CYBER SECURITY', image: cert8 },
    { title: 'INFORMATION TECHNOLOGY SPECIALIST IN NETWORK SECURITY', image: cert9 },
  ];

  return (
    <motion.section
      id="certifications"
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
        CERTIFICATIONS
      </motion.h2>

      <div className="flex items-center justify-center px-4 md:px-10 relative">
         {/* Left Scroll Button (Hidden on Mobile) */}
            <motion.button
              className="hidden md:block absolute left-40 text-3xl px-4 bg-[#302B2B] p-2 rounded-full hover:bg-[#302B2B]  transition"
              onClick={() => scroll('left')}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              &#x2039;
            </motion.button>

        {/* Scrollable Certifications List */}
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-auto space-x-6 md:space-x-10 scrollbar-hide w-full max-w-5xl p-4 md:p-10"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-white p-3 md:p-4 rounded-md flex flex-col items-center shrink-0 mb-6 md:mb-10 w-40 sm:w-56"
            >
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
              <h1 className="mt-2 text-xs md:text-sm text-center">{cert.title}</h1>
            </motion.div>
          ))}
        </div>

        {/* Right Scroll Button (Hidden on Mobile) */}
             <motion.button
               className="hidden md:block absolute right-40 text-3xl px-4 bg-[#302B2B] p-2 rounded-full hover:bg-[#302B2B] transition"
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

export default Certification;
