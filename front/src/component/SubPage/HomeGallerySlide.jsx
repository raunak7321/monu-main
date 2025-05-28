import React, { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import g2 from '../../assets/Images/Gallery/g2.jpg';
import g9 from '../../assets/Images/Gallery/g9.jpg';
import g10 from '../../assets/Images/Gallery/g14.png';
import g101 from '../../assets/Images/Gallery/g101.jpg';
import g12 from '../../assets/Images/Gallery/g12.jpg';
import g103 from '../../assets/Images/Gallery/g103.jpg';
import g105 from '../../assets/Images/Gallery/g105.jpg';

const images = [
  { id: 2, name: 'Photo 2', url: g10 },
  { id: 3, name: 'Photo 3', url: g2 },
  { id: 9, name: 'Photo 9', url: g105 },
  { id: 5, name: 'Photo 5', url: g101 },
  { id: 6, name: 'Photo 6', url: g12 },
  { id: 7, name: 'Photo 7', url: g103 },
  { id: 4, name: 'Photo 4', url: g9 },

];

const TypesOfTvs = () => {
  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="section-types-of-tvs py-8 font-serif bg-white">
      <div className="container mx-auto px-4">
        <div className="section-container relative">
          {/* TV Types Carousel */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {images.map((tv) => (
              <div
                key={tv.id}
                className="types-tv-item gap-2 flex-shrink-0"
                onClick={() => setSelectedImage(tv.url)} // Set selected image on click
              >
                <div className="bg-gray-100 p-3 mb-2 rounded-lg shadow-lg cursor-pointer">
                  <div className="mb-4">
                    <img
                      src={tv.url}
                      alt={tv.name}
                      className="h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={scrollLeft}
              className="slider-nav bg-gray-300 p-2 rounded-full hover:bg-gray-400"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="slider-nav bg-gray-300 p-2 rounded-full hover:bg-gray-400"
            >
              <FaArrowRight size={20} />
            </button>
          </div>

          {/* Modal for selected image */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
              onClick={() => setSelectedImage(null)} // Close modal on click
            >
              <div className="relative max-w-3xl max-h-[80vh]">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-auto object-contain rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-[#3e2015] hover:bg-[#7b4a2f] rounded-full py-2 px-3 focus:outline-none transition-colors duration-200"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypesOfTvs;
