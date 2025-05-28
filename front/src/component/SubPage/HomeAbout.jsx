
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from '../../assets/Images/monu.jpg'; // Adjust the path
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const HomeAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="bg-white py-16 font-serif">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          
          {/* Left Section - Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-up">
            <div className="relative group">
              <img
                src={photo}
                alt="Electronics Repair"
                className="w-[85%] h-auto rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-black leading-tight mb-6">
              Your Trusted{' '}
              <span className="text-[#BB1E4B]">TV Repair</span> Service Provider
            </h2>
            <p className="text-black mb-8 text-lg leading-relaxed">
              With over 20 years of experience, Monu Electronics specializes in LED, LCD, Android, and 3D TV repairs. We offer a 1-day TV repair guarantee with full customer satisfaction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Advanced Machinery */}
              <div className="flex items-start space-x-4" data-aos="fade-up">
                <div>
                  <h4 className="text-lg font-semibold text-[#BB1E4B]">
                    Advanced Machinery
                  </h4>
                  <p className="text-sm text-black">
                    Bonding machines and DSO signal testing.
                  </p>
                </div>
              </div>

              {/* Experienced Technicians */}
              <div className="flex items-start space-x-4" data-aos="fade-up">
                <div>
                  <h4 className="text-lg font-semibold text-[#BB1E4B]">
                    Experienced Technicians
                  </h4>
                  <p className="text-sm text-black">
                    Get your TV repaired in just 1 day!
                  </p>
                </div>
              </div>

              {/* 1 Day Repair Guarantee */}
              <div className="flex items-start space-x-4" data-aos="fade-up">
                <div>
                  <h4 className="text-lg font-semibold text-[#BB1E4B]">
                    1 Day Repair Guarantee
                  </h4>
                  <p className="text-sm text-black">
                    We guarantee that your TV will be repaired within 1 day.
                  </p>
                </div>
              </div>

              {/* 100% Customer Satisfaction */}
              <div className="flex items-start space-x-4" data-aos="fade-up">
                <div>
                  <h4 className="text-lg font-semibold text-[#BB1E4B]">
                    100% Customer Satisfaction
                  </h4>
                  <p className="text-sm text-black">
                    We are committed to providing the best service.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="flex space-x-6 gap-x-4" data-aos="fade-up">
              <a href="tel:+919827204172" className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition">
                <FaPhoneAlt size={28} />
                <span className="text-lg font-semibold">Call Us</span>
              </a>
              <a href="https://wa.me/+919827204172" className="flex items-center space-x-2 text-green-500 hover:text-green-700 transition">
                <FaWhatsapp size={28} />
                <span className="text-lg font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
