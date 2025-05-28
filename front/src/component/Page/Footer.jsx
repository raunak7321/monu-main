
import React from 'react';
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

import logo from '../../assets/Images/logo.jpg';
import bgs from "../../assets/Images/footerimg.jpg"
const Footer = () => {
  return (
    <footer className="bg-[#bb1e4b] text-white w-screen py-6 " 
    //   style={{
    //   backgroundImage: `url(${bgs})`,
    //   fontFamily:"roboto slab",
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'bottom',
    //   opacity:"0.9",
    //   paddingBottom: '20px',
    // }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">

        {/* Brand Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3">
          <img src={logo} alt="Logo" className="w-[80%] my-2 border-[#F7EAD0] items-center" />
          <span className="text-2xl text-start mb-4 font-semibold">Monu Electronics</span>

          {/* <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="https://www.facebook.com/9827204172Mukeshprajapati/" className="text-blue-600 hover:text-blue-400 transition-colors duration-300"><FaFacebook size={32} /></a>
            <a href="https://g.co/kgs/2JRdaeq" className="text-blue-500 hover:text-blue-500 bg-white p-0 rounded-full transition-colors duration-300"><FcGoogle size={32} /></a>
            <a href="https://www.instagram.com/monu_electronics/?igsh=MXJyanF1enJwZThjeg%3D%3D"><FaInstagram size={32} className='text-pink-600' /></a>
            <a href="https://wa.me/+919827204172" className="text-green-700 hover:text-green-600 transition-colors duration-300"><FaWhatsapp size={32} /></a>
          </div> */}
          
        </div>

        {/* Quick Links */}
        <div className="lg:w-1/3" style={{
          fontFamily:"Fira Sans",
          fontWeight:"bolder"
        }}>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-1.5">
            <li><a href="/" className="hover:underline hover:text-gray-400 hover:font-extrabold transition-colors duration-300">Home</a></li>
            <li><a href="/about" className="hover:underline hover:text-gray-400 transition-colors duration-300">About Us</a></li>
            <li><a href="/services" className="hover:underline hover:text-gray-400 transition-colors duration-300">Services</a></li>
            <li><a href="/testimonials" className="hover:underline hover:text-gray-400 transition-colors duration-300">Testimonials</a></li>
            <li><a href="/gallery" className="hover:underline hover:text-gray-400 transition-colors duration-300">Gallery</a></li>
            <li><a href="/contact" className="hover:underline hover:text-gray-400 transition-colors duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="lg:w-1/3">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="https://www.facebook.com/ledlcd.repairing?mibextid=ZbWKwL" className="text-white hover:text-blue-400 transition-colors duration-300"><FaFacebook size={32} /></a>
            <a href="https://g.co/kgs/2JRdaeq" className="text-blue-500 hover:text-white p-0 rounded-full transition-colors duration-300"><FcGoogle size={32} /></a>
            <a href="http://www.youtube.com/@MukeshPrajapati-d2c"><FaYoutube size={32} className='text-white'/></a>
            <a href="https://wa.me/+919827204172" className="text-white hover:text-green-600 transition-colors duration-300"><FaWhatsapp size={32} /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/3" style={{
          fontFamily:"playpen Sans"
        }}>
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <p className="mb-2">
            <span className="font-semibold">Mobile :</span> 9827204172 , 7000387347
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email :</span> mukeshprajapati4172@gmail.com
          </p>
          <p>
            <span className="font-semibold">Location :</span> Shop no.164, 165, near by hanuman temple, Ekta Market, Naya Basera, turn, Bhopal, Madhya Pradesh 462003
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;