import React, { useState } from 'react';
import Draggable from 'react-draggable';
import user from '../assets/images/Portoflio_icon.png';

const Portfolio_Modal = ({ setShowPortfolio }: { setShowPortfolio: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Minimized view */}
      {isMinimized && (
        <div
          className="fixed bottom-8 left-69 bg-[#564F4F] text-white flex items-center px-3 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out transform scale-90 "
          onClick={() => setIsMinimized(false)}
        >
          <img src={user} alt="cmd" className="w-4 h-4 mr-2" />
          <span className="text-sm">My Portfolio</span>
        </div>
      )}

      {/* Full view of the modal */}
      {!isMinimized && (
        <Draggable handle=".drag-handle">
          <div className="fixed inset-0 flex items-center justify-center" onClick={() => setShowPortfolio(false)}>
            <div
              className={`relative transition-all duration-300 ease-in-out ${
                isMaximized ? 'w-full h-full' : 'w-[500px] h-[450px]'
              } bg-[#282828] rounded-lg shadow-lg overflow-hidden`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title Bar */}
              <div className="drag-handle flex items-center justify-between bg-[#1e1e1e] text-white p-2 cursor-move sticky top-0 z-20">
                <div className="flex items-center space-x-2">
                  <img src={user} alt="cmd" className="w-4 h-4" />
                  <span className="text-sm">My Portfolio</span>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => setIsMinimized(true)} className="text-white">
                    🗕
                  </button>
                  <button onClick={() => setIsMaximized(!isMaximized)} className="text-white">
                    {isMaximized ? '🗗' : '🗖'}
                  </button>
                  <button onClick={() => setShowPortfolio(false)} className="text-white">
                    X
                  </button>
                </div>
              </div>

              {/* Portfolio Content */}
              <div className="p-4">
                <h2 className="text-2xl text-white mb-4">Welcome to My Portfolio</h2>
                <p className="text-white mb-2">
                Under Development!
                </p>

               
              </div>

            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Portfolio_Modal;
