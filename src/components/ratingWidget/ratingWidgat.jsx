import React from "react";
import "./ratingWidgat.css";

const StarRating = ({ rating }) => {
  const maxRating = 5;

  const getStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        i <= rating ? (
          <span key={i} className="star filled">
            &#9733;
          </span>
        ) : (
          <span key={i} className="star">
            &#9734;
          </span>
        )
      );
    }
    return stars;
  };

  return <div className="star-rating">{getStars()}</div>;
};

export default StarRating;
