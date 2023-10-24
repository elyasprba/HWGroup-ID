import React, { useState } from "react";
import "./imageCarousel.css";

const ImageCarousel = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data?.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data?.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="image-carousel">
        <button className="prev-button" onClick={handlePrevClick}>
          &#9664;
        </button>
        <div className="image-container">
          <img
            src={data?.data[currentImageIndex].image_url}
            alt={data?.data[currentImageIndex].title}
          />
        </div>
        <button className="next-button" onClick={handleNextClick}>
          &#9654;
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
