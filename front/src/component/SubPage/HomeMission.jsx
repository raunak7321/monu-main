import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCogs, FaBolt, FaHandshake } from "react-icons/fa";

const sections = [
  {
    title: "OUR MISSION",
    icon: <FaBolt className="text-4xl text-white" />,
    description:
      "Our mission is to provide top-quality electronics repair services with a focus on efficiency, expertise, and customer satisfaction.",
  },
  {
    title: "OUR VISION",
    icon: <FaCogs className="text-4xl text-white" />,
    description:
      "We aim to become the leading electronics repair service provider in the region, ensuring rapid and reliable solutions for all our customers' needs.",
  },
  {
    title: "OUR VALUES",
    icon: <FaHandshake className="text-4xl text-white" />,
    description:
      "We uphold values of trust, quality ensuring that every device we repair receives the highest level of care and attention.",
  },
];

const HomeMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="container w-screen mx-auto px-6 py-10 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-[#BB1E4B] mb-4">
          Mission, Vision & Values
        </h1>
        <p className="text-black text-lg font-serif">
          Committed to providing the best electronics repair service with dedication and professionalism.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 bg-gray-200 p-5 shadow-lg rounded-lg hover:shadow-2xl transform transition-all duration-500"
            data-aos="fade-up"
          >
            <div
              className="flex items-center justify-center mb-6"
              data-aos="flip-left"
            >
              <div className="bg-[#BB1E4B] p-4 rounded-full">
                {section.icon}
              </div>
            </div>
            <h2 className="text-[#BB1E4B] font-serif font-semibold text-center text-xl mb-4">
              {section.title}
            </h2>
            <p className="text-center text-black font-serif text-base">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMission;
