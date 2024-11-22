import React from 'react';
import { Car, Calendar, Image, BookOpen, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Car className="w-8 h-8 text-red-600" />
            <span className="ml-2 text-xl font-bold">RacingElite</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600 flex items-center gap-2">
              <Car className="w-5 h-5" />
              Cars
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Events
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 flex items-center gap-2">
              <Image className="w-5 h-5" />
              Gallery
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Blog
            </a>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-50">Cars</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-50">Events</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-50">Gallery</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-50">Blog</a>
              <button className="w-full mt-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}