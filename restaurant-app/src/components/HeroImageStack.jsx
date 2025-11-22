import React from 'react';

const HeroImageStack = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute top-0 right-0 w-48 h-64 bg-secondary rounded-lg shadow-lg transform rotate-6 translate-x-4 -translate-y-4 transition-transform duration-500 hover:scale-105"></div>
      <div className="absolute bottom-0 left-0 w-56 h-72 bg-surface rounded-lg shadow-lg transform -rotate-8 -translate-x-4 translate-y-4 transition-transform duration-500 hover:scale-105"></div>
      <div className="relative w-64 h-80 bg-card rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-2">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" alt="Restaurant" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export default HeroImageStack;
