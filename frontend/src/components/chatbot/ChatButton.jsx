import { FaRobot } from "react-icons/fa";

const ChatButton = ({ openChat, isOpen }) => {
  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-28 right-6 bg-white text-black px-4 py-2 rounded-xl shadow-lg text-sm z-50 animate-bounce">
          Need help? 👋
        </div>
      )}

      <button
        onClick={openChat}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-red-600 text-white shadow-2xl flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      >
        {isOpen ? (
          <span className="text-3xl">✕</span>
        ) : (
          <>
            <FaRobot />

            <span className="absolute top-1 right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></span>
          </>
        )}
      </button>
    </>
  );
};

export default ChatButton;
