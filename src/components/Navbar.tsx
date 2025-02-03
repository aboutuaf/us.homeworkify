import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Homeworkify</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <Link to="/earn" className="text-gray-600 hover:text-gray-900">Earn Money</Link>
            <Link to="/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link>
            <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
            <Link to="/earn" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Earn Money</Link>
            <Link to="/signin" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Sign In</Link>
            <Link to="/signup" className="block px-3 py-2 text-white bg-indigo-600 rounded-md">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar