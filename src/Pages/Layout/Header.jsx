import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isViewAllProjects = location.pathname === "/view-projects";

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo or View All Projects */}
          <Link to="/" className="flex items-center">
            {isHome ? (
              <img
                src="/Images/logo.png"
                alt="Fundify Logo"
                className="h-14 w-14"
              />
            ) : isViewAllProjects ? (
              <img
                src="/Images/logo2.png"
                alt="View All Projects Logo"
                className="h-14 w-14"
              />
            ) : (
              <span className="text-white text-lg font-semibold">
                View All Projects
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 max-w-4xl mx-auto px-8">
            {/* Left Navigation Group */}
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`${
                  isHome ? "text-white" : "text-gray-500"
                } hover:text-gray-300`}
              >
                Home
              </Link>
              <Link
                to="/donate"
                className={`${
                  isHome ? "text-white" : "text-gray-500"
                } hover:text-gray-300`}
              >
                Donate
              </Link>
              <Link
                to="/about"
                className={`${
                  isHome ? "text-white" : "text-gray-500"
                } hover:text-gray-300`}
              >
                About Us
              </Link>
            </div>

            {/* Right Navigation Group */}
            <div className="flex space-x-8">
              <Link
                to="/create"
                className={`${
                  isHome ? "text-white" : "text-gray-500"
                } hover:text-gray-300`}
              >
                Create Campaign
              </Link>
              <Link
                to="/login"
                className={`${
                  isHome ? "text-white" : "text-gray-500"
                } hover:text-gray-300`}
              >
                Login/Sign Up
              </Link>
              <Link
                to="/contact"
                className={`${isHome ? "text-white" : "text-gray-500"}
                  hover:text-gray-300`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-black/90 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link to="/donate" className="text-white hover:text-gray-300">
                Donate
              </Link>
              <Link to="/about" className="text-white hover:text-gray-300">
                About Us
              </Link>
              <Link to="/create" className="text-white hover:text-gray-300">
                Create Campaign
              </Link>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login/Sign Up
              </Link>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
