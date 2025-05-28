import React, { useState } from 'react';
import AOS from 'aos'; // Ensure AOS is imported

import G1 from '../../assets/Images/Gallery/g1.jpg';
import g2 from '../../assets/Images/Gallery/g2.jpg';
import g9 from '../../assets/Images/Gallery/g9.jpg';
import g10 from '../../assets/Images/Gallery/g14.png';



const HomeGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [

    { id: 1, name: 'Photo 1', url: G1 },
    { id: 2, name: 'Photo 2', url: g2 },
    { id: 3, name: 'Photo 3', url: g9 },
    { id: 4, name: 'Photo 4', url: g10 },

  ];

  return (
    <div className="container mx-auto px-4 py-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {photos.map(photo => (
          <div
            key={photo.id}
            className="group relative border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setSelectedImage(photo.url)}
            data-aos="fade-up" // Add fade-up animation
          >
            <img
              src={photo.url}
              alt={photo.name}
              className="w-full h-72 object-cover object-center transition-opacity duration-300 ease-in-out group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">View</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6 transition-opacity duration-500"
          onClick={() => setSelectedImage(null)}
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
  );
};

export default HomeGallery;
