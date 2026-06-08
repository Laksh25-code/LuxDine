import React from 'react';
import hero2 from '../Images/hero_2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-cream-soft text-charcoal-deep"
    >
      <div className="container mx-auto px-4 md:px-8">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gold-warm">
          Our Story
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">

          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed mb-4">
              Welcome to LuxDine, where culinary artistry meets
              unparalleled elegance.
            </p>

            <p className="text-lg leading-relaxed">
              We believe in the power of fresh, locally sourced
              ingredients to create memorable dining experiences.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src={hero2}
              alt="LuxDine Interior"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />

            <p className="text-center italic mt-4">
              "Crafting unforgettable moments, one dish at a time."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;