import React from 'react';
import About1 from '../../assets/Images/About/I1.jpeg';
import About2 from '../../assets/Images/About/I2.png';

const AboutSection = () => {
  return (
    <div className="container mx-auto py-16 px-8 lg:px-0 font-serif bg-[#F7EAD0]">
      <div className="flex flex-wrap mx-auto items-center">
        {/* Left Section: Text Content */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-4xl font-extrabold text-secondary uppercase mb-4 text-[#BB1E4B] text-center lg:text-left">About Us</h1>
          <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Your Trusted Electronics Repair Service Provider</h2>
          <p className="text-black mb-4 leading-relaxed text-center lg:text-left">
            <span className='text-[#BB1E4B] font-semibold text-lg'>Monu Electronics</span> has over 20 years of experience in electronics, specializing in LED and LCD repair, as well as Android and 3D TV repairs. We pride ourselves on being the best service provider, with fully satisfied customers and a commitment to repairing TVs within a single day. Our service center is equipped with advanced machinery like bonding machines for DSO signal testing on panels, advanced programmers for software, and high-quality multimeters from reputable companies like Fluke 115 and 101.
          </p>
          <ul className="list-none space-y-3 mt-4 text-center lg:text-left">
            <li className="flex items-center justify-center lg:justify-start text-primary font-medium">
              <i className="fa fa-check text-green-600 mr-3"></i>Best Android LED TV Repair Services
            </li>
            <li className="flex items-center justify-center lg:justify-start text-primary font-medium">
              <i className="fa fa-check text-green-600 mr-3"></i>1-Day TV Repair Guarantee
            </li>
            <li className="flex items-center justify-center lg:justify-start text-primary font-medium">
              <i className="fa fa-check text-green-600 mr-3"></i>Highly Experienced Technicians
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-4 text-[#BB1E4B] text-center lg:text-left">Our Team</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Deepak Prajapati</strong> - Motherboard and Power Supply Repair Specialist</li>
            <li><strong>Ghanshyam Prajapati</strong> - Panel Repair Specialist</li>
            <li><strong>Mukesh Prajapati</strong> - Service Center Owner and All-Round Specialist</li>
            <li><strong>Raj Amkare</strong> - Form Maintenance</li>
            <li><strong>Kapil Prajapati</strong> - Form Maintenance</li>
          </ul>
        </div>
        
        {/* Right Section: Images */}
        <div className="w-full lg:w-1/2 px-4 flex flex-col gap-6">
          <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-95"
              src={About1}
              alt="About Monu Electronics"
            />
          </div>
          <div className="relative group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-95"
              src={About2}
              alt="About Monu Electronics"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
