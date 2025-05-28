import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; // Import AOS styles

import LEDRepair from '../../assets/Images/Service/led.png';
import LCDRepair from '../../assets/Images/Service/lcd.png';
import PlasmaRepair from '../../assets/Images/Service/plasma.png';
import SmartTVRepair from '../../assets/Images/Service/smart.png';
import DisplayProblem from '../../assets/Images/Service/display.png';
import SoundProblem from '../../assets/Images/Service/Sound.png';
// import TVInstallation from '../../assets/Images/Service/tv.png';
import PowerSupplyRepair from '../../assets/Images/Service/power.png';
import MotherboardRepair from '../../assets/Images/Service/motherboard.png';

const services = [
  {
    name: 'LED TV Repair',
    description: 'Get your LED TV restored with precision repairs, bringing vibrant clarity and lasting functionality.',
    image: LEDRepair,
  },
  {
    name: 'LCD TV Repair',
    description: 'We deliver expert LCD TV repairs, ensuring optimal performance with brilliant picture quality.',
    image: LCDRepair,
  },
  // {
  //   name: 'Plasma TV Repair',
  //   description: 'Specialized Plasma TV repair services to revive your screen with smooth, flicker-free visuals.',
  //   image: PlasmaRepair,
  // },
  {
    name: 'Smart TV Repair',
    description: 'Advanced Smart TV repair services, addressing both software and hardware issues with ease.',
    image: SmartTVRepair,
  },
  {
    name: 'Display Problem',
    description: 'We tackle display issues head-on, restoring sharpness and vibrant colors to your screen.',
    image: DisplayProblem,
  },
  {
    name: 'Sound Problem',
    description: 'Our sound repair services ensure clear, rich audio, bringing your entertainment back to life.',
    image: SoundProblem,
  },
  // {
  //   name: 'TV Installation',
  //   description: 'Seamless and professional TV installation services tailored to enhance your viewing experience.',
  //   image: TVInstallation,
  // },
  {
    name: 'LED LCD Motherboard Repair',
    description: 'Get reliable LED/LCD motherboard repairs, restoring full operational capacity to your TV.',
    image: MotherboardRepair,
  },
  {
    name: 'LED LCD Power Supply Repair',
    description: 'Our power supply repairs ensure long-lasting performance and efficiency for your TV.',
    image: PowerSupplyRepair,
  },
];

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto py-16 px-8 lg:px-4 font-serif bg-[#F7EAD0]">
      <h1 className="text-4xl font-bold text-center font-serif text-[#BB1E4B] mb-12 uppercase" data-aos="fade-up" >Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
            data-aos="flip-left"
            data-aos-delay={`${index * 150}`}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-56 object-cover transition-transform transform hover:scale-105 duration-300"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-center text-[#BB1E4B] text-primary">{service.name}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
