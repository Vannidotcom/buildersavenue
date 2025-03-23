import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4">
              <img src="/logo.png" alt="Builders Avenue" className="h-14 w-auto" />
              <div className="hidden lg:flex flex-col text-sm text-gray-600">
                <a href="tel:0201220888" className="hover:text-yellow-600">0201220888</a>
                <a href="tel:0256039715" className="hover:text-yellow-600">0256039715</a>
                <a href="tel:0269387964" className="hover:text-yellow-600">0269387964</a>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-yellow-500">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-yellow-500">About</Link>
            <Link to="/products" className="text-gray-700 hover:text-yellow-500">Products</Link>
            <Link to="/services" className="text-gray-700 hover:text-yellow-500">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link>
            <a 
              href="tel:0201220888" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 lg:hidden"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100">About</Link>
          <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100">Products</Link>
          <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100">Services</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100">Contact</Link>
          <div className="px-3 py-2 text-sm text-gray-600 lg:hidden">
            <a href="tel:0201220888" className="block hover:text-yellow-600">0201220888</a>
            <a href="tel:0256039715" className="block hover:text-yellow-600">0256039715</a>
            <a href="tel:0269387964" className="block hover:text-yellow-600">0269387964</a>
          </div>
        </div>
      </div>
    </nav>
  );
}