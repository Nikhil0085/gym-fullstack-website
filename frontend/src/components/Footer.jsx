import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white mt-20"
    >
      <div
        className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10"
      >
        <div>
          <h2 className="text-2xl font-bold">GymPro</h2>

          <p className="text-gray-400 mt-4">
            Professional fitness management platform.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Home</li>
            <li>Membership</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Services</h3>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Workout Plans</li>
            <li>Diet Plans</li>
            <li>Personal Training</li>
            <li>Membership</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>

          <div className="flex gap-5 mt-5 text-2xl">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div
        className="border-t border-gray-700 text-center py-5 text-gray-400" >
        © 2026 GymPro. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
