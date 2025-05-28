import React, { useState, useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; // Import AOS styles

import G1 from '../../assets/Images/Gallery/g1.jpg';
import G2 from '../../assets/Images/Gallery/g2.jpg';
import G3 from '../../assets/Images/Gallery/g3.jpg';
import G4 from '../../assets/Images/Gallery/g4.jpg';
import G5 from '../../assets/Images/Gallery/g5.jpg';
import G6 from '../../assets/Images/Gallery/g6.jpg';
import G7 from '../../assets/Images/Gallery/g7.jpg';
import G8 from '../../assets/Images/Gallery/g8.jpg';
import G9 from '../../assets/Images/Gallery/g9.jpg';
import G10 from '../../assets/Images/Gallery/g10.jpg';
import G11 from '../../assets/Images/Gallery/g11.jpg';
import G12 from '../../assets/Images/Gallery/g12.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isImageGallery, setIsImageGallery] = useState(true); 

  // AOS initialization inside useEffect
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const photos = [
    { id: 1, name: 'Photo 1', url: G1 },
    { id: 2, name: 'Photo 2', url: G2 },
    { id: 3, name: 'Photo 3', url: G3 },
    { id: 4, name: 'Photo 4', url: G4 },
    { id: 5, name: 'Photo 5', url: G5 },
    { id: 6, name: 'Photo 6', url: G6 },
    { id: 7, name: 'Photo 7', url: G7 },
    { id: 8, name: 'Photo 8', url: G8 },
    { id: 9, name: 'Photo 9', url: G9 },
    { id: 10, name: 'Photo 10', url: G10 },
    { id: 11, name: 'Photo 11', url: G11 },
    { id: 12, name: 'Photo 12', url: G12 },
  ];

  const videos = [
    { id: 1, name: 'Video 1', url: 'https://www.youtube.com/embed/ZuwwjCmeEnQ?si=tBB69FOBU2nKUvy_' },
    { id: 2, name: 'Video 2', url: 'https://www.youtube.com/embed/ovLS60wZJjM?si=N-yctkKkRm_RFzXl' },
    { id: 3, name: 'Video 3', url: 'https://www.youtube.com/embed/odo6-KKHQ60?si=tiEalNm_nF7hCioo' },
    { id: 4, name: 'Video 4', url: 'https://www.youtube.com/embed/atItkEo1hEU?si=5h9nHdIHPGA4LWSc' },
    { id: 5, name: 'Video 5', url: 'https://www.youtube.com/embed/UzM4ZymFruE?si=CHfIKLm0Umnbyx0m' },
    { id: 6, name: 'Video 6', url: 'https://www.youtube.com/embed/9LD-H3FCaPU?si=zcTGvWHt46aWQhck' },


  ];

  const handleGalleryToggle = (isImage) => {
    setIsImageGallery(isImage);
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-[#BB1E4B] mb-12 font-serif tracking-wide" data-aos="fade-up">
        Our Gallery
      </h1>

      {/* Buttons to toggle between Images and Videos */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 mx-2 text-lg font-medium rounded-lg ${
            isImageGallery ? 'bg-[#BB1E4B] text-white' : 'bg-gray-200 text-[#BB1E4B]'
          } transition-colors duration-300`}
          onClick={() => handleGalleryToggle(true)}
        >
          Images
        </button>
        <button
          className={`px-6 py-2 mx-2 text-lg font-medium rounded-lg ${
            !isImageGallery ? 'bg-[#BB1E4B] text-white' : 'bg-gray-200 text-[#BB1E4B]'
          } transition-colors duration-300`}
          onClick={() => handleGalleryToggle(false)}
        >
          Videos
        </button>
      </div>

      {/* Image Gallery */}
      {isImageGallery && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setSelectedImage(photo.url)}
              data-aos="fade-up"
            >
              <img
                src={photo.url}
                alt={photo.name}
                className="w-full h-60 object-cover object-center transition-opacity duration-300 ease-in-out group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video Gallery */}
      {!isImageGallery && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setSelectedVideo(video.url)}
              data-aos="fade-up"
            >
              <iframe
                className="w-full h-60 object-cover object-center transition-opacity duration-300 ease-in-out group-hover:opacity-90"
                src={video.url}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Play</span>
              </div> */}
            </div>
          ))}
        </div>
      )}

      {/* Image Modal */}
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

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6 transition-opacity duration-500"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-3xl max-h-[80vh]">
            <iframe
              src={selectedVideo}
              title="Selected Video"
              className="w-full h-auto object-contain rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              className="absolute top-4 right-4 text-white bg-[#3e2015] hover:bg-[#7b4a2f] rounded-full py-2 px-3 focus:outline-none transition-colors duration-200"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
