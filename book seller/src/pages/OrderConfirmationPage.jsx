import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

function OrderConfirmationPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <CheckCircleIcon className="mx-auto h-12 w-12 text-green-600" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">Order Confirmed!</h1>
          <p className="mt-4 text-lg text-gray-500">
            Thank you for your order. We'll send you a confirmation email with your order details.
          </p>
          
          <div className="mt-8 space-y-4">
            <p className="text-sm text-gray-500">
              Order number: #2024-{Math.floor(Math.random() * 10000)}
            </p>
            <p className="text-sm text-gray-500">
              Estimated delivery: 7-10 business days
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/shop"
              className="inline-block rounded-md bg-[#F36C33] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmationPage