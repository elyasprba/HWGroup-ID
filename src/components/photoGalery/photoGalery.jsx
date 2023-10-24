import React from "react";
import "./photoGalery.css";

import StarRating from "../ratingWidget/ratingWidgat";

const PhotoGallery = ({ photos, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <>
          <div>Loading...</div>
        </>
      ) : (
        <>
          <div className="photo-gallery">
            {photos?.map((photo, index) => (
              <div key={index}>
                <img src={photo.image_url} alt={`Photo ${index + 1}`} />
                <StarRating rating={photo.rating} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PhotoGallery;
