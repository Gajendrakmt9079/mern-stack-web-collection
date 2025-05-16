import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Events from './pages/Events';
import Contact from './pages/Contact';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import { Checkout } from './pages/Checkout';
import EnrollNow from './pages/Enrollnow';
import Register from './pages/Register';
import { Resiterdone } from './pages/resiterconfrim';



function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
     
        <main className="container mx-auto px-4 py-8 mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/enrolment" element={<EnrollNow />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Resiterdone" element={<Resiterdone />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;