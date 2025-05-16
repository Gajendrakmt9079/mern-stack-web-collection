import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FiStar, FiShoppingBag, FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi'
import products from '../data/products'
import ProductGrid from '../components/ProductGrid'
import { useCartStore } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [relatedProducts, setRelatedProducts] = useState([])
  const [isAddedToCart, setIsAddedToCart] = useState(false)

 
    const { addItem } = useCartStore();
    const navigate = useNavigate();
  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === parseInt(id))
    setProduct(foundProduct)

    // Reset state when product changes
    setQuantity(1)
    setActiveTab('description')
    setIsAddedToCart(false)

    // Find related products (same category, different ID)
    if (foundProduct) {
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4)
      setRelatedProducts(related)
    }
  }, [id])

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    // In a real app, you would add the product to the cart here
    addItem({ ...product, id: parseInt(product.id) });
   
    navigate("/cart")
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 3000)
  }

  if (!product) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <p>Product not found.</p>
          <Link to="/" className="mt-4 btn btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm">
        <Link to="/" className="text-neutral-dark hover:text-primary-dark">
          Home
        </Link>
        <FiChevronRight className="mx-2 text-neutral" />
        <Link to={`/${product.category.toLowerCase().replace(' ', '-')}`} className="text-neutral-dark hover:text-primary-dark">
          {product.category}
        </Link>
        <FiChevronRight className="mx-2 text-neutral" />
        <span className="text-neutral-darkest">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="mb-2 text-3xl font-serif">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral'
                  }`}
                />
              ))}
            </div>
            <span className="mr-2 text-sm text-neutral-dark">{product.rating}</span>
            <span className="text-sm text-neutral-dark">({product.reviews} reviews)</span>
          </div>
          
          <p className="mb-4 text-2xl font-medium">${product.price.toFixed(2)}</p>
          
          <p className="mb-6 text-neutral-dark">{product.description}</p>
          
          {/* Product Meta */}
          <div className="p-4 mb-6 rounded-lg bg-neutral-lightest">
            <div className="mb-2">
              <span className="font-medium">Category:</span> {product.category}
            </div>
            <div className="mb-2">
              <span className="font-medium">Type:</span> {product.subcategory}
            </div>
            {product.skinType && (
              <div className="mb-2">
                <span className="font-medium">Suitable for:</span> {product.skinType.join(', ')}
              </div>
            )}
            {product.hairType && (
              <div className="mb-2">
                <span className="font-medium">Suitable for:</span> {product.hairType.join(', ')}
              </div>
            )}
            {product.ageRange && (
              <div className="mb-2">
                <span className="font-medium">Age Range:</span> {product.ageRange}
              </div>
            )}
            <div>
              <span className="font-medium">Concerns:</span> {product.concerns.join(', ')}
            </div>
          </div>
          
          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <span className="mr-4 font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md border-neutral">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-3 py-1 text-neutral-dark hover:text-primary-dark"
                aria-label="Decrease quantity"
              >
                <FiMinus />
              </button>
              <span className="w-10 text-center">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-1 text-neutral-dark hover:text-primary-dark"
                aria-label="Increase quantity"
              >
                <FiPlus />
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`flex items-center justify-center w-full mb-6 ${
              isAddedToCart ? 'bg-green-600 hover:bg-green-700' : 'btn-primary'
            } btn`}
          >
            {isAddedToCart ? (
              'Added to Cart!'
            ) : (
              <>
                <FiShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </>
            )}
          </button>
          
          {/* Product Tabs */}
          <div className="border-b border-neutral-light">
            <div className="flex">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-4 py-2 font-medium ${
                  activeTab === 'description'
                    ? 'text-primary-dark border-b-2 border-primary-dark'
                    : 'text-neutral-dark'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`px-4 py-2 font-medium ${
                  activeTab === 'ingredients'
                    ? 'text-primary-dark border-b-2 border-primary-dark'
                    : 'text-neutral-dark'
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab('how-to-use')}
                className={`px-4 py-2 font-medium ${
                  activeTab === 'how-to-use'
                    ? 'text-primary-dark border-b-2 border-primary-dark'
                    : 'text-neutral-dark'
                }`}
              >
                How to Use
              </button>
            </div>
          </div>
          
          <div className="py-4">
            {activeTab === 'description' && (
              <p className="text-neutral-dark">{product.description}</p>
            )}
            {activeTab === 'ingredients' && (
              <p className="text-neutral-dark">{product.ingredients}</p>
            )}
            {activeTab === 'how-to-use' && (
              <p className="text-neutral-dark">{product.howToUse}</p>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-serif">You May Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  )
}

export default ProductDetail