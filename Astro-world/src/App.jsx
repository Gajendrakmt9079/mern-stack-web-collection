import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DailyHoroscope from './pages/DailyHoroscope';
import BirthChart from './pages/BirthChart';
import Compatibility from './pages/Compatibility';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import BirthChartResult from './pages/BirthChartResult';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-horoscope" element={<DailyHoroscope />} />
          <Route path="/birth-chart" element={<BirthChart />} />
           <Route path="/birth-chart-result" element={<BirthChartResult />} />
           <Route path="/contact" element={<Contact />} />
          {/* <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/blog" element={<Blog />} />
         
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          */}
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;