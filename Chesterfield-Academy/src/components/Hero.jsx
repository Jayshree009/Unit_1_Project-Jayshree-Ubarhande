
import { useState } from 'react';
import school1 from '../assets/School_main_building.jpg';
import school2 from '../assets/Playground1.jpg';
import school3 from '../assets/Toddlers_room.jpg';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const photos = [school1, school2, school3];


function Hero() {
    
  const [current, setCurrent] = useState(0);

  const nextPhoto = () => {
    setCurrent((current + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrent((current - 1 + photos.length) % photos.length)};
    
    const navigate = useNavigate();
    const handleClick = () => {
    navigate('/book'); // redirects to Book a Tour page
  };
//Welcome banner, photo gallery with arrows,  book a tour button.
  return (
    <section className="hero text-center py-5 bg-light">
      <h1 className="hero-heading ">Chesterfield Academy</h1>
      <h4 className="hero-address mb-4">15234 Chesterfield Business Pkwy, Chesterfield, MO 63100</h4>
      {/*This section displays images with left and right arrow buttons */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <button onClick={prevPhoto} className="btn btn-outline-secondary me-2">&#9665;</button>
        <img src={photos[current]} alt="School" style={{ width: '800px', height: '500px', objectFit: 'cover', borderRadius: '10px' }} />
        <button onClick={nextPhoto} className="btn btn-outline-secondary ms-2">&#9655;</button>
      </div>
      {/*Book a tour - reusable button , executes handleClick() which uses navigate('/book') to go to Book Tour form */}
      <Button onClick={handleClick} className="btn-primary" label="Book a Tour & Learn More" />
    </section>
  );
}

export default Hero;
