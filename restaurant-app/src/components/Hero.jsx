import React from 'react';
import AuthCard from './AuthCard';

const Hero = () => {
  return (
    <section id="hero" className="hero" aria-label="Hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">Craft Coffee.<br/>Cozy Vibes.</h1>
          <p className="hero-sub">A boutique café in the heart of the city, serving hand-roasted coffee, fresh pastries, and unforgettable mornings.</p>

          <div className="btn-row">
            <button className="btn btn-primary">View Signature Menu</button>
            <button className="btn btn-outline">Find Us</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="stack-card" style={{ backgroundImage: "url('/Images/hero_1.png')" }} />
          <div className="stack-card" style={{ backgroundImage: "url('/Images/hero_2.png')" }} />
        </div>

        {/* auth card placed over hero */}
        <AuthCard />
      </div>
    </section>
  );
};

export default Hero;
