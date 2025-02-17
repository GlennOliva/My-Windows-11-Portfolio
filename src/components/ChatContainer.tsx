import  { useState } from "react";
import Chatbot from "./Chatbot"; // Import Chatbot
import Up_Button from "./Up_Button"; // Import Up_Button

const ChatContainer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // Manage Chat Visibility

  return (
    <div>
      {/* Show Up Button only when chat is closed */}
      {!isChatOpen && <Up_Button />}

      {/* Pass state & setter to Chatbot */}
      <Chatbot isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
    </div>
  );
};

export default ChatContainer;
