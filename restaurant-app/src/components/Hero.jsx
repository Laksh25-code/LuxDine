import React from 'react';
import AuthCard from './AuthCard';
import HeroImageStack from './HeroImageStack';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-8">
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-primary mb-4 leading-tight">
            Craft Coffee.
            <br />
            Cozy Vibes.
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            A boutique café in the heart of the city, serving hand-roasted coffee, fresh pastries, and unforgettable mornings.
          </p>
          <div className="flex space-x-4">
            <button className="bg-accent text-primary font-bold py-3 px-6 rounded-md hover:scale-105 transform transition-transform duration-300">
              View Signature Menu
            </button>
            <button className="border-2 border-accent text-accent font-bold py-3 px-6 rounded-md hover:scale-105 transform transition-transform duration-300">
              Find Us
            </button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <HeroImageStack />
        </div>
        <div className="absolute top-1/2 right-16 transform -translate-y-1/2 hidden xl:block">
            <AuthCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
