import { motion } from "framer-motion";

import trainer1 from "../../assets/trainer.jpg";
import trainer2 from "../../assets/trainer1.jpg";

const TrainerSection = () => {
  const trainers = [
    {
      image: trainer1,
      name: "Alex Johnson",
      specialty: "Strength & Muscle Building",
      experience: "8 Years Experience",
      achievements: [
        "Certified Strength Coach",
        "100+ Body Transformations",
        "National Fitness Champion",
      ],
    },

    {
      image: trainer2,
      name: "Sarah Williams",
      specialty: "Weight Loss & Nutrition",
      experience: "6 Years Experience",
      achievements: [
        "Certified Nutrition Expert",
        "500+ Successful Programs",
        "Women's Fitness Specialist",
      ],
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet Our Expert Trainers
          </h2>

          <p className="mt-4 text-gray-400">
            Choose the right trainer according to your fitness goals.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-red-500 font-semibold">
                  {trainer.specialty}
                </p>

                <p className="mt-3 text-gray-400">{trainer.experience}</p>

                <div className="mt-6">
                  <h4 className="text-white font-semibold">Achievements</h4>

                  <ul className="mt-3 space-y-2">
                    {trainer.achievements.map((item, i) => (
                      <li key={i} className="flex gap-2 text-gray-400">
                        <span className="text-red-500">✓</span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700 transition">
                  Choose Trainer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
