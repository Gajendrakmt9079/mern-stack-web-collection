import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-serif">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-neutral-dark">
          Have questions or feedback? We'd love to hear from you. Fill out the form below
          or reach out to us directly using the contact information provided.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          {isSubmitted ? (
            <div className="p-6 text-center">
              <div className="mb-4 text-5xl text-primary">✓</div>
              <h2 className="mb-2 text-2xl font-medium">Thank You!</h2>
              <p className="mb-4 text-neutral-dark">
                Your message has been sent successfully. We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn btn-primary"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-1 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="input"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div>
          <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
            <h2 className="mb-4 text-xl font-medium">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex items-center justify-center w-10 h-10 mr-4 text-white bg-primary rounded-full">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-neutral-dark">214 Sunnyholt Rd ,<br />	Sydney ,New South Wales 2148 Australia</p><br />
                  <p className="text-neutral-dark">Carlton ,Goole ,North Humberside , <br /> DN14 9LZ ,United Kingdom</p><br />
                  <p className="text-neutral-dark">3840 E 104th Ave ,Thornton , <br />Colorado ,80233 ,United States</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center justify-center w-10 h-10 mr-4 text-white bg-primary rounded-full">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-neutral-dark">
                    <a href="mailto:info@Trihardskincare.com" className="hover:text-primary-dark">
                      info@Trihardskincare.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center justify-center w-10 h-10 mr-4 text-white bg-primary rounded-full">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-neutral-dark">
                    <a href="tel:+1234567890" className="hover:text-primary-dark">
                    <strong>phone:((303) 255-0596)</strong><br />
                    <strong>phone:(01405 861662)</strong><br />
            <strong>phone:(01405 861662)</strong><br />

                    </a>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center justify-center w-10 h-10 mr-4 text-white bg-primary rounded-full">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-neutral-dark">Monday - Friday: 9am - 5pm EST</p>
                  <p className="text-neutral-dark">Saturday: 10am - 2pm EST</p>
                  <p className="text-neutral-dark">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="mb-4 text-xl font-medium">Customer Support</h2>
            <p className="mb-4 text-neutral-dark">
              Our customer support team is available to assist you with any questions or concerns
              about our products or services.
            </p>
            <p className="text-neutral-dark">
              For order inquiries, please have your order number ready when contacting us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact