import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, Phone } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-lg flex justify-between fixed top-0 z-50 w-full `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="">
            <img
              src="./whitelogo.png"
              alt=""
              className="w-[70px]  hidden dark:block"
            />
            <img src="./blacklogo.png" alt="" className="w-20 dark:hidden" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link
              to="/classes"
              className="hover:text-orange-500 transition-colors"
            >
              Classes
            </Link>
            <Link
              to="/events"
              className="hover:text-orange-500 transition-colors"
            >
              Events
            </Link>
            <Link
              to="/contact"
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="hover:text-orange-500 transition-colors"
            >
              About
            </Link>
          </div>
          <div>
            <span className="p-1  gap-2 hidden md:flex  rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Phone className="w-5" /> <p>(937) 390-0470</p>
            </span>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link
                to="/classes"
                className="hover:text-orange-500 transition-colors"
              >
                Classes
              </Link>
              <Link
                to="/events"
                className="hover:text-orange-500 transition-colors"
              >
                Events
              </Link>
              <Link
                to="/contact"
                className="hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="hover:text-orange-500 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
