import React from 'react';
import { Gift, Truck, Shield, Headphones } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { TestimonialCard } from './components/TestimonialCard';
import { products } from './data/products';
import { testimonials } from './data/testimonials';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find the Perfect Gift
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              Discover unique gifts and toys that bring joy to your loved ones.
              Free shipping on orders over $50!
            </p>
            <div className="mt-10">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
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
          {products.map((product) => (
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
    </div>
  );
}

export default App;