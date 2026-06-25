import trainer1 from "../../assets/images/trainr-1.jpg";
import trainer2 from "../../assets/images/trainr-2.jpg";
import trainer3 from "../../assets/images/trainr-3.jpg";
import gymHero from "../../assets/images/gym-hero.jpg";

const About = () => {
  const trainers = [
    {
      name: "Alex Johnson",
      role: "Strength Coach",
      image: trainer1,
    },
    {
      name: "David Smith",
      role: "Fitness Trainer",
      image: trainer2,
    },
    {
      name: "Sarah Williams",
      role: "Nutrition Expert",
      image: trainer3,
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}

      <section
        className="h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.8)),url(${gymHero})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-6xl font-bold">
            Build Your <span className="text-red-600">Best Version</span>
          </h1>

          <p className="text-gray-300 text-xl mt-6 max-w-2xl">
            We help people transform their body and lifestyle through expert
            training, modern equipment and personalized fitness programs.
          </p>
        </div>
      </section>

      {/* About Section */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center">About GymPro</h2>

        <p className="text-gray-400 text-center mt-6 max-w-3xl mx-auto">
          GymPro is a premium fitness management platform designed to connect
          members with professional trainers, personalized workout plans and
          diet programs. Our goal is to make fitness simple, effective and
          accessible for everyone.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-red-600">Our Mission</h3>

            <p className="text-gray-400 mt-4">
              To create a healthier community by providing world-class fitness
              guidance and motivation.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-red-600">Our Vision</h3>

            <p className="text-gray-400 mt-4">
              To become the most trusted fitness platform where everyone can
              achieve their fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-red-600">10+</h2>
            <p className="text-gray-400">Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-red-600">500+</h2>
            <p className="text-gray-400">Members</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-red-600">20+</h2>
            <p className="text-gray-400">Expert Trainers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-red-600">100%</h2>
            <p className="text-gray-400">Commitment</p>
          </div>
        </div>
      </section>

      {/* Trainers */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Trainers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800"
            >
              <img src={trainer.image} className="h-80 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{trainer.name}</h3>

                <p className="text-red-500 mt-2">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}

      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Why Choose GymPro?</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-black rounded-xl">Professional Trainers</div>

            <div className="p-6 bg-black rounded-xl">
              Personalized Workout Plans
            </div>

            <div className="p-6 bg-black rounded-xl">Nutrition Guidance</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
