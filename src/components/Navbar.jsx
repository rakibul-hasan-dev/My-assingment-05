import { useState } from 'react';
import hamburgerIcon from '../assets/hamburger.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Dev<span className="text-blue-500">Stack</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Technologies</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">About Us</li>
        </ul>

        {/* Action Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm font-medium hover:text-blue-400 transition-colors">
            Sign In
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <img src={hamburgerIcon} alt="menu" className="w-7 h-7 object-contain" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-slate-900">
          <ul className="flex flex-col space-y-3 px-2 font-medium">
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-400 cursor-pointer py-1">Home</li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-400 cursor-pointer py-1">Technologies</li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-400 cursor-pointer py-1">Projects</li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-400 cursor-pointer py-1">About Us</li>
          </ul>
          <div className="mt-4 pt-2 border-t border-slate-800 flex flex-col space-y-2">
            <button className="w-full text-center py-2 text-sm font-medium hover:text-blue-400">
              Sign In
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-sm font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;