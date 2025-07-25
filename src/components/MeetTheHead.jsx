import headshot from '../assets/MeetHead.jpg'; // Replace with your actual image file name

function MeetTheHead() {
  return (
    <section className="meet-the-head text-center py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Meet the Head of the School</h2>
        <img 
          src={headshot} 
          alt="Head of School" 
          className="rounded-circle mb-3"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />
        <h4 className="text-primary">Jaya</h4>
        <p className="text-muted">Head of School</p>
        <p className="mx-auto" style={{ maxWidth: '600px' }}>
          Hello! I'm Jayshree, the Head of School at Chesterfield Academy. With a background in elementary education and years of hands-on experience, I strive to build a strong community where children thrive, and staff feel supported and inspired.
        </p>
      </div>
    </section>
  );
}

export default MeetTheHead;
