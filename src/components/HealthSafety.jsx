import React from "react";

function HealthSafety() {
  return (
    <section className="health-safety" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Health & Safety at Chesterfield Academy</h2>

      <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
        Your child's well-being is our top priority. We maintain high standards for cleanliness, hygiene, and safety throughout our school.
      </p>
      {/*Using list and table to display health and safety measures */}
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

      <h4 style={{ marginTop: "2rem", textAlign: "center" }}>Daily Cleaning Schedule</h4>
      <table className="table table-bordered table-striped mt-3" style={{ marginTop: "1rem", width: "100%" }}>
        <thead className="table-light">
          <tr>
            <th>Time</th>
            <th>Activity</th>
            <th>Responsible Staff</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:00 AM</td>
            <td>Sanitize all desks and toys</td>
            <td>Morning Caregiver</td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td>Clean lunch area and wash hands</td>
            <td>Lunch Staff</td>
          </tr>
          <tr>
            <td>3:00 PM</td>
            <td>Disinfect bathrooms and play areas</td>
            <td>Maintenance Team</td>
          </tr>
          
        </tbody>
      </table>
    </section>
  );
}

export default HealthSafety;
