import React from "react";

function HealthSafety() {
  return (
    <section className="health-safety" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Health & Safety at Chesterfield Academy</h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
        Your child's well-being is our top priority. We maintain high standards for cleanliness, hygiene, and safety throughout our school.
      </p>
      <ul style={{ lineHeight: "1.8", listStyle: "disc", paddingLeft: "1.5rem" }}>
        <li>Daily sanitization of classrooms and play areas</li>
        <li>Regular health checks and temperature screenings</li>
        <li>Secure entry system and sign-in/out process</li>
        <li>CPR-certified staff and first-aid kits in each room</li>
        <li>Emergency preparedness drills and training</li>
      </ul>
      <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
        We work closely with parents to ensure every child feels safe and supported while at school.
      </p>
    </section>
  );
}

export default HealthSafety;
