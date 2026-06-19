import { motion } from "framer-motion";

import workoutImage from "../../assets/workout.jpg";
import dietImage from "../../assets/diet.webp";
import membershipImage from "../../assets/membership.jpg";

const ServicesSection = () => {
  const services = [
    {
      image: workoutImage,
      title: "Workout Programs",
      description:
        "Professional workout plans designed according to your fitness goals.",
    },

    {
      image: dietImage,
      title: "Personalized Diet",
      description:
        "Nutrition plans that help you achieve your body transformation goals.",
    },

    {
      image: membershipImage,
      title: "Premium Membership",
      description:
        "Manage your gym membership and access premium fitness features.",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Everything You Need For Fitness
          </h2>

          <p className="mt-4 text-gray-400">
            Complete fitness management platform built for your success.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-400">{service.description}</p>

                <button className="mt-5 text-red-500 font-semibold hover:text-red-400">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
