import { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ChatButton isOpen={open} openChat={() => setOpen(!open)} />

      {open && (
        <div className="fixed bottom-24 right-6 z-50 animate-in fade-in zoom-in duration-300">
          <ChatWindow />
        </div>
      )}
    </>
  );
};

export default ChatBot;
