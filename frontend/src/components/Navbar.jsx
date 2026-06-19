import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto mt-6 px-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl px-8 py-4">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Gym Logo"
              className="w-14 h-14 rounded-full object-cover border border-red-500"
            />

            <h1 className="text-3xl font-extrabold text-white">
              Gym<span className="text-red-500">Pro</span>
            </h1>
          </Link>

          {/* Menu */}

          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <Link to="/" className="hover:text-red-500 transition">
              Home
            </Link>

            <Link to="/membership" className="hover:text-red-500 transition">
              Membership
            </Link>

            <Link to="/about" className="hover:text-red-500 transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-red-500 transition">
              Contact
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-white/40 px-6 py-2 hover:bg-white hover:text-black transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-xl bg-red-600 px-7 py-2 font-semibold hover:bg-red-700 transition"
            >
              Join Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
