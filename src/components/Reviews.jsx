import React from "react";

function Reviews() {
  const reviews = [
    {
      name: "Jessica M.",
      comment: "My daughter loves Chesterfield Academy! The staff is so caring and the programs are very engaging.",
      stars: 5
    },
    {
      name: "Mike T.",
      comment: "We’ve seen so much growth in our son since he started here. Highly recommend!",
      stars: 4
    },
    {
      name: "Priya S.",
      comment: "The school has a wonderful, nurturing environment and fantastic teachers.",
      stars: 5
    }
  ];

  return (
    <section className="reviews" style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>What Parents Are Saying</h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1rem" }}>
        {/*Using array map to display content */}
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              background: "#f2f2f2",
              padding: "1rem",
              borderRadius: "8px",
              maxWidth: "300px",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            <p style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>"{review.comment}"</p>
            <p style={{ fontWeight: "bold" }}>– {review.name}</p>
            <p style={{ color: "#f39c12" }}>{"★".repeat(review.stars)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
