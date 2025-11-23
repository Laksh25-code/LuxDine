import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream-soft text-charcoal-deep">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 text-gold-warm">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Left Column: Brief Story */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed mb-4">
              Welcome to LuxDine, where culinary artistry meets unparalleled elegance. Established with a passion for
              exquisite flavors and a commitment to exceptional service, LuxDine offers a dining experience
              that transcends the ordinary. Our journey began with a simple vision: to create a sanctuary
              where guests can savor meticulously crafted dishes in an atmosphere of refined luxury.
            </p>
            <p className="text-lg leading-relaxed">
              We believe in the power of fresh, locally sourced ingredients to transform a meal into a memorable occasion.
              Our chefs are dedicated to innovation, blending traditional techniques with contemporary flair to
              present dishes that are both comforting and exciting. Come, be a part of our story, and let us
              delight your senses.
            </p>
          </div>

          {/* Right Column: Chef Photo or Values */}
          <div className="md:w-1/2">
            <img
              src="/Images/hero_2.png" // Placeholder image for chef/values
              alt="LuxDine Chef or Interior"
              className="rounded-lg shadow-lg w-full h-80 object-cover object-center"
            />
            <p className="text-center text-text-secondary italic mt-4">
              "Crafting unforgettable moments, one dish at a time."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;