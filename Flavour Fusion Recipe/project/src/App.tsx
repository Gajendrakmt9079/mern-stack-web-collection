import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Events from './pages/Events';
import Calendar from './pages/Calendar';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import EnrollNow from './pages/Enrollnow';
import Terms from './pages/Terms';
import { Checkout } from './pages/Checkout';
import Register from './pages/Register';
import TawkMessenger from './pages/Tawlchat';
import FAQPage from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TawkMessenger/>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/events" element={<Events />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/enrollnow" element={<EnrollNow />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;