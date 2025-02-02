import React, { useState } from "react";
import Draggable from "react-draggable";
import notepadIcon from "../assets/images/notepad.png";

const NotepadModal = ({ setShowNotepad }: { setShowNotepad: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {isMinimized && (
        <div
          className="fixed bottom-8 left-45 bg-[#564F4F] text-white flex items-center px-3 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out transform scale-90 "
          onClick={() => setIsMinimized(false)}
        >
          <img src={notepadIcon} alt="cmd" className="w-4 h-4 mr-2" />
          <span className="text-sm">Notepad</span>
        </div>
      )}

      {!isMinimized && (
        <Draggable handle=".drag-handle">
          <div className="fixed inset-0 flex items-center justify-center" onClick={() => setShowNotepad(false)}>
            <div
              className={`relative transition-all duration-300 ease-in-out ${
                isMaximized ? "w-full h-full" : "w-[500px] h-[450px]"
              } bg-[#282828] rounded-lg shadow-lg overflow-hidden`}
              onClick={(e) => e.stopPropagation()}
            >
   {/* Title Bar */}
<div className="drag-handle flex items-center justify-between bg-[#1e1e1e] text-white p-2 cursor-move sticky top-0 z-20">
  <div className="flex items-center space-x-2">
    <img src={notepadIcon} alt="cmd" className="w-4 h-4" />
    <span className="text-sm">Untitled</span>
  </div>
  <div className="flex space-x-2">
    <button onClick={() => setIsMinimized(true)} className="text-white">🗕</button>
    <button onClick={() => setIsMaximized(!isMaximized)} className="text-white">
      {isMaximized ? "🗗" : "🗖"}
    </button>
    <button onClick={() => setShowNotepad(false)} className="text-white">X</button>
  </div>
</div>

{/* Menu Bar */}
<div className="flex bg-[#252526] text-white text-sm px-4 py-1 space-x-4 cursor-move sticky top-[40px] z-10">
  <span className="cursor-pointer hover:bg-gray-700 px-2 py-1 rounded">File</span>
  <span className="cursor-pointer hover:bg-gray-700 px-2 py-1 rounded">Edit</span>
  <span className="cursor-pointer hover:bg-gray-700 px-2 py-1 rounded">View</span>
</div>


              {/* Notepad Content */}
              <textarea
                className="w-full h-full bg-[#1e1e1e] text-white text-sm font-mono p-4 outline-none border-none resize-none"
                placeholder="Start typing..."
              />
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default NotepadModal;