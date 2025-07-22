import React from "react";
import aboutImage from '../assets/infant_room.jpg';

function AboutUs() {
  return (
    <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ color: "#007BFF", marginBottom: "1.5rem" }}>
        About Chesterfield Academy
      </h2>

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

      <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
        Chesterfield Academy is a nurturing environment where young children build a strong foundation for lifelong learning.
      </p>
      <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
        We offer programs for infants through age 7, providing hands-on learning, creative play, and supportive guidance from experienced educators.
      </p>
      <p style={{ fontSize: "1.1rem" }}>
        With a focus on STEAM (Science, Technology, Engineering, Art, and Math), we combine academic readiness with social-emotional development to help every child thrive.
      </p>
    </section>
  );
}

export default AboutUs;