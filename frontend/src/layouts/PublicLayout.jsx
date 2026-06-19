import Navbar from "../components/Navbar";
import Footer from "../components//Footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />

      <main className="flex-1 pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
