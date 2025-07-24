import { Link } from 'react-router-dom';
import logo from '../assets/kindergarten.png'; // adjust path as needed

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-2 bg-light border-bottom">
      <div className="d-flex align-items-center">
        <img src={logo} alt="Chesterfield Logo" height="50" className="logo me-2" />
        <span className="fw-bold fs-4">We care</span>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li> {/*Navigation bar using React Router link*/}
          <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/teachers">Our Teachers</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/reviews">Reviews</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/health">Health & Safety</Link></li>
          <li className="nav-item"><Link className="btn btn-primary ms-2" to="/book">Book a Tour</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
