import { useEffect, useRef, useState } from "react";
import { FaRobot, FaUser } from "react-icons/fa";
import { sendMessage, getChatHistory } from "../../api/chatbot.api";

const ChatWindow = () => {
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I am GymPro AI. How can I help you today?",
    },
  ]);

  const suggestions = [
    "Show membership plans",
    "Suggest muscle gain workout",
    "Give diet plan",
    "Tell me about GymPro",
  ];

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const loadHistory = async () => {
    try {
      const data = await getChatHistory();

      const oldMessages = data.chats.map((chat) => ({
        sender: chat.sender === "AI" ? "bot" : "user",
        text: chat.message,
      }));

      setMessages([
        {
          sender: "bot",
          text: "Hi 👋 I am GymPro AI. How can I help you today?",
        },
        ...oldMessages,
      ]);
    } catch (error) {
      console.log("History Error:", error);
    }
  };

  const handleSend = async (text = message) => {
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setTyping(true);

    try {
      const data = await sendMessage(text);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I am unable to respond right now.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 h-[520px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in fade-in duration-300">
      <div className="bg-red-600 text-white p-4 flex items-center gap-3">
        <div className="bg-white text-red-600 h-10 w-10 rounded-full flex items-center justify-center">
          <FaRobot />
        </div>

        <div>
          <h2 className="font-bold text-lg">GymPro AI</h2>
          <p className="text-xs text-red-100">Your fitness assistant</p>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-100 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex items-start gap-2 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className="h-8 w-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                {msg.sender === "user" ? <FaUser /> : <FaRobot />}
              </div>

              <div
                className={`${msg.sender === "user" ? "bg-red-600 text-white" : "bg-white text-black"} p-3 rounded-2xl shadow text-sm`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaRobot />
            <span>GymPro AI is typing...</span>
          </div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      <div className="px-3 pb-2 flex gap-2 overflow-x-auto">
        {suggestions.map((item, index) => (
          <button
            key={index}
            onClick={() => handleSend(item)}
            className="bg-gray-200 text-xs px-3 py-2 rounded-full whitespace-nowrap hover:bg-red-600 hover:text-white transition"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex p-3 border-t bg-white">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask about workout, diet..."
          className="flex-1 border rounded-l-xl px-4 py-2 outline-none text-black"
        />

        <button
          onClick={() => handleSend()}
          className="bg-red-600 text-white px-5 rounded-r-xl hover:bg-red-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
