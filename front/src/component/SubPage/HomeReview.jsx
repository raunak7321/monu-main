// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AOS from "aos"; // Import AOS
// import "aos/dist/aos.css"; // Import AOS styles
// import '../../index.css'; // Import your custom CSS for additional styles

// const HomeReview = () => {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState(null);

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   // Fetch all reviews on component mount
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get("/api/v1/review/all");
//         if (response.status === 200) {
//           setReviews(response.data.data);
//         } else {
//           setError("Failed to fetch reviews");
//         }
//       } catch (error) {
//         setError("Error fetching reviews:", error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8 font-serif ">
//       <h2 className="text-2xl font-semibold mb-6 text-[#BB1E4B] text-center">All Reviews</h2>

//       {/* Marquee container */}
//       <div className="overflow-hidden relative">
//         <div className="marquee flex gap-6">
//           {error ? (
//             <p className="text-red-500 text-center">{error}</p>
//           ) : (
//             reviews.length > 0 ? (
//               reviews.map((review, index) => (
//                 <div 
//                   key={index} 
//                   className="bg-gray-200 p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-95"
//                   data-aos="fade-up" 
//                   data-aos-duration="300"
//                 >
//                   <p className="font-bold text-[#BB1E4B] capitalize">{review.name}</p>
//                   <p className="text-yellow-500 pt-2">Rating: {review.rating}/5</p>
//                   <p className="text-[#BB1E4B] pt-4">{review.comment}</p>
//                   {/* <p className="text-xs pt-2 text-zinc-900">Posted on: {new Date(review.createdAt).toLocaleString()}</p> */}
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-[#3e2015] animate-pulse">No reviews yet. Be the first to leave one!</p>
//             )
//           )}
//         </div>
//          <button onClick={() => window.location.href = '/testimonials'} className="bg-[#BB1E4b] hover:bg-opacity-70 items-center text-white rounded-lg py-2 px-4 "> VIew All Reviews</button>
//       </div>
//     </div>
//   );
// };

// export default HomeReview;






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AOS from "aos"; // Import AOS
// import "aos/dist/aos.css"; // Import AOS styles
// import '../../index.css'; // Import your custom CSS for additional styles

// const HomeReview = () => {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState(null);

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   // Fetch all reviews on component mount
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get("/api/v1/review/all");
//         if (response.status === 200) {
//           setReviews(response.data.data);
//         } else {
//           setError("Failed to fetch reviews");
//         }
//       } catch (error) {
//         setError("Error fetching reviews:", error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8 font-serif text-center">
//       <h2 className="text-2xl font-semibold mb-6 text-[#BB1E4B]">All Reviews</h2>

//       {/* Marquee container */}
//       <div className="overflow-hidden relative">
//         <div className="marquee flex gap-6">
//           {error ? (
//             <p className="text-red-500 text-center">{error}</p>
//           ) : (
//             reviews.length > 0 ? (
//               reviews.map((review, index) => (
//                 <div 
//                   key={index} 
//                   className="bg-gray-200 p-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-95 review-box"
//                   data-aos="fade-up" 
//                   data-aos-duration="300"
//                 >
//                   <p className="font-bold text-[#BB1E4B] capitalize">{review.name}</p>
//                   <p className="text-yellow-500 pt-2">Rating: {review.rating}/5</p>
//                   <p className="text-[#BB1E4B] pt-4">{review.comment}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-[#3e2015] animate-pulse">No reviews yet. Be the first to leave one!</p>
//             )
//           )}
//         </div>
//       </div>

//       {/* Centered button */}
//       <div className="flex justify-center mt-8">
//         <button 
//           onClick={() => window.location.href = '/testimonials'} 
//           className="bg-[#BB1E4b] hover:bg-opacity-70 items-center text-white rounded-lg py-2 px-4">
//           View All Reviews
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomeReview;





import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const HomeReview = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Fetch all reviews on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/api/v1/review/all`
        );
        if (response.status === 200) {
          setReviews(response.data.data);
        } else {
          setError("Failed to fetch reviews");
        }
      } catch (error) {
        setError("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 font-serif text-center">
      <h2 className="text-2xl font-semibold mb-6 text-[#BB1E4B]">All Reviews</h2>

      {/* Marquee container */}
      <div className="overflow-hidden relative">
        <div className="marquee flex gap-6">
          {error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="bg-gray-200 p-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-95 review-box"
                  data-aos="fade-up" 
                  data-aos-duration="300"
                >
                  <p className="font-bold text-[#BB1E4B] capitalize">{review.name}</p>
                  <p className="text-yellow-500 pt-2">Rating: {review.rating}/5</p>
                  <p className="text-[#BB1E4B] pt-4">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-[#3e2015] animate-pulse">No reviews yet. Be the first to leave one!</p>
            )
          )}
        </div>
      </div>

      {/* Centered button */}
      <div className="flex justify-center mt-8">
        <button 
          onClick={() => window.location.href = '/testimonials'} 
          className="bg-[#BB1E4b] hover:bg-opacity-70 items-center text-white rounded-lg py-2 px-4">
          View All Reviews
        </button>
      </div>
    </div>
  );
};

export default HomeReview;

// CSS in JS
const styles = `
  /* Marquee animation */
  @keyframes scroll {
    0% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  .marquee {
    display: flex;
    animation: scroll 12s linear infinite;  /* Adjust speed as needed */
    white-space: wrap; /* Allows text to wrap */
  }
  
  .marquee div {
    flex-shrink: 0;
    min-width: 250px; /* Adjust width if needed */
  }
  
  /* Fixed height and width for each review box */
  .review-box {
    width: 300px; /* Adjust width as needed */
    height: 220px; /* Adjust height as needed */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

// Injecting the CSS into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
