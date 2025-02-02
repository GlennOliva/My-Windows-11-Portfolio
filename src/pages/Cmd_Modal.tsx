import React, { useState } from "react";
import Draggable from "react-draggable"; // Import Draggable
import cmdIcon from "../assets/images/cmd.png";

const Cmd_Modal = ({
  setShowCmd,
  setShowNotepad,
  setShowPortfolio,
}: {
  setShowCmd: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNotepad: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [commands, setCommands] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      let newCommands = [...commands, `C:\\Users\\Glenn> ${input}`];

      switch (input.toLowerCase()) {
        case "sudo show command":
          newCommands.push("COMMANDS:");
          newCommands.push("> Type sudo portfolio to access the portfolio");
          newCommands.push("> Type sudo notepad to access the notepad");
          newCommands.push("> Type sudo linkedin to access LinkedIn");
          newCommands.push("> Type sudo fb to access Facebook");
          newCommands.push("> Type sudo github to open GitHub");
          break;

        case "sudo cmd":
          newCommands.push("Opening Command Prompt...");
          setTimeout(() => setShowCmd(true), 500);
          break;

        case "sudo notepad":
          newCommands.push("Opening Notepad...");
          setTimeout(() => setShowNotepad(true), 500);
          break;

        case "sudo portfolio":
            newCommands.push("Opening Portfolio...");
            console.log("Opening Portfolio...");
            setTimeout(() => setShowPortfolio(true), 500);
            break;

          case "sudo github":
              newCommands.push("Redirect to Github...");
              console.log("Opening Github...");
              setTimeout(()=> window.open("https://github.com/GlennOliva", "_blank") );  // Opens the link in a new tab
              break;

         case "sudo linkedin":
            newCommands.push("Redirect to LinkedIn...");
            console.log("Opening Linkedin...");
            setTimeout(()=> window.open("https://www.linkedin.com/in/glenn-oliva-a479a0253/", "_blank") );
            break;

           case "sudo fb":
            newCommands.push("Redirect to Facebook...");
            console.log("Opening Facebook...");
            setTimeout(()=> window.open("https://www.facebook.com/profile.php?id=100093027084141", "_blank") );
            break;

        case "sudo clear":
          newCommands = [];
          setTimeout(() => setCommands(newCommands), 500);
          break;

        default:
          newCommands.push(`'${input}' is not recognized as a command.`);
      }

      setCommands(newCommands);
      setInput("");
    }
  };

  return (
    <>
      {isMinimized && (
        <div
          className="fixed bottom-8 left-4 bg-[#564F4F] text-white flex items-center px-3 py-2 rounded cursor-pointer"
          onClick={() => setIsMinimized(false)}
        >
          <img src={cmdIcon} alt="cmd" className="w-4 h-4 mr-2" />
          <span className="text-sm">Command Prompt</span>
        </div>
      )}

      {!isMinimized && (
        <Draggable handle=".drag-handle">
          <div className="fixed inset-0 flex items-center justify-center">
            <div
              className={`transition-all transform ${
                isMaximized ? "w-full h-full" : "w-[500px] h-[450px]"
              } bg-[#2E2E2E] text-white rounded-lg shadow-lg border border-gray-700`}
            >
              {/* Title Bar */}
              <div className="drag-handle flex items-center justify-between bg-[#564F4F] p-2 rounded-t-lg cursor-move">
                <div className="flex items-center space-x-2">
                  <img src={cmdIcon} alt="cmd" className="w-4 h-4" />
                  <span className="text-sm">Command Prompt</span>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => setIsMinimized(true)}>🗕</button>
                  <button onClick={() => setIsMaximized(!isMaximized)}>
                    {isMaximized ? "🗗" : "🗖"}
                  </button>
                  <button onClick={() => setShowCmd(false)}>X</button>
                </div>
              </div>

              {/* Command Line Content */}
              <div className="p-4 font-mono text-sm h-[400px] overflow-y-auto">
                {commands.map((cmd, index) => (
                  <p key={index}>{cmd}</p>
                ))}

                {/* Input Line */}
                <div className="flex">
                  <p>C:\Users\Glenn&gt;</p>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="bg-transparent border-none outline-none text-white ml-2 w-full"
                    autoFocus
                  />
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Cmd_Modal;
