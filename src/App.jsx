import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WelcomeMessage from './components/WelcomeMessage';
import MeetTheHead from "./components/MeetTheHead";
import Programs from "./components/Programs";
import AboutUs from "./components/AboutUs";
import OurTeachers from "./components/OurTeachers";
import Reviews from "./components/Reviews";
import HealthSafety from "./components/HealthSafety";
import BookTour from "./components/BookTour";
import Footer from "./components/Footer";
import Announcements from "./components/Announcements";

//Defining layout with Header and Footer - Always visible
// Use of <Routes> and <Route> for page navigation
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><WelcomeMessage /><MeetTheHead /><Programs /><Announcements /></>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/teachers" element={<OurTeachers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/health" element={<HealthSafety />} />
        <Route path="/book" element={<BookTour />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
