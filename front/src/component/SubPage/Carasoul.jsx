// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import cara from '../../assets/Images/Carasoul/Cara1.jpg';
// import cara2 from '../../assets/Images/Carasoul/Cara2.jpg';

// import { motion } from 'framer-motion';

// const CaraSoul = () => {
//   const slides = [
//     { id: 0, srcimg: cara, alt: ''},
//     { id: 1, srcimg: cara2, alt: ''},
//   ];

//   return (
//     <div className="w-screen h-full relative overflow-hidden bg-[#F7EAD0]">
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showArrows={true}
//         showThumbs={false}
//         showStatus={false}
//         interval={3000}
//         className="h-full"
//       >
//         {slides.map(slide => (
//           <motion.div
//             key={slide.id}
//             className="relative w-full flex items-center justify-center"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//               <img src={slide.srcimg} alt={slide.alt} className="w-screen h-full object-cover" />

//            </motion.div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default CaraSoul;






// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import cara from '../../assets/Images/Carasoul/Cara1.jpg';
// import cara2 from '../../assets/Images/Carasoul/Cara2.jpg';

// const CaraSoul = () => {
//   const slides = [
//     { id: 0, srcimg: cara, alt: ''},
//     { id: 1, srcimg: cara2, alt: ''},
//   ];

//   return (
//     <div className="w-screen h-full relative overflow-hidden bg-[#F7EAD0]">
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showArrows={true}
//         showThumbs={false}
//         showStatus={false}
//         interval={3000}
//         className="h-full"
//       >
//         {slides.map(slide => (
//           <div
//             key={slide.id}
//             className="relative w-full flex items-center justify-center"
//             data-aos="zoom-out-up"  // AOS animation type
//             data-aos-duration="1200"  // Duration of animation
//           >
//             <img src={slide.srcimg} alt={slide.alt} className="w-screen h-full object-cover" />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default CaraSoul;








// import React, { useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import AOS from 'aos';
// import "aos/dist/aos.css"; // Import AOS styles
// import cara from '../../assets/Images/Carasoul/Cara1.jpg';
// import cara2 from '../../assets/Images/Carasoul/Cara2.jpg';

// const CaraSoul = () => {
//   const slides = [
//     { id: 0, srcimg: cara, alt: ''},
//     { id: 1, srcimg: cara2, alt: ''},
//   ];

//   // Initialize AOS on mount
//   useEffect(() => {
//     AOS.init({
//       duration: 1200, // Set default animation duration
//     });
//   }, []);

//   // Function to handle carousel change and refresh AOS
//   const handleSlideChange = () => {
//     AOS.refresh(); // Refresh AOS animations
//   };

//   return (
//     <div className="w-screen h-full relative overflow-hidden bg-[#F7EAD0]">
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showArrows={true}
//         showThumbs={false}
//         showStatus={false}
//         interval={3000}
//         className="h-full"
//         onChange={handleSlideChange}  // Trigger AOS refresh on slide change
//       >
//         {slides.map(slide => (
//           <div
//             key={slide.id}
//             className="relative w-full flex items-center justify-center"
//             data-aos="zoom-out-up"  // AOS animation type
//             data-aos-duration="100"  // Duration of animation
//           >
//             <img src={slide.srcimg} alt={slide.alt} className="w-screen h-full object-cover" />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default CaraSoul;









import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from 'aos';
import "aos/dist/aos.css"; // Import AOS styles
import cara from '../../assets/Images/Carasoul/Cara1.jpg';
import cara2 from '../../assets/Images/Carasoul/Cara2.jpg';

const CaraSoul = () => {
  const slides = [
    { id: 0, srcimg: cara, alt: '' },
    { id: 1, srcimg: cara2, alt: '' },
  ];

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set default animation duration
    });
  }, []);

  // Function to handle carousel change and refresh AOS
  const handleSlideChange = () => {
    setTimeout(() => {
      AOS.refresh(); // Refresh AOS animations after the slide change
    }, 50); // Add a small delay to ensure AOS refreshes after the transition
  };

  return (
    <div className="w-screen h-full relative overflow-hidden bg-[white]">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="h-full"
        onChange={handleSlideChange}  // Trigger AOS refresh on slide change
      >
        {slides.map(slide => (
          <div
            key={slide.id}
            className="relative w-full flex items-center justify-center"
            data-aos="zoom-out-up"  // AOS animation type
            data-aos-duration="3000"
          >
            <img src={slide.srcimg} alt={slide.alt} className="w-screen h-full object-cover"  />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CaraSoul;
