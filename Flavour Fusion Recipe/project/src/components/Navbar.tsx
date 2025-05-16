import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChefHat } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/classes", label: "Classes" },
    { path: "/events", label: "Events" },
    { path: "/calendar", label: "Calendar" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/privacy", label: "Privacy" },
    { path: "/terms", label: "Terms" },
  ];

  return (
    <nav className="bg-[#333333] shadow-lg  fixed w-full z-50 h-[86px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  ">
          {/* Desktop Navigation */}
          <div className=" hidden md:flex items-center space-x-8">
            {" "}
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "text-orange-500" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>


          <Link to="/" className="flex items-center space-x-2">
            <img src="./logo.png" alt="" width={110}  />
          </Link>
          <div className=" hidden md:flex items-center space-x-8">
            {navLinks.slice(4, 7).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "text-orange-500" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#333333]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-center px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "text-orange-500 bg-gray-800"
                    : "nav-link"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
