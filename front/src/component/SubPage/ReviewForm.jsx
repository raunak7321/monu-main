import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewForm = ({ onReviewSubmitted }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const maxCommentLength = 160; // Maximum length for comment

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init();
  }, []);

  // Handle rating click (stars)
  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > maxCommentLength) {
      setError(`Comment cannot exceed ${maxCommentLength} characters.`);
      return;
    }
  
    setIsSubmitting(true);
    setError(null);
  
    const data = {
      name,
      rating,
      comment,
    };
  
    try {
      const response = await axios.post("http://localhost:4100/api/v1/review/create", data);
      if (response.status === 201) {
        setSubmitted(true);
        onReviewSubmitted(response.data.review); // Call parent function to add the review
        setName("");
        setRating(0);
        setComment("");
        
        // Reload the window after successful submission
        window.location.reload();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="max-w-lg mx-auto p-10 font-serif bg-gray-200 shadow-xl rounded-xl mt-10" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#BB1E4B]" data-aos="fade-up" data-aos-duration="1000">Share Your Experience</h2>

      {submitted ? (
        <div className="text-center text-green-600 font-semibold text-lg" data-aos="fade-up" data-aos-duration="1000">Thank you for your review!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#BB1E4B]" data-aos="fade-up" data-aos-duration="1000">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-[#BB1E4B] rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              data-aos="fade-up" data-aos-duration="1000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#BB1E4B]" data-aos="fade-up" data-aos-duration="1000">Rating</label>
            <div className="flex space-x-2 mt-3" data-aos="fade-up" data-aos-duration="1000">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  onClick={() => handleRatingClick(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8 cursor-pointer ${rating > index ? "text-yellow-600" : "text-gray-700"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.145a1 1 0 00.95.69h4.396c.969 0 1.371 1.24.588 1.81l-3.56 2.575a1 1 0 00-.364 1.118l1.342 4.146c.3.92-.755 1.688-1.538 1.118L10 13.011l-3.561 2.575c-.783.57-1.838-.197-1.538-1.118l1.342-4.146a1 1 0 00-.364-1.118L2.318 9.572c-.783-.57-.38-1.81.588-1.81h4.396a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#BB1E4B]" data-aos="fade-up" data-aos-duration="1000">Review</label>
            <textarea
              className="w-full px-4 py-2 border border-[#BB1E4B] rounded-lg"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              required
              data-aos="fade-up" data-aos-duration="1000"
            ></textarea>
            <p className="text-gray-500 text-sm">{comment.length}/{maxCommentLength}</p> {/* Display character count */}
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-[#BB1E4B] text-[#F7EAD0] font-bold py-3 px-5 rounded-lg transition-transform duration-300 transform ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
              disabled={isSubmitting}
              data-aos="fade-up" data-aos-duration="1000"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
