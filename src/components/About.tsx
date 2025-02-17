import { motion } from "framer-motion";
import aboutImage from '../assets/images/about_bg_orig.png';
import githubIcon from '../assets/images/github_icon.png';
import linkedinIcon from '../assets/images/linkedIn_icon.png';
import facebookIcon from '../assets/images/fb_icon.png';

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 50 }} // Start hidden & slightly down
      whileInView={{ opacity: 1, y: 0 }} // Fade in & move up when in view
      viewport={{ once: true }} // Animates only once when scrolled into view
      transition={{ duration: 1 }} // Smooth transition
      className="text-white py-16 px-6 flex items-center justify-center "
    >
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-10">

     

        {/* Text Section */}
        <motion.div 
          className="flex-1 text-justify md:text-left"
          initial={{ opacity: 0, x: -50 }} // Slide in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }} // Delay for stagger effect
        >
          <h2 className="text-2xl md:text-3xl font-bold">ABOUT ME</h2>
          <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.
          </p>

          {/* Social Icons */}
          <motion.div 
            className="mt-6 flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
       <button
  className="border p-2 rounded bg-gray-800 hover:bg-gray-700 transition"
  onClick={() => window.open("https://github.com/GlennOliva", "_blank")}
>
  <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
</button>

<button
  className="border p-2 rounded bg-gray-800 hover:bg-gray-700 transition"
  onClick={() => window.open("https://www.linkedin.com/in/glenn-oliva-a479a0253/", "_blank")}
>
  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
</button>

<button
  className="border p-2 rounded bg-gray-800 hover:bg-gray-700 transition"
  onClick={() => window.open("https://www.facebook.com/profile.php?id=100093027084141", "_blank")}
>
  <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
</button>

          </motion.div>
        </motion.div>

           {/* Image Section (Stacks on mobile) */}
           <motion.div 
          className="flex-shrink-0 w-full md:w-auto flex justify-center"
          initial={{ opacity: 0, x: 50 }} // Slide in from right
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src={aboutImage} alt="About Me" className="w-60 md:w-80 mx-auto" />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;
