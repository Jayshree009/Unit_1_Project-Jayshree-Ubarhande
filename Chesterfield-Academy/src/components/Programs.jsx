import ProgramCard from './ProgramCard';
import daycareIcon from '../assets/baby-boy.png';
import summerIcon from '../assets/hand-print.png';
import prekIcon from '../assets/block.png';

function Programs() {
  const programs = [
    {
      image: daycareIcon,
      title: 'Daycare',
      description: 'A safe, nurturing environment where infants and toddlers grow and learn through guided play.',
    },
    {
      image: summerIcon,
      title: 'Summer Camp',
      description: 'A vibrant summer adventure full of creative projects, outdoor play, and new friendships.',
    },
    {
      image: prekIcon,
      title: 'Pre-K',
      description: 'Preparation for kindergarten with engaging lessons in a supportive early learning environment.',
    }
  ];

  return (
    <section className="programs py-5 bg-white text-center">
      <div className="container">
        <h2 className="mb-4">Our Programs</h2>
        <div className="row">
          {programs.map((program, index) => (
            <ProgramCard          //Using Props to send data to a reusable Programcard component.
              key={index}
              image={program.image}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
