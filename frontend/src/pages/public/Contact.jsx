import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9876543210",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "support@gympro.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Chandigarh, India",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}

      <section className="py-24 text-center bg-gradient-to-r from-black via-gray-900 to-black">
        <h1 className="text-6xl font-bold">
          Contact <span className="text-red-600">Us</span>
        </h1>

        <p className="text-gray-400 mt-5 text-lg">
          Have questions? Our fitness experts are here to help you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="
              bg-gray-900
              border
              border-gray-800
              rounded-2xl
              p-8
              text-center
              transition
              duration-300
              hover:-translate-y-2
              hover:border-red-600
              hover:shadow-xl
              "
            >
              <div
                className="
                text-4xl
                text-red-600
                flex
                justify-center
                mb-5
                "
              >
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold">{item.title}</h2>

              <p className="text-gray-400 mt-3">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Form Section */}

        <div
          className="
        bg-gray-900
        border
        border-gray-800
        rounded-3xl
        p-8
        md:p-12
        "
        >
          <h2 className="text-4xl font-bold mb-8">Send Message</h2>

          <form className="grid gap-6">
            <input
              className="
            bg-black
            border
            border-gray-700
            rounded-xl
            p-4
            outline-none
            focus:border-red-600
            transition
            "
              placeholder="Your Name"
            />

            <input
              className="
            bg-black
            border
            border-gray-700
            rounded-xl
            p-4
            outline-none
            focus:border-red-600
            transition
            "
              placeholder="Email Address"
            />

            <textarea
              rows="5"
              className="
            bg-black
            border
            border-gray-700
            rounded-xl
            p-4
            outline-none
            focus:border-red-600
            transition
            "
              placeholder="Your Message"
            />

            <button
              className="
            bg-red-600
            py-4
            rounded-xl
            font-bold
            transition
            duration-300
            hover:bg-red-700
            hover:scale-105
            "
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map */}

      <section
        className="
      h-72
      bg-gray-900
      flex
      items-center
      justify-center
      text-gray-500
      text-xl
      "
      >
        Google Map Location
      </section>
    </div>
  );
};

export default Contact;
