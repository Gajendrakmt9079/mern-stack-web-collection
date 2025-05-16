import React from 'react';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCartStore } from '../context/CartContext';

const Cart = () => {
  const { items, addItem, removeItem, updateQuantity, total } = useCartStore();

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-serif">Your Cart</h1>

      {items.length === 0 ? (
        <div className="p-8 text-center">
          <p className="mb-4 text-lg text-neutral-dark">Your cart is empty.</p>
          <Link to="/" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden border rounded-lg border-neutral-light">
              <table className="w-full">
                <thead className="bg-neutral-lightest">
                  <tr>
                    <th className="px-4 py-3 text-left">Product</th>
                    <th className="px-4 py-3 text-center">Quantity</th>
                    <th className="px-4 py-3 text-right">Price</th>
                    <th className="px-4 py-3 text-right">Total</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-t border-neutral-light">
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-16 h-16 mr-4 rounded"
                          />
                          <div>
                            <Link to={`/product/${item.id}`} className="font-medium hover:text-primary-dark">
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-neutral-dark hover:text-primary-dark"
                            aria-label="Decrease quantity"
                          >
                            <FiMinus />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-neutral-dark hover:text-primary-dark"
                            aria-label="Increase quantity"
                          >
                            <FiPlus />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">${item.price.toFixed(2)}</td>
                      <td className="px-4 py-4 text-right">${(item.price * item.quantity)}</td>
                      <td className="px-4 py-4 text-right">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-neutral-dark hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <Link to="/" className="flex items-center text-primary-dark hover:underline">
                <FiArrowLeft className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="p-6 border rounded-lg border-neutral-light">
              <h2 className="mb-4 text-xl font-medium">Order Summary</h2>
              <div className="mb-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-dark">Subtotal</span>
                  <span>${total()}</span>
                </div>
                
              </div>
              <div className="pt-4 mb-6 border-t border-neutral-light">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="text-lg font-medium">${(total())}</span>
                </div>
              </div>
              <Link to={'/cheakout'}  className="w-full btn btn-primary">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
