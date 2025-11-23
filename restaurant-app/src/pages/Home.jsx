import React from 'react';
import Hero from '../components/Hero';
import Discounts from '../components/Discounts';
import WhatsNew from '../components/WhatsNew';
import Footer from '../components/Footer';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Discounts />
        <WhatsNew />
        <div id="gallery" style={{ minHeight: '60vh', background:'var(--bg)' }}></div>
        <div id="contact" style={{ minHeight: '40vh', background:'var(--surface)' }}></div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
