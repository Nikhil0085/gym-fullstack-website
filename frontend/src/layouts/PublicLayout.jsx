import Navbar from "../components/Navbar";
import Footer from "../components//Footer";
import ChatBot from "../components/chatbot/ChatBot";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />

      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default PublicLayout;
