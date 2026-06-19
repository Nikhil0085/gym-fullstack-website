import { motion } from "framer-motion";

import { FaUsers, FaDumbbell, FaAppleAlt, FaHeadset } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: "10K+",
      title: "Active Members",
    },

    {
      icon: <FaDumbbell />,
      number: "100+",
      title: "Workout Plans",
    },

    {
      icon: <FaAppleAlt />,
      number: "50+",
      title: "Diet Programs",
    },

    {
      icon: <FaHeadset />,
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl text-white">
                {item.icon}
              </div>

              <h2 className="mt-5 text-4xl font-bold text-white">
                {item.number}
              </h2>

              <p className="mt-2 text-gray-400">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
