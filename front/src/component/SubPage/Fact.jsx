import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTv, FaTools, FaMicrochip, FaVolumeUp } from "react-icons/fa"; // Import icons

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: <FaTv className="text-6xl text-black" />, // Icon for TV Repair
      title: "LED & LCD TV Repair",
      description:
        "Expert repair services for all LED and LCD TV models, ensuring flawless display and performance restoration.",
    },
    {
      icon: <FaTools className="text-6xl text-black" />, // Icon for Smart TV Repair
      title: "Smart TV Repair",
      description:
        "Comprehensive Smart TV repair services, including software updates, connectivity issues, and hardware fixes.",
    },
    {
      icon: <FaMicrochip className="text-6xl text-black" />, // Icon for Motherboard & Power Supply Repair
      title: "Motherboard & Power Supply Repair",
      description:
        "We specialize in diagnosing and repairing motherboard and power supply issues for LED and LCD TVs.",
    },
    {
      icon: <FaVolumeUp className="text-6xl text-black" />, // Icon for Sound System Repair
      title: "Sound System Repair",
      description:
        "Comprehensive sound system repair services, fixing speaker issues, audio lag, and sound clarity problems.",
    },
  ];

  return (
    <div className="bg-white py-12 font-serif">
      <div className="container mx-auto px-4">
        <h1
          className="text-3xl md:text-4xl font-serif text-center font-extrabold text-[#BB1E4B] mb-12"
          data-aos="fade-up"
        >
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              data-aos="flip-left"
            >
              <div
                className="flex justify-center items-center mb-4"
                data-aos="fade-up"
              >
                {service.icon}
              </div>
              <h3 className="text-xl text-[#BB1E4B] font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
