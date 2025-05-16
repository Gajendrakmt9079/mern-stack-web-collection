import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';
import { HeartIcon, ArrowPathIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('Hardcover');

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-medium text-gray-900"
        >
          Book not found
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-3 bg-primary-600 text-white rounded-lg"
        >
          Browse Our Collection
        </motion.button>
      </div>
    );
  }

  // Book formats with different prices
  const bookFormats = [
    { type: 'Hardcover', price: product.price },
    { type: 'Paperback', price: `$${(parseFloat(product.price.replace('$', '')) - 5).toFixed(2)}` },
    { type: 'eBook', price: `$${(parseFloat(product.price.replace('$', '')) - 10).toFixed(2)}` },
    { type: 'Audiobook', price: `$${(parseFloat(product.price.replace('$', '')) - 8).toFixed(2)}` },
  ];

  // Generate additional book images
  const bookImages = [
    product.imageSrc,
  
  ];

  const handleAddToCart = () => {
    addItem({ 
      ...product, 
      quantity,
      format: selectedFormat,
      price: bookFormats.find(f => f.type === selectedFormat)?.price || product.price
    });
    navigate('/cart');
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    if (newQuantity > 10) return;
    setQuantity(newQuantity);
  };

  // Find related books (by same author or same genre)
  const relatedProducts = products
    .filter((p) => 
      (p.author === product.author || p.genre === product.genre) && 
      p.id !== product.id
    )
    .slice(0, 4);

  // Enhanced reviews data
  const reviews = [
    {
      id: 1,
      user: 'Emily Parker',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      date: 'April 12, 2023',
      comment: 'This book completely captivated me from the first page. The character development is exceptional and the plot twists kept me guessing until the very end. Highly recommend!',
    },
    {
      id: 2,
      user: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      rating: 4,
      date: 'March 28, 2023',
      comment: 'A thought-provoking read that stayed with me long after I finished. The author has a unique voice and perspective. Only reason for 4 stars is the slow middle section.',
    },
    {
      id: 3,
      user: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
      rating: 5,
      date: 'March 15, 2023',
      comment: 'Absolutely brilliant! The prose is beautiful and the story is both heartbreaking and uplifting. One of the best books I\'ve read this year.',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(-1)}
          className="flex items-center mb-8 text-sm font-medium text-primary-600 hover:text-primary-500"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Collection
        </motion.button>

        {/* Book Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
        >
          {/* Book Images */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={bookImages[activeImage]}
                alt={product.name}
                className="h-full w-full object-contain object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {bookImages.map((img, index) => (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg ${activeImage === index ? 'ring-2 ring-primary-500' : ''}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Book Info */}
          <motion.div variants={itemVariants} className="lg:pl-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
                <p className="mt-2 text-lg text-gray-600">by {product.author}</p>
                <p className="mt-1 text-sm text-gray-500">ISBN: {product.id.toString().padStart(13, '0')}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-2 rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-gray-500'}`}
              >
                <HeartIcon className="h-6 w-6" fill={isWishlisted ? 'currentColor' : 'none'} />
              </motion.button>
            </div>

            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`h-5 w-5 flex-shrink-0 ${product.rating > rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">{reviews.length} reviews</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm text-green-600">In Stock</span>
            </div>

            {/* Book Format Selection */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Format</h3>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {bookFormats.map((format) => (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    key={format.type}
                    onClick={() => setSelectedFormat(format.type)}
                    className={`p-2 border rounded-md text-center ${selectedFormat === format.type ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}`}
                  >
                    <p className="text-sm font-medium">{format.type}</p>
                    <p className="text-sm text-gray-900 mt-1">{format.price}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Book Description */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Synopsis</h2>
              <div className="mt-4 space-y-4 text-gray-600">
                <p>
                  {product.description || `"${product.name}" is a ${product.genre} masterpiece that explores ${product.theme || 'the complexities of human nature'}. ${product.author} weaves a compelling narrative that will keep readers enthralled from the first page to the last.`}
                </p>
                <p>
                  This critically acclaimed work has been praised for its ${product.features?.join(', ') || 'rich character development, intricate plot, and beautiful prose'}. Whether you're a longtime fan of ${product.author} or discovering their work for the first time, this book is sure to leave a lasting impression.
                </p>
              </div>
            </div>

            {/* Book Details */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Book Details</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
              
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Publisher:</strong> {product.publisher || 'Penguin Random House'}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Publication Date:</strong> {product.publishDate || 'June 15, 2022'}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Pages:</strong> {product.pages || '352 pages'}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Language:</strong> English</span>
                </li>
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Quantity</h2>
              <div className="mt-4 flex items-center">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="h-10 w-10 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 text-gray-600 hover:bg-gray-100"
                >
                  <span className="text-xl">−</span>
                </motion.button>
                <div className="h-10 w-16 flex items-center justify-center border-t border-b border-gray-300 bg-white text-gray-900">
                  {quantity}
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="h-10 w-10 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 text-gray-600 hover:bg-gray-100"
                >
                  <span className="text-xl">+</span>
                </motion.button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="mt-8 w-full bg-primary-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 rounded-md"
            >
              Add to Cart - {bookFormats.find(f => f.type === selectedFormat)?.price || (product.price)*quantity}
            </motion.button>

            {/* Book Policy Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex justify-center">
                  <ArrowPathIcon className="h-6 w-6 text-gray-400" />
                </div>
                <p className="mt-2 text-xs text-gray-500">Free Returns</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="mt-2 text-xs text-gray-500">Free Shipping</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="mt-2 text-xs text-gray-500">Same Day Dispatch</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Author Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-24 bg-gray-50 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">About the Author</h2>
          <div className="mt-6 flex flex-col sm:flex-row items-start gap-6">
            <img 
              src={product.authorImage || 'https://randomuser.me/api/portraits/women/65.jpg'} 
              alt={product.author}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{product.author}</h3>
              <p className="mt-2 text-gray-600">
                {product.authorBio || `${product.author} is an award-winning author with over ${Math.floor(Math.random() * 20) + 5} published works. Their writing has been praised for its depth, originality, and emotional resonance. ${product.author} holds a degree in Creative Writing from ${['Harvard University', 'Yale University', 'Oxford University', 'Cambridge University'][Math.floor(Math.random() * 4)]} and currently resides in ${['New York', 'London', 'Paris', 'Toronto'][Math.floor(Math.random() * 4)]}.`}
              </p>
              {product.authorAwards && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Awards & Honors</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    {product.authorAwards.map((award, index) => (
                      <li key={index} className="flex">
                        <span className="mr-2">•</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Book Reviews */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-24"
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Reader Reviews</h2>
          
          {/* Review Summary */}
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center">
              <div className="mr-8">
                <p className="text-5xl font-bold">{product.rating}</p>
                <div className="flex mt-1">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${product.rating > rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">Based on {reviews.length} reviews</p>
              </div>
              <div className="flex-1">
                {[5, 4, 3, 2, 1].map((star) => {
                  const count = reviews.filter(r => r.rating === star).length;
                  const percentage = (count / reviews.length) * 100;
                  return (
                    <div key={star} className="flex items-center mb-2">
                      <span className="w-10 text-sm font-medium text-gray-900">{star}</span>
                      <StarIcon className="h-4 w-4 text-yellow-400 ml-1" />
                      <div className="ml-2 w-full flex-1">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.8 }}
                            className="h-full bg-yellow-400"
                          />
                        </div>
                      </div>
                      <span className="ml-2 w-10 text-right text-sm text-gray-500">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="mt-8 space-y-8">
            {reviews.map((review) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="border-t border-gray-200 pt-8"
              >
                <div className="flex items-start">
                  <img
                    src={review.avatar}
                    alt={`${review.user}'s avatar`}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{review.user}</p>
                        <div className="flex mt-1">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={`h-4 w-4 flex-shrink-0 ${review.rating > rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                    <div className="mt-3 flex space-x-4">
                      <button className="text-xs text-gray-500 hover:text-gray-700">Helpful</button>
                      <button className="text-xs text-gray-500 hover:text-gray-700">Report</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add Review Form */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-lg font-medium text-gray-900">Write a Review</h3>
            <p className="mt-1 text-sm text-gray-600">Share your thoughts with other readers</p>
            
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                  Your Rating
                </label>
                <select
                  id="rating"
                  name="rating"
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                  defaultValue="5"
                >
                  <option value="5">5 Stars - Loved it</option>
                  <option value="4">4 Stars - Really liked it</option>
                  <option value="3">3 Stars - Liked it</option>
                  <option value="2">2 Stars - It was okay</option>
                  <option value="1">1 Star - Didn't like it</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Review Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="Summarize your opinion in a few words"
                />
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                  Your Review
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="What did you like or dislike? Would you recommend this book?"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Submit Review
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Related Books */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Readers Also Enjoyed</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <motion.div 
                key={relatedProduct.id} 
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
                  <img
                    src={relatedProduct.imageSrc}
                    alt={relatedProduct.name}
                    className="h-full w-full object-contain object-center p-4"
                  />
                </div>
                <div className="mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product/${relatedProduct.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">by {relatedProduct.author}</p>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={`h-4 w-4 flex-shrink-0 ${relatedProduct.rating > rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 w-full bg-gray-100 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductDetailPage;