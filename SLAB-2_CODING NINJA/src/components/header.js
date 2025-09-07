import React, { useState } from 'react';
import { Menu, X, Search, User, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-cn-blue" />
            <span className="ml-2 text-2xl font-bold text-cn-blue">Coding Ninjas</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-cn-orange font-medium">Courses</a>
            <a href="#practice" className="text-gray-700 hover:text-cn-orange font-medium">Practice</a>
            <a href="#events" className="text-gray-700 hover:text-cn-orange font-medium">Events</a>
            <a href="#campus" className="text-gray-700 hover:text-cn-orange font-medium">Campus Ninjas</a>
            <a href="#blog" className="text-gray-700 hover:text-cn-orange font-medium">Blog</a>
          </nav>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer" />
            <button className="bg-cn-orange text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#courses" className="text-gray-700 hover:text-cn-orange font-medium">Courses</a>
              <a href="#practice" className="text-gray-700 hover:text-cn-orange font-medium">Practice</a>
              <a href="#events" className="text-gray-700 hover:text-cn-orange font-medium">Events</a>
              <a href="#campus" className="text-gray-700 hover:text-cn-orange font-medium">Campus Ninjas</a>
              <a href="#blog" className="text-gray-700 hover:text-cn-orange font-medium">Blog</a>
              <div className="flex items-center space-x-2 pt-3">
                <Search className="h-5 w-5 text-gray-600" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="border rounded-md px-3 py-1 text-sm w-full"
                />
              </div>
              <button className="bg-cn-orange text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition mt-2">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;