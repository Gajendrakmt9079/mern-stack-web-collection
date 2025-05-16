import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';

import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TyreProductSection from './components/TyreProductSection';
import { AboutUs6 } from './components/section5';
import { Testimonial1 } from './components/Review';


function App() {
  useEffect(() => {
    // Update the document title
    document.title = "PremiumTyres - Quality Tyre Services";
    
    // Get the default title element
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      titleElement.textContent = "PremiumTyres - Quality Tyre Services";
    }
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <TyreProductSection/>
<Testimonial1/>
      <AboutUs6/>
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;