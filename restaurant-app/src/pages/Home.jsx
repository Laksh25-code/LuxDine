import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div id="about" className="h-screen bg-surface"></div>
        <div id="whats-new" className="h-screen bg-background"></div>
        <div id="gallery" className="h-screen bg-surface"></div>
        <div id="contact" className="h-screen bg-background"></div>
      </main>
    </>
  );
};

export default Home;
