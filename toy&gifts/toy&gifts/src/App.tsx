import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Gift, Truck, Shield, Headphones } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { TestimonialCard } from './components/TestimonialCard';
import { products } from './data/products';
import { testimonials } from './data/testimonials';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { Auth } from './pages/Auth';
import { Terms } from './pages/Terms';
import Footer from './components/Footer';
import NavNotification from './components/NavNotification';
import Checkout from './pages/Checkout';
import Sucess from './pages/Sucess';
import { PrivacyPolicy } from './pages/policy';
import TawkChat from './pages/tawkchat';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-24 min-h-[70vh]" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1684795780266-ecd819f04f96?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl md:mt-7">
        Find the Perfect Gift
      </h1>
      <p className="mt-6 text-xl max-w-2xl mx-auto">
        Discover unique gifts and toys that bring joy to your loved ones. Free shipping on orders over $50!
      </p>
      <div className="mt-10">
        <Link
          to="/shop"
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          Shop Now
        </Link>
      </div>
    </div>
  </div>
</div>


      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Gift className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold">Unique Gifts</h3>
              <p className="text-sm text-gray-600">Carefully curated selection</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Truck className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Free shipping over $50</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold">Secure Shopping</h3>
              <p className="text-sm text-gray-600">100% secure checkout</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Headphones className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-gray-600">Here to help anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(5, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-indigo-100 mb-8">
              Subscribe to get special offers, free giveaways, and updates!
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TawkChat/>
        <NavNotification></NavNotification>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;