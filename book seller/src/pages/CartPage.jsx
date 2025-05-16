import React from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'

function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="mt-4 text-gray-500">Browse our collection to add items to your cart.</p>
          <Link
            to="/shop"
            className="mt-8 inline-block rounded-md bg-[#F36C33] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>
      <div className="mt-12">
        <div className="flow-root">
          <ul className="-my-6 divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.name}</h3>
                      <p className="ml-4">{item.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center">
                      <label htmlFor={`quantity-${item.id}`} className="mr-2">
                        Qty
                      </label>
                      <input
                        type="number"
                        id={`quantity-${item.id}`}
                        className="w-16 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="font-medium text-primary-600 hover:text-primary-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 py-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${getTotal().toFixed(2)}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <Link
            to="/checkout"
            className="flex items-center justify-center rounded-md border border-transparent bg-[#F36C33] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-500"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{' '}
            <Link to="/shop" className="font-medium text-primary-600 hover:text-primary-500">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartPage