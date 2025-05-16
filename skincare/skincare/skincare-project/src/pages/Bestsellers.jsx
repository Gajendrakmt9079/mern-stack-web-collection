import React from 'react'
import ProductGrid from '../components/ProductGrid'
import products from '../data/products'

const Bestsellers = () => {
  // Filter bestseller products
  const bestsellers = products.filter(product => product.isBestseller)

  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-serif">Bestsellers</h1>
        <p className="max-w-2xl mx-auto text-neutral-dark">
          Our most popular products loved by customers. These fan favorites have earned their spot
          through exceptional quality, effectiveness, and customer satisfaction.
        </p>
      </div>
      
      <ProductGrid products={bestsellers} />
    </div>
  )
}

export default Bestsellers