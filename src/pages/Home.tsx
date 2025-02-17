// Home.tsx
import  { useEffect, useState } from "react";
import github from "../assets/images/github_icon.png";
import notepad from "../assets/images/notepad.png";
import cmd from "../assets/images/cmd.png";
import portfolio from "../assets/images/Portoflio_icon.png";
import linkedin from "../assets/images/linkedIn_icon.png";
import fb from "../assets/images/fb_icon.png";
import battery from "../assets/images/full-battery.png";
import windows from "../assets/images/windows_icon.png";
import user from "../assets/images/Portoflio_icon.png";
import bg from "../assets/images/zenitsu_hd.jpg";
import Cmd_Modal from "./Cmd_Modal";
import Notepad_Modal from "./Notepad_Modal";
import Portfolio_Modal from "./Portfolio_Modal";

const Home = () => {
  const [showCmd, setShowCmd] = useState(false);
  const [showNotepad, setShowNotepad] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      
      // Determine AM or PM
      const period = hours >= 12 ? "PM" : "AM";
      
      // Convert hours to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const formattedHours = hours.toString().padStart(2, '0');
      
      // Set the time with AM/PM
      setCurrentTime(`${formattedHours}:${minutes}:${seconds} ${period}`);
    };
  
    const timer = setInterval(updateClock, 1000);
  
    // Call updateClock immediately to avoid initial delay
    updateClock();
  
    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);
  

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Desktop Icons */}
      <div className="absolute top-10 left-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {[{ name: "CMD", img: cmd }, { name: "GITHUB", img: github }, { name: "NOTEPAD", img: notepad }, { name: "PORTFOLIO", img: portfolio }, { name: "LINKEDIN", img: linkedin }, { name: "FACEBOOK", img: fb }].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white cursor-pointer"
            onClick={() => {
              if (item.name === "CMD") {
                setShowCmd(true);
              } else if (item.name === "NOTEPAD") {
                setShowNotepad(true);
              }
              else if (item.name === "GITHUB") {
                window.open("https://github.com/GlennOliva", "_blank");  // Opens the link in a new tab
              }
              else if(item.name === "LINKEDIN")
              {
                window.open("https://www.linkedin.com/in/glenn-oliva-a479a0253/", "_blank");
              }
              else if(item.name === "FACEBOOK")
                {
                  window.open("https://www.facebook.com/profile.php?id=100093027084141", "_blank");
                }
                else if(item.name === "PORTFOLIO")
                  {
                    setShowPortfolio(true);
                  }
            }}
          >
            <img src={item.img} alt={item.name} className="w-12 h-12" />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Show CMD Modal if state is true */}
      {showCmd && <Cmd_Modal setShowCmd={setShowCmd} setShowNotepad={setShowNotepad} setShowPortfolio={setShowPortfolio} />}
      
      {/* Show Notepad Modal if state is true */}
      {showNotepad && <Notepad_Modal setShowNotepad={setShowNotepad} />}

         {/* Show Portfolio Modal if state is true */}
         {showPortfolio && <Portfolio_Modal setShowPortfolio={setShowPortfolio} />}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] bg-[#E3F1F8] flex items-center justify-between text-black">
        {/* Centered icons */}
        <div className="flex gap-6 items-center justify-center mx-auto pl-4 sm:pl-8 md:pl-20">
  <img
    src={windows}
    alt="Windows"
    className="w-8 h-8"
    onClick={() => {
      // You can add specific behavior for Windows icon here if needed
    }}
  />
  <img
    src={cmd}
    alt="Cmd"
    className="w-8 h-8"
    onClick={() => {
      setShowCmd(true);
    }}
  />
  <img
    src={user}
    alt="User"
    className="w-8 h-8"
    onClick={() => {
      setShowPortfolio(true);
    }}
  />
  <img
    src={notepad}
    alt="Notepad"
    className="w-8 h-8"
    onClick={() => {
      setShowNotepad(true);
    }}
  />
  <img
    src={github}
    alt="GitHub"
    className="w-8 h-8"
    onClick={() => {
      window.open("https://github.com/GlennOliva", "_blank");  // Opens GitHub in a new tab
    }}
  />
</div>


        {/* Battery and Time on the right */}
        <div className="flex gap-2 items-center justify-center pr-1 sm:flex-row sm:gap-2 sm:items-center">
          <img src={battery} alt="Battery" className="w-8 h-8 hidden sm:block" />
          <span className="text-sm p-4">{currentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Home; // Ensure this is a default export
