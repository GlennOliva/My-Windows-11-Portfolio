
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import project1 from '../assets/images/valentines_booth_project1.png';
import project2 from '../assets/images/davaopetoworld_project2.png';
import project3 from '../assets/images/windows11.png'

const projects = [
  {
    title: "WINDOW'S 11 THEME PORTFOLIO",
    description:
      "A Windows 11-themed portfolio that mimics the look and feel of the Windows OS, offering a sleek and modern UI for showcasing projects and skills.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Draggable.js", "Email js ", "Gemini Api", "Snackbar MUI"],
    image: project3,
    repoLink: "https://github.com/GlennOliva/My-Windows-11-Portfolio"
  },
  {
    title: "VALENTINE'S BOOTH",
    description:
      "A digital booth that allows users to interact with their partners in a fun and engaging way, enhancing the Valentine's experience with personalized virtual gifts and messages.",
    techStack: ["React", "Htmlcanvas", "Firebase", "Tailwind CSS"],
    image: project1,
    repoLink: "https://github.com/GlennOliva/Valentine-s-Booth"
  },
  {
    title: "FISHCOM: A SOCIAL E-COMMERCE WITH FISH IDENTIFICATION USING TF.JS",
    description:
      "A machine-learning-based application designed for Betta and ornamental fish enthusiasts, enabling users to identify fish species, engage in social discussions, and make online purchases.",
    techStack: ["React", "TensorFlow.js", "Node.js", "Express", "MySql", "Tailwind Css", "Flask", "Vercel"],
    image: project2,
    repoLink: "https://github.com/GlennOliva/Capstone_DavaoPetworld"
  },
];

const Project = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-10 text-white px-6 md:px-10"
    >
      <motion.h2 
        className="text-2xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        PROJECTS
      </motion.h2>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-6`}
          >
            {/* Project Image */}
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div 
              className="w-full md:w-1/2 p-4 md:p-6 text-center md:text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
              <p className="text-sm md:text-base mt-2 text-gray-300">{project.description}</p>
              
              {/* Tech Stack */}
              <p className="text-xs md:text-sm mt-2 text-gray-400">Tech Stack: {project.techStack.join(', ')}</p>
              
              <motion.a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center border border-white py-2 px-4 rounded-md hover:bg-gray-800 transition w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={20} />
                <span className="ml-2">VIEW REPOSITORY</span>
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Project;
