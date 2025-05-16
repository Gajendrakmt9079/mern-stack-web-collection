import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useCartStore from '../store/cartStore'

function CheckoutPage() {
  const navigate = useNavigate()
  const { items, getTotal, clearCart } = useCartStore()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',

  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would process the payment here
    clearCart()
    navigate('/order-confirmation')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Checkout</h1>

        <form onSubmit={handleSubmit} className="mt-12">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                    Street address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="postalCode" className="block text-sm font-medium leading-6 text-gray-900">
                    Postal code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Payment method</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className=" ">
                  <div className="flex items-center w-56 ">
                    <input
                      id="cod"
                      name="paymentMethod"
                      type="checkbox"

                      className="h-4 w-4 m-3 text-indigo-600 focus:ring-indigo-500 border-3 border-gray-300"
                      required
                    />
                    <label htmlFor="cod" className="ml-3 w-56   text-gray-700">
                      cash on delivery
                    </label>
                  </div>
                </div>

              </div>
            </div>
            <div className=" ">
              <div className="flex ">
                <input
                  id="cod"
                  name="paymentMethod"
                  type="checkbox"

                  className="h-4 w-4 m-3 text-indigo-600 focus:ring-indigo-500 border-3 border-gray-300"
                  required
                />
                <label htmlFor="cod" className="ml-3 block   text-gray-700">
                  By submitting this form, you agree to receive text messages from
                  shadenest. Message and data rates may apply. Message frequency varies.
                  Reply STOP to opt out. You also agree to shadenest's{" "}
                  <Link
                    to="/PrivacyPolicy"
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and understand that your personal information will be used solely
                  for the purpose of addressing your inquiry.
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 py-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total</p>
              <p>${getTotal().toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping included.</p>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-[#F36C33] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-500"
            >
              Complete Order
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutPage