import React from 'react';
import logoText from '../assets/logo-text.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logoText} alt="DevStack Logo" className="h-8 object-contain" />
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-pink-600 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-pink-600 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a>
            <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-700 px-3 py-1.5 hover:text-black">Sign In</button>
            <button className="text-sm font-semibold text-white px-5 py-2 rounded-full brand-gradient-bg shadow-sm hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;