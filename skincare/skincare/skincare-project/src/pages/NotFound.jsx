import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container py-16">
      <div className="max-w-md mx-auto text-center">
        <h1 className="mb-4 text-6xl font-serif text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-medium">Page Not Found</h2>
        <p className="mb-8 text-neutral-dark">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound