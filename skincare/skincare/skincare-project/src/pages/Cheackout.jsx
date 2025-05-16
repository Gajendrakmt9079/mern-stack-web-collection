import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  useCartStore } from '../context/CartContext'



function CheckoutPage() {
 const { items, addItem, removeItem, updateQuantity, total } = useCartStore();
  const navigate = useNavigate()
  

  

  
 
  
  return (
    <div className="py-12 md:px-12 px-2">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form >
            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                  
                 
                    className={`w-full p-2 border rounded-md`}
                  />
               
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                 
                  
                    className={`w-full p-2 border rounded-md `}
                  />
                 
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
               
              
                  className={`w-full p-2 border rounded-md`}
                />
              
              </div>
              
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address*
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
             
                  className={`w-full p-2 border rounded-md `}
                />
           
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
               
                    className={`w-full p-2 border rounded-md`}
                  />
                 
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State/Province*
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    
                    className={`w-full p-2 border rounded-md`}
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP/Postal Code*
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                  
                    className={`w-full p-2 border rounded-md`}
                  />
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Payment Information</h2>
              
              <div className="flex items-center mb-4">
               
                <span className="text-sm text-gray-600">Your payment information is secure and encrypted</span>
              </div>
              
              <div className="mb-4">
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                   <input type="radio" value={"cardName"}  className='pl-4'/>
                  <span className='pl-3'>Cash On Delhivary*</span> 
                </label>
              </div>
            </div>
            
            <Link to={"/OrderConfirmation"} type="submit" className="btn btn-primary w-full py-3">
              Place Order
            </Link>
          </form>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="mb-4">
              {items.map(item => (
                <div key={item.id} className="flex justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 mr-2">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm">
                      {item.name} <span className="text-gray-500">x{item.quantity}</span>
                    </span>
                  </div>
                  <span className="font-medium">${(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(total()* 0.1)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>${(total()+ total() * 0.1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage