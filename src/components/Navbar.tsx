import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#302B2B] text-white p-4 flex justify-between items-center w-full shadow-lg z-50">
      {/* Logo */}
      <h1 className="text-lg font-bold">GLENN</h1>

      {/* Hamburger Icon (Mobile) */}
      <button 
        className="md:hidden text-white focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links */}
      <ul className={`md:flex gap-4 md:static absolute top-16 left-0 w-full bg-[#302B2B] p-4 md:p-0 md:w-auto transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <li><Link to="home" spy smooth duration={200} containerId="main-content" className="block py-2 md:inline cursor-pointer hover:underline" onClick={() => setIsOpen(false)}>HOME</Link></li>
        <li><Link to="about" spy smooth duration={200} containerId="main-content" className="block py-2 md:inline cursor-pointer hover:underline" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
        <li><Link to="techstack" spy smooth duration={200} containerId="main-content" className="block py-2 md:inline cursor-pointer hover:underline" onClick={() => setIsOpen(false)}>TECHSTACKS</Link></li>
        <li><Link to="certifications" spy smooth duration={200} containerId="main-content" className="block py-2 md:inline cursor-pointer hover:underline" onClick={() => setIsOpen(false)}>CERTIFICATIONS</Link></li>
        <li><Link to="projects" spy smooth duration={200} containerId="main-content" className="block py-2 md:inline cursor-pointer hover:underline" onClick={() => setIsOpen(false)}>PROJECTS</Link></li>
        <li><Link to="contact" spy smooth duration={200} containerId="main-content" className="block py-2 md:inline cursor-pointer hover:underline" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
