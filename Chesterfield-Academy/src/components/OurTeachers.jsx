import teacher1 from '../assets/Smith.jpg';
import teacher2 from '../assets/Johnson.jpg';
import teacher3 from '../assets/Lopez.jpg';


function OurTeachers() {
  const teachers = [
    {
      name: "Ms. Emily",
      role: "Pre-K Lead Teacher",
      image: teacher1,
    },
    {
      name: "Mr. Raj",
      role: "STEM Instructor",
      image: teacher2,
    },
    {
      name: "Ms. Sarah",
      role: "Toddler Caregiver",
      image: teacher3,
    },
  ];

  return (
    <section style={{ padding: "40px", backgroundColor: "#f1f1f1" }}>
      <h2 style={{ textAlign: "center", color: "#2c3e50" }}>Meet Our Teachers</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {teachers.map((teacher, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <h4>{teacher.name}</h4>
            <p style={{ fontStyle: "italic", color: "#555" }}>{teacher.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeachers;
