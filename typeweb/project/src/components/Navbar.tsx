import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mountain } from "lucide-react";
import { Link } from "./ui/Link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4 "
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="#home" className={`text-2xl font-bold flex text-blue-900  space-x-2 items-center  ${isScrolled ? "text-blue-900" : "text-white"}`}>
            

            <span> Khoraniya tyres</span>
          </Link>
        </div>

        {/* Mobile call button */}
        <div className="md:hidden flex items-center">
          <a
            href="tel:+1234567890"
            className="mr-4 bg-red-600 text-white p-2 rounded-full"
            aria-label="Call us"
          >
            <Phone size={20} />
          </a>
          <button
            onClick={toggleMenu}
            className={` focus:outline-none ${isScrolled ? "text-blue-900" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#home"
            className={` hover:text-red-600 transition-colors ${
              isScrolled ? "text-blue-900" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="#services"
            className={` hover:text-red-600 transition-colors ${
              isScrolled ? "text-blue-900" : "text-white"
            }`}
          >
            Services
          </Link>
          <Link
            href="#about"
            className={` hover:text-red-600 transition-colors ${
              isScrolled ? "text-blue-900" : "text-white"
            }`}
          >
            About Us
          </Link>

          <Link
            href="#contact"
            className={` hover:text-red-600 transition-colors ${
              isScrolled ? "text-blue-900" : "text-white"
            }`}
          >
            Contact
          </Link>
          <a
            href="tel:+91 9460777239"
            className={`bg-transparent  border border-gray-500  py-2 px-4 rounded-md transition-colors flex items-center ${isScrolled ? "text-blue-900 hover:bg-black  hover:text-white" : "text-white hover:bg-white hover:text-black"}`}
          >
            <Phone size={16} className="mr-2" />+91 9460777239
          </a>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link
            href="#home"
            className="text-blue-900 hover:text-red-600 transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-blue-900 hover:text-red-600 transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-blue-900 hover:text-red-600 transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          
         
          <Link
            href="#contact"
            className="text-blue-900 hover:text-red-600 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
