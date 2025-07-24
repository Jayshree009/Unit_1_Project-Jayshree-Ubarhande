import teacher1 from '../assets/Smith.jpg'; //Importing teachers pictures 
import teacher2 from '../assets/Johnson.jpg';
import teacher3 from '../assets/Lopez.jpg';


function OurTeachers() {
  const teachers = [
    {
      name: "Ms. Emily",
      role: "Pre-K Lead Teacher",
      image: teacher1,
      Aboutme: "Hello! I'm Ms. Emily, the Pre-K Lead Teacher at Chesterfield Academy. With over 6 years of early childhood education experience, I’m passionate about creating a fun, nurturing, and engaging classroom where every child feels valued and excited to learn.!",

    },
    {
      name: "Mr. Raj",
      role: "STEM Instructor",
      image: teacher2,
      Aboutme: "Hi, I'm Mr. Raj, the STEM Instructor at Chesterfield Academy. I specialize in making science, technology, engineering, and math fun and hands-on for young learners. From building simple machines to exploring nature through experiments.",
    },
    {
      name: "Ms. Sarah",
      role: "Toddler Caregiver",
      image: teacher3,
      Aboutme: "Hello, I’m Ms. Sarah, a dedicated toddler caregiver at Chesterfield Academy. I love creating a warm, nurturing environment where little ones feel safe to explore, learn, and grow. With patience and positivity.",
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
        {/*Using array map to display content */}
        {teachers.map((teacher, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            {/* Displaying teachers profiles with images */}
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
            <p style={{ fontStyle: "italic", color: "darkslategray" }}>{teacher.role}</p>
            <p style={{ fontStyle: "normal" , color: "darkslategray" }}>{teacher.Aboutme}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeachers;
