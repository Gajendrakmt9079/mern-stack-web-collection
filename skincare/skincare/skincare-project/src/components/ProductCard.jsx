import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiStar, FiShoppingBag } from 'react-icons/fi'
import { useCartStore } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { id, name, image, price, rating, category, isNew, isBestseller ,hoverImage } = product
  const { addItem } = useCartStore();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleAddToCart = () => {
    addItem({ ...product, id: parseInt(product.id) });
   
   navigate("/cart")

  };
  return (
    <div className="card w-72 hover:scale-105 bg-gray-200 flex flex-wrap justify-center">
     <div
      className="relative w-full h-96 transition-all duration-300"
      style={{
        backgroundImage: `url(${isHovered ? hoverImage : image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

       
        {isNew && (
          <span className="absolute px-2 py-1 text-xs font-medium text-white bg-secondary-dark top-2 left-2 rounded-md">
            New
          </span>
        )}
        {isBestseller && (
          <span className="absolute px-2 py-1 text-xs font-medium text-white bg-primary-dark top-2 right-2 rounded-md">
            Bestseller
          </span>
        )}
        {/* <button
          onClick={handleAddToCart}
          className="absolute flex z-30 items-center justify-center w-10 h-10 transition-all translate-y-2 bg-white rounded-full opacity-0 bottom-4 right-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary hover:text-white"
          aria-label="Add to cart"
        >
          <FiShoppingBag className="w-5 h-5" />
        </button> */}
      </div>
      <Link to={`/product/${id}`} className="block mb-1 ">

      <div className="p-4 flex justify-center flex-wrap flex-row">

        <div className="mb-1 text-sm text-neutral-dark">{category}</div>
          <h3 className="font-medium font-mono text-center text-xl ">{name}</h3>
        
        <div className="flex items-center justify-center flex-col mb-2 ">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral'
                  }`}
              />
            ))}
             <span className="text-sm ml-3 text-neutral-dark">{rating}</span> <br />
          </div>
         
          <span className="font-medium text-2xl text-[#6F1E5D]">${price.toFixed(2)}</span>
        </div>
      </div>
      </Link>

    </div>
  )
}

export default ProductCard

