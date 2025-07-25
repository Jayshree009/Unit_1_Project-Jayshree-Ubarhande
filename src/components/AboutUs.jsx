import React from "react";
import aboutImage from '../assets/infant_room.jpg';
import { useState } from 'react';

function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container my-5">
      <h2>About Chesterfield Academy</h2>
      
      <img
        src={aboutImage}
        alt="Chesterfield Academy Campus"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      />
      <p>
               Chesterfield Academy is dedicated to providing a nurturing and stimulating environment...
      </p>

      {showMore && (
        <p>
          We offer programs for infants through age 7, providing hands-on learning, creative play, and supportive guidance from experienced educators.
          We focus on holistic development through structured play, early literacy, and personalized attention. Our certified staff are passionate about early childhood education.
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)} className="btn btn-primary">
        {showMore ? "Show Less" : "Know More"}
      </button>
    </div>
  );
}

export default AboutUs;

