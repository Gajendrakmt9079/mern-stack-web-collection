import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({ products, title }) => {
  return (
    <div className="container py-12">
      {title && (
        <h2 className="mb-8 text-3xl font-serif text-center">{title}</h2>
      )}
      <div className="grid grid-cols-1    sm:grid-cols-2 md:grid-cols-4 gap-5 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid