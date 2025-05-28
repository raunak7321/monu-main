import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import tv1 from '../../assets/Images/tv/tv1.webp';
import tv2 from '../../assets/Images/tv/tv2.webp';
import tv3 from '../../assets/Images/tv/tv3.jpg';
import tv4 from '../../assets/Images/tv/tv4.webp';
import tv5 from '../../assets/Images/tv/tv5.jpg';
import tv6 from '../../assets/Images/tv/tv6.jpg';
import tv7 from '../../assets/Images/tv/tv7.webp';
import tv8 from '../../assets/Images/tv/tv8.jpg';
import tv9 from '../../assets/Images/tv/tv9.jpg';
import tv10 from '../../assets/Images/tv/tv10.webp';
import tv11 from '../../assets/Images/tv/tv11.webp';
import tv12 from '../../assets/Images/tv/tv12.webp';

const tvBrands = [
  { title: 'Sony', img: tv1, alt: 'Sony TV' },
  { title: 'Samsung', img: tv2, alt: 'Samsung TV' },
  { title: 'LG', img: tv3, alt: 'LG TV' },
  { title: 'OnePlus', img: tv4, alt: 'OnePlus TV' },
  { title: 'Xiaomi', img: tv5, alt: 'Xiaomi TV' },
  { title: 'Realme', img: tv6, alt: 'Realme TV' },
  { title: 'Vu', img: tv7, alt: 'Vu TV' },
  { title: 'TCL', img: tv8, alt: 'TCL TV' },
  { title: 'Panasonic', img: tv9, alt: 'Panasonic TV' },
  { title: 'Hisense', img: tv10, alt: 'Hisense TV' },
  { title: 'Thomson', img: tv11, alt: 'Thomson TV' },
  { title: 'Philips', img: tv12, alt: 'Philips TV' }
];


const TypesOfTvs = () => {
  const scrollRef = useRef(null);

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
    <div className="section-types-of-tvs py-12 font-serif bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-8">
          {/* <h2 className="text-3xl md:text6xl font-serif font-extrabold text-[#BB1E4B] mb-4">
            Complete Hardware and Software Solutions
          </h2> */}
          <h2 className="text-2xl md:text-4xl font-serif font-extrabold text-[#BB1E4B] mb-4 lg:mb-6">
            Complete Hardware and Software Solutions
          </h2>

          
        </div>
        <div className="section-container relative">
          {/* TV Types Carousel */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {tvBrands.map((tv, index) => (
              <div key={index} className="types-tv-item gap-2 flex-shrink-0 w-72">
                <div className="bg-gray-100 p-4 mb-2 rounded-lg shadow-lg">
                  <div className="mb-4">
                    <img src={tv.img} alt={tv.alt} className="w-full h-40 object-cover rounded-lg" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-[#BB1E4B]">{tv.title}</h4>
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
        </div>
      </div>
    </div>
  );
};

export default TypesOfTvs;
