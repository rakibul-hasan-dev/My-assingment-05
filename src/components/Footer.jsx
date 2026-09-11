import React from 'react';
import logoText from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-3">
            <img src={logoText} alt="DevStack Logo" className="h-8 object-contain" />
            <p className="text-xs text-gray-400 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-gray-600">
              <a href="#" className="hover:text-black">GitHub</a>
              <a href="#" className="hover:text-black">Twitter</a>
              <a href="#" className="hover:text-black">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">Product</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">Technologies</a></li>
              <li><a href="#" className="hover:text-black">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;