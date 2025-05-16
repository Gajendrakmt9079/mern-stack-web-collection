import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribing email:', email)
      setIsSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-12 bg-secondary-light">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-2 text-3xl font-serif">Join Our Newsletter</h2>
          <p className="mb-6 text-neutral-dark">
            Subscribe to receive updates, exclusive offers, and skincare tips.
          </p>
          {isSubmitted ? (
            <div className="p-4 text-green-800 bg-green-100 rounded-md">
              <p>Thank you for subscribing! You'll receive our next newsletter soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow input"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter