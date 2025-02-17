import React from "react";
import Draggable from "react-draggable";
import { FaPaperPlane, FaMinus, FaTimes } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Gemini API
import avatar from "../assets/images/chatbot.png";
import user from "../assets/images/boy.png";

type Message = {
  text: string;
  isUser: boolean;
};

type ChatbotProps = {
  isChatOpen: boolean;
  setIsChatOpen: (value: boolean) => void;
};

const Chatbot: React.FC<ChatbotProps> = ({ isChatOpen, setIsChatOpen }) => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");

  // Initialize Gemini API
  const API_KEY = "AIzaSyDNg6Dp4B_c2jhCuLbBEZ4AIcmuZ8X5S0c"; // 🔴 Replace with your actual API Key
  const genAI = new GoogleGenerativeAI(API_KEY);
  const personalInfo: { [key: string]: string } = {
    // English
    "where does glenn live": "Glenn lives in the Philippines.",
    "how old is glenn": "Glenn is 22 years old.",
    "glenn's experience with react js": "Glenn has 2 years of experience in React.js.",
    "glenn's experience with node.js, express, mysql, and flask":
      "Glenn has worked extensively with Node.js, Express, MySQL, and Flask for backend development.",
    "glenn's experience in web development with agile methodology":
      "Glenn has 2 years of experience in Agile methodology, collaborating with cross-functional teams.",
    "glenn's experience in deploying products":
      "Glenn has deployed multiple applications to production using cloud services like AWS, Vercel, and Netlify.",
    "what tech stack does glenn use":
      "Glenn works with React.js, Next.js, Node.js, Express, MySQL, PostgreSQL, Flask, and Docker.",
    "what is glenn email": "You can reach Glenn at glennoliva122@gmail.com.",
  
    // Tagalog
    "saan nakatira si glenn": "Si Glenn ay nakatira sa Pilipinas.",
    "ilang taon na si glenn": "Si Glenn ay 22 taong gulang.",
    "karanasan ni glenn sa react js": "May 2 taon na karanasan si Glenn sa React.js.",
    "karanasan ni glenn sa node.js, express, mysql, at flask":
      "Malawak ang karanasan ni Glenn sa Node.js, Express, MySQL, at Flask para sa backend development.",
    "karanasan ni glenn sa web development gamit ang agile methodology":
      "May 2 taon na karanasan si Glenn sa Agile methodology at pakikipagtulungan sa iba't ibang team.",
    "karanasan ni glenn sa pag-deploy ng produkto":
      "Nakapag-deploy na si Glenn ng maraming applications gamit ang cloud services tulad ng AWS, Vercel, at Netlify.",
    "anong tech stack ang ginagamit ni glenn":
      "Gumagamit si Glenn ng React.js, Next.js, Node.js, Express, MySQL, PostgreSQL, Flask, at Docker.",
    "ano ang email ni glenn": "Maaari mong kontakin si Glenn sa glennoliva122@gmail.com.",
  
    // Bisaya
    "asa nagpuyo si glenn": "Si Glenn nagpuyo sa Pilipinas.",
    "pila na ang edad ni glenn": "Si Glenn 22 ka tuig ang edad.",
    "kasinatian ni glenn sa react js": "Si Glenn adunay 2 ka tuig nga kasinatian sa React.js.",
    "kasinatian ni glenn sa node.js, express, mysql, ug flask":
      "Daghan ug kasinatian si Glenn sa Node.js, Express, MySQL, ug Flask alang sa backend development.",
    "kasinatian ni glenn sa web development gamit ang agile methodology":
      "Si Glenn adunay 2 ka tuig nga kasinatian sa Agile methodology ug pagtinabangay sa laing mga team.",
    "kasinatian ni glenn sa pag-deploy og produkto":
      "Nakapag-deploy na si Glenn ug daghang mga applications gamit ang cloud services sama sa AWS, Vercel, ug Netlify.",
    "unsa nga tech stack ang gigamit ni glenn":
      "Si Glenn naggamit sa React.js, Next.js, Node.js, Express, MySQL, PostgreSQL, Flask, ug Docker.",
    "unsa ang email ni glenn": "Pwede nimo kontakon si Glenn sa glennoliva122@gmail.com.",
  };
  
  
  // Function to calculate string similarity (Levenshtein Distance)
  const getSimilarity = (str1: string, str2: string) => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const longerLength = longer.length;
  
    if (longerLength === 0) return 1.0;
  
    let costs = Array(shorter.length + 1).fill(0).map((_, i) => i);
    let newCosts = [...costs];
  
    for (let i = 1; i <= longer.length; i++) {
      newCosts[0] = i;
      for (let j = 1; j <= shorter.length; j++) {
        newCosts[j] = Math.min(
          costs[j] + 1,
          newCosts[j - 1] + 1,
          costs[j - 1] + (longer[i - 1] === shorter[j - 1] ? 0 : 1)
        );
      }
      costs = [...newCosts];
    }
  
    return (longerLength - costs[shorter.length]) / longerLength;

  };
  
  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages
  
    const userMessage: Message = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]); // Add user message to chat
    setInput(""); // Clear input field
  
    const botResponse = await getResponse(input); // Get bot's response
  
    const botMessage: Message = { text: botResponse, isUser: false };
    setMessages((prev) => [...prev, botMessage]); // Add bot response to chat
  };

  
  const getResponse = async (message: string): Promise<string> => {
    const lowerMessage = message.toLowerCase();
  
    // Check if the message contains "Glenn"
    if (lowerMessage.includes("glenn")) {
      let bestMatch = "";
      let highestSimilarity = 0;
  
      for (const key in personalInfo) {
        const similarity = getSimilarity(lowerMessage, key);
        if (similarity > highestSimilarity) {
          highestSimilarity = similarity;
          bestMatch = key;
        }
      }
  
      // If similarity is high enough, return predefined response
      if (highestSimilarity > 0.6) {
        return personalInfo[bestMatch];
      }
    }
  
    return await getGeminiResponse(message); // Call Gemini AI if no match is found
  };
  

  // Call Gemini API
  const getGeminiResponse = async (message: string): Promise<string> => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(message);
      const response = await result.response;
      return response.text() || "I'm sorry, I couldn't understand that.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm currently facing some issues. Please try again later.";
    }
  };

  return (
    <div className="fixed bottom-13 right-12">
      {!isChatOpen && (
        <button
          className="border border-gray-400 px-3 py-3 text-sm hover:bg-[#302B2B] transition text-white rounded-md"
          onClick={() => setIsChatOpen(true)}
        >
          CHAT WITH GLENN
        </button>
      )}

      {isChatOpen && (
        <Draggable handle=".chat-header">
          <div className="fixed bottom-10 right-10 w-[350px] bg-[#564F4F] text-white rounded-lg shadow-lg overflow-hidden">
            <div className="chat-header flex items-center justify-between bg-[#3E3A3A] p-3 cursor-move">
              <div className="flex items-center">
                <img src={avatar} alt="Glenn Angelo Oliva" className="w-8 h-8 rounded-full mr-2" />
                <span className="font-semibold">Chat with Glenn</span>
              </div>
              <div>
                <button className="mr-2" onClick={() => setIsChatOpen(false)}>
                  <FaMinus />
                </button>
                <button onClick={() => setIsChatOpen(false)}>
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-2 h-90 overflow-y-auto bg-[#302B2B]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-center ${msg.isUser ? "justify-end" : "justify-start"} mb-6`}
                >
                  {!msg.isUser && <img src={avatar} alt="Bot Avatar" className="w-8 h-8 rounded-full mr-2" />}
                  <div className="bg-gray-700 text-white p-2 rounded-md max-w-[70%]">{msg.text}</div>
                  {msg.isUser && <img src={user} alt="User Avatar" className="w-8 h-8 rounded-full ml-1" />}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex items-center border-t border-gray-600 p-2 bg-white">
              <input
                type="text"
                placeholder="Type Message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 text-black border-none outline-none"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage} className="text-black px-3">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Chatbot;
