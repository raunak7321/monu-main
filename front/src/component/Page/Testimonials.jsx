import React, { useState } from "react";
import ReviewForm from "../SubPage/ReviewForm";
import ReviewList from "../SubPage/ReviewShow";

const ReviewContainer = () => {
  const [reviews, setReviews] = useState([]);

  // Function to handle adding a new review
  const handleReviewSubmitted = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="bg-white pt-24">
      <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ReviewContainer;
