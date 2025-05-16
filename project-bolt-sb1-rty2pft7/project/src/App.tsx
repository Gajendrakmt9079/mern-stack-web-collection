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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
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
            <Route path="/enrollnow" element={<EnrollNow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;