import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skin Care', path: '/skin-care' },
    { name: 'Kids Care', path: '/kids-care' },
    { name: 'Hair Care', path: '/hair-care' },
    { name: 'Bestsellers', path: '/bestsellers' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="trihard Logo" className="w-full h-8 mr-2" />
          
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'font-medium text-lg '
                        : 'text-neutral-dark text-lg  transition-colors'
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 transition-colors rounded-full hover:bg-neutral-light"
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="p-2 transition-colors rounded-full hover:bg-neutral-light"
              aria-label="Cart"
            >
              <FiShoppingBag className="w-5 h-5" />
            </Link>
            <button
              className="hidden p-2 transition-colors rounded-full md:block hover:bg-neutral-light"
              aria-label="Account"
            >
              <FiUser className="w-5 h-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 transition-colors rounded-full md:hidden hover:bg-neutral-light"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-3 mt-4 border-t border-neutral-light">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 pl-10 pr-4 border rounded-full border-neutral focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FiSearch className="absolute w-5 h-5 text-neutral-dark top-2.5 left-3" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="py-4 mt-4 border-t md:hidden border-neutral-light">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'block font-medium text-primary-dark'
                        : 'block text-neutral-dark hover:text-primary-dark transition-colors'
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <button className="flex items-center text-neutral-dark hover:text-primary-dark">
                  <FiUser className="w-5 h-5 mr-2" />
                  <span>Account</span>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar