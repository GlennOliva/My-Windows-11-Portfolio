import React, { useState } from "react";
import Draggable from "react-draggable";
import user from "../assets/images/Portoflio_icon.png";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Techstack from "../components/Techstack";
import Project from "../components/Project";
import Certification from "../components/Certification";
import Contact from "../components/Contact";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Up_Button from "../components/Up_Button";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 }
};

const Portfolio_Modal = ({ setShowPortfolio }: { setShowPortfolio: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // Add this state
  const [successMessage, setSuccessMessage] = useState("");
  return (
    <>
   {successMessage && (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="absolute top-10 right-8 bg-green-800 text-white py-2 px-4 rounded-md shadow-lg z-50"
  >
    {successMessage}
  </motion.div>
)}




      {/* Minimized Button */}
      {isMinimized && (
        <div
          className="fixed bottom-8 left-4 sm:left-8 md:left-12 bg-[#564F4F] text-white flex items-center px-3 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out transform scale-90"
          onClick={() => setIsMinimized(false)}
        >
          <img src={user} alt="cmd" className="w-4 h-4 mr-2" />
          <span className="text-sm">My Portfolio</span>
        </div>
      )}

      {/* Draggable Portfolio Modal */}
      {!isMinimized && (
        <Draggable handle=".drag-handle">
          <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4" onClick={() => setShowPortfolio(false)}>
            <div
              className={`relative transition-all duration-300 ease-in-out ${
                isMaximized ? "w-full h-full" : "w-[90%] sm:w-[80%] md:w-[600px] lg:w-[700px] h-[90%] sm:h-[80%] md:h-[500px]"
              } bg-[#282828] rounded-lg shadow-lg overflow-hidden`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header (Drag Handle & Controls) */}
              <div className="drag-handle flex items-center justify-between bg-[#1e1e1e] text-white p-2 cursor-move sticky top-0 z-20">
                <div className="flex items-center space-x-2">
                  <img src={user} alt="cmd" className="w-4 h-4" />
                  <span className="text-sm">My Portfolio</span>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => setIsMinimized(true)} className="text-white">🗕</button>
                  <button onClick={() => setIsMaximized(!isMaximized)} className="text-white">
                    {isMaximized ? "🗗" : "🗖"}
                  </button>
                  <button onClick={() => setShowPortfolio(false)} className="text-white">X</button>
                </div>
              </div>

              {/* Main Content */}
              <div id="main-content" className="p-4 overflow-y-auto h-full bg-[#302B2B] relative scroll-smooth">
                <Navbar />
                <motion.section id="home" {...fadeIn}><Hero /></motion.section>
                <motion.section id="about" {...fadeIn}><About /></motion.section>
                <motion.section id="techstack" {...fadeIn}><Techstack /></motion.section>
                <motion.section id="projects" {...fadeIn}><Project /></motion.section>
                <motion.section id="certifications" {...fadeIn}><Certification /></motion.section>
                <motion.section id="contact" {...fadeIn}> <Contact setSuccessMessage={setSuccessMessage} /></motion.section>
                <Footer />
            {/* Chatbot & Up Button */}
<div className="fixed right-6 bottom-6 sm:right-12 sm:bottom-12">
  <Chatbot isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
  {!isChatOpen && <Up_Button />}
</div>

              </div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Portfolio_Modal;
