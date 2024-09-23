import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservations from './components/Reservation';
import About from './components/About';
import CardSection from './components/CardSection';
import ContactForm from './components/Contacts';
import Footer from './components/Footer';
import FullMenu from './components/FullMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ReservationPopup from './components/ReservationPopup';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Menu />
                <Reservations />
                <About />
                <CardSection />
                <ContactForm />
              </>
            }
          />
          <Route path="/full-menu" element={<FullMenu />} />
        </Routes>
        <Footer />
        <ReservationPopup />
      </>
    </Router>
  );
}

export default App;
