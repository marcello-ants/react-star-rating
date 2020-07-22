import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={100}
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
              className="star"
            />
          </label>
        );
      })}
      <div>rating: {rating}</div>
    </div>
  );
};

export default StarRating;
