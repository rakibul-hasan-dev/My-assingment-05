import React from 'react';
import bannerStack from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <header id="home" className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <a href="#technologies" className="text-sm font-semibold text-white px-6 py-2.5 rounded-md brand-gradient-bg shadow-sm hover:opacity-90">
              Explore Technologies
            </a>
            <button className="text-sm font-semibold text-gray-700 px-6 py-2.5 rounded-md border border-gray-300 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={bannerStack} alt="Dev Stack Banner" className="w-full max-w-md object-contain" />
        </div>
      </div>
    </header>
  );
};

export default Hero;