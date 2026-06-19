import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaDumbbell, FaAppleAlt, FaHeartbeat, FaUsers } from "react-icons/fa";

import heroImage from "../../assets/hero-gym.jpg";

const HeroSection = () => {
  const features = [
    {
      icon: <FaDumbbell />,
      title: "Workout",
    },

    {
      icon: <FaAppleAlt />,
      title: "Nutrition",
    },

    {
      icon: <FaHeartbeat />,
      title: "Health",
    },

    {
      icon: <FaUsers />,
      title: "Community",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="gym"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2 text-red-500 font-semibold">
            #1 Fitness Management Platform
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Build Your Body.
            <br />
            <span className="text-red-500">Build Your Confidence.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            Transform your fitness journey with personalized workout plans, diet
            programs and premium gym memberships.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <Link
              to="/signup"
              className="rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 transition"
            >
              Join Now
            </Link>

            <Link
              to="/membership"
              className="rounded-xl border border-white px-8 py-3 text-white hover:bg-white hover:text-black transition"
            >
              View Plans
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 text-center"
            >
              <div className="text-3xl text-red-500 flex justify-center">
                {feature.icon}
              </div>

              <h3 className="mt-4 text-white font-semibold">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
