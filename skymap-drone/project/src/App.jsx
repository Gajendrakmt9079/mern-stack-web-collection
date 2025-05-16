import React from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacy';
import Terms from './pages/Trems';
import CheckoutSuccess from './pages/CheckoutSuccess';
import TawkChat from './pages/Tawkchat';
function App() {


  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <TawkChat />
          <Navbar />
          <main className="flex-grow bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;