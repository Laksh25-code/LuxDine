import React from 'react';
import { Link } from 'react-router-dom';

const SmoothScrollNav = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(to);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={to} onClick={handleClick} className="text-text-primary hover:text-accent transition-colors duration-300">
      {children}
    </a>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 px-8 bg-surface shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-accent">LuxDine</Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <SmoothScrollNav to="#hero">Home</SmoothScrollNav>
          <SmoothScrollNav to="#about">About</SmoothScrollNav>
          <SmoothScrollNav to="#whats-new">What's New</SmoothScrollNav>
          <SmoothScrollNav to="#gallery">Gallery</SmoothScrollNav>
          <SmoothScrollNav to="#contact">Contact</SmoothScrollNav>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-text-primary hover:text-accent transition-colors duration-300">Login</Link>
          <Link to="/register" className="text-text-primary hover:text-accent transition-colors duration-300">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
