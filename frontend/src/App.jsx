
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import ChatBot from "./components/chatbot/ChatBot";
const App = () => {
  return (
    <div>
      <AppRoutes />
      <ChatBot />
    </div>
  );
};

export default App;
