

// Importing images
import locationIcon from '../assets/images/map.png';
import whatsappIcon from '../assets/images/whatsapp.png';
import telegramIcon from '../assets/images/telegram.png';
import emailIcon from '../assets/images/gmail.png';
import facebookIcon from '../assets/images/fb_icon.png';
import linkedinIcon from '../assets/images/linkedIn_icon.png';
import githubIcon from '../assets/images/github_icon.png';

const Footer = () => {
  return (
    <footer className="bg-[#1a1418] text-white py-8 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left w-full mb-25">
      {/* Contacts Section */}
      <div className="border border-white p-4 w-full md:w-1/3 flex flex-col items-center md:items-start">
        <h2 className="text-lg font-semibold mb-3">CONTACTS</h2>
        <div className="flex items-center gap-2">
          <img src={locationIcon} alt="Location" className="w-6 h-6" />
          <span>Davao City, Philippines</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
          <span>09983754992</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img src={telegramIcon} alt="Telegram" className="w-6 h-6" />
          <span>09983754992</span>
        </div>
      </div>

      {/* Developer Name */}
      <h2 className="text-lg font-semibold my-6 md:my-0">DEVELOPED: GLENN</h2>

      {/* Socials Section */}
      <div className="border border-white p-4 w-full md:w-1/3 flex flex-col items-center md:items-start">
        <h2 className="text-lg font-semibold mb-3">SOCIALS</h2>
        <div className="flex items-center gap-2">
          <img src={emailIcon} alt="Email" className="w-6 h-6" />
          <span>glennoliva122@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
          <a href="https://www.facebook.com/profile.php?id=100093027084141" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Facebook
          </a>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          <a href="https://www.linkedin.com/in/glenn-oliva-a479a0253/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          <a href="https://github.com/GlennOliva" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
