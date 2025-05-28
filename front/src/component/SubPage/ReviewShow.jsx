
import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import '../../index.css'; // Import your custom CSS for additional styles

const ReviewList = () => {
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
    <div className="container mx-auto px-4 py-10 font-serif ">
      <h3 className="text-2xl font-semibold mb-6 text-[#BB1E4B] text-center">All Reviews</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-gray-200 p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-95"
                data-aos="fade-up" 
                data-aos-duration="300"
              >
                <p className="font-bold text-[#BB1E4B] capitalize">{review.name}</p>
                <p className="text-yellow-500 pt-2">Rating: {review.rating}/5</p>
                <p className="text-[#BB1E4B] pt-4">{review.comment}</p>
                <p className="text-xs pt-2 text-zinc-900">Posted on: {new Date(review.createdAt).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-[#3e2015] animate-pulse ">No reviews yet. Be the first to leave one!</p>
          )
        )}
      </div>
    </div>
  );
};

export default ReviewList;
