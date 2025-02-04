import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">Rabindra Maitree University</h1>
              <p className="text-xs text-blue-200">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-200">Home</a>
            <a href="#academics" className="hover:text-blue-200">Academics</a>
            <a href="#admissions" className="hover:text-blue-200">Admissions</a>
            <a href="#research" className="hover:text-blue-200">Research</a>
            <a href="#campus-life" className="hover:text-blue-200">Campus Life</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 hover:bg-blue-800">Home</a>
            <a href="#academics" className="block px-3 py-2 hover:bg-blue-800">Academics</a>
            <a href="#admissions" className="block px-3 py-2 hover:bg-blue-800">Admissions</a>
            <a href="#research" className="block px-3 py-2 hover:bg-blue-800">Research</a>
            <a href="#campus-life" className="block px-3 py-2 hover:bg-blue-800">Campus Life</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-blue-800">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}