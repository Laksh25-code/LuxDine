import React from 'react';

const Hero = () => {
  const handleScrollToReservation = (e) => {
    e.preventDefault();
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/Images/hero_1.png")' }}>
      <div className="absolute inset-0 bg-charcoal-deep opacity-60"></div> {/* Dark overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-cream-soft p-8 max-w-2xl mx-auto backdrop-filter backdrop-blur-md bg-white bg-opacity-10 rounded-lg shadow-xl border border-gray-700">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4 text-gold-warm leading-tight">
            LuxDine
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-6">
            Where every meal feels like an occasion.
          </p>
          <p className="text-lg md:text-xl mb-8">
            Experience exquisite dining, crafted with passion and served with elegance.
          </p>
          <button
            onClick={handleScrollToReservation}
            className="bg-gold-warm hover:bg-gold-warm/90 text-charcoal-deep font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Book a Table
          </button>
        </div>
      </div>

      {/* Floating "Quick Reserve" CTA - Placeholder for now */}
      {/* This will likely be placed in the parent (Home) component for better control */}
      {/* <div className="absolute bottom-8 right-8 z-20">
        <button className="w-16 h-16 rounded-full bg-crimson flex items-center justify-center text-cream-soft text-sm font-bold shadow-lg transform transition duration-300 hover:scale-110">
          Reserve
        </button>
      </div> */}
    </section>
  );
};

export default Hero;