import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="p-4">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            onClick={() => handleRating(star)}
            xmlns="http://www.w3.org/2000/svg"
            fill={star <= rating ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 cursor-pointer ${
              star <= rating ? "text-purple-500" : "text-gray-400"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
