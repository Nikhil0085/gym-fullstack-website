import { motion } from "framer-motion";

import beginnerImage from "../../assets/programs/beginner.jpg";
import muscleImage from "../../assets/programs/muscle.jpg";
import fatLossImage from "../../assets/programs/fatloss.jpg";
import strengthImage from "../../assets/programs/strength.jpg";

const ProgramSection = () => {
  const programs = [
    {
      image: beginnerImage,
      title: "Beginner Program",
      duration: "8 Weeks",
      description:
        "Perfect starting program for people who are new to fitness.",
      features: [
        "Basic Workout Training",
        "Fitness Assessment",
        "Trainer Guidance",
      ],
    },

    {
      image: muscleImage,
      title: "Muscle Building",
      duration: "12 Weeks",
      description:
        "Build strength and increase muscle with professional training.",
      features: [
        "Heavy Strength Training",
        "Muscle Growth Plan",
        "Progress Tracking",
      ],
    },

    {
      image: fatLossImage,
      title: "Fat Loss Program",
      duration: "10 Weeks",
      description: "Burn fat and achieve a lean and healthy body.",
      features: ["Cardio Training", "Diet Guidance", "Weight Tracking"],
    },

    {
      image: strengthImage,
      title: "Advanced Strength",
      duration: "16 Weeks",
      description: "Advanced training for athletes and experienced members.",
      features: [
        "Power Training",
        "Performance Improvement",
        "Expert Coaching",
      ],
    },
  ];

  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Fitness Programs
          </h2>

          <p className="mt-4 text-gray-400">
            Choose a program designed according to your fitness goals.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-52 w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {program.title}
                </h3>

                <p className="mt-2 text-red-500 font-semibold">
                  {program.duration}
                </p>

                <p className="mt-3 text-gray-400">{program.description}</p>

                <ul className="mt-5 space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-gray-300">
                      <span className="text-red-500">✓</span>

                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700 transition">
                  View Program
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
