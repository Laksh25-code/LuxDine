import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal-deep text-cream-soft py-12 px-4 border-t border-border">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Restaurant Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gold-warm flex items-center justify-center text-charcoal-deep font-bold text-sm">LD</div>
            <span className="text-2xl font-bold font-heading text-gold-warm">LuxDine</span>
          </Link>
          <p className="text-text-secondary mb-2">123 Culinary Lane, Gourmet City, GC 45678</p>
          <p className="text-text-secondary mb-2">reservations@luxdine.com</p>
          <p className="text-text-secondary">+1 (555) 123-4567</p>
        </div>

        {/* Sitemap (example links) */}
        <div className="text-center md:text-left">
          <h3 className="text-gold-warm font-heading text-lg mb-4">Sitemap</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="text-text-secondary hover:text-gold-warm transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="text-text-secondary hover:text-gold-warm transition-colors duration-300">About</a></li>
            <li><a href="#discounts" className="text-text-secondary hover:text-gold-warm transition-colors duration-300">Discounts</a></li>
            <li><a href="#whats-new" className="text-text-secondary hover:text-gold-warm transition-colors duration-300">What's New</a></li>
            <li><a href="#gallery" className="text-text-secondary hover:text-gold-warm transition-colors duration-300">Gallery</a></li>
            <li><a href="#reservation" className="text-text-secondary hover:text-gold-warm transition-colors duration-300">Reservation</a></li>
            <li><a href="#contact" className="text-text-secondary hover:text-gold-warm transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h3 className="text-gold-warm font-heading text-lg mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-text-secondary hover:text-gold-warm transition-colors duration-300">
              {/* Facebook Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22c4.781-.75 8.438-4.887 8.438-9.879z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-text-secondary hover:text-gold-warm transition-colors duration-300">
              {/* Instagram Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 4c-2.73 0-3.14.01-4.22.06-1.08.05-1.78.22-2.42.47-.64.25-1.19.6-1.64 1.05-.45.45-.8.99-1.05 1.64-.25.64-.42 1.34-.47 2.42-.05 1.08-.06 1.49-.06 4.22s.01 3.14.06 4.22c.05 1.08.22 1.78.47 2.42.25.64.6 1.19 1.05 1.64.45.45.99.8 1.64 1.05.64.25 1.34.42 2.42.47 1.08.05 1.49.06 4.22.06s3.14-.01 4.22-.06c1.08-.05 1.78-.22 2.42-.47.64-.25 1.19-.6 1.64-1.05.45-.45.8-.99 1.05-1.64.25-.64.42-1.34.47-2.42.05-1.08.06-1.49.06-4.22s-.01-3.14-.06-4.22c-.05-1.08-.22-1.78-.47-2.42-.25-.64-.6-1.19-1.05-1.64-.45-.45-.99-.8-1.64-1.05-.64-.25-1.34-.42-2.42-.47C15.14 4.01 14.73 4 12 4zm0 2.2c2.43 0 2.68.01 3.63.06 1.02.05 1.43.2 1.76.33.3.12.5.28.69.47.19.19.35.39.47.69.13.33.28.74.33 1.76.05.95.06 1.2.06 3.63s-.01 2.68-.06 3.63c-.05 1.02-.2 1.43-.33 1.76-.12.3-.28.5-.47.69-.19.19-.39.35-.69.47-.33.13-.74.28-1.76.33-.95.05-1.2.06-3.63.06s-2.68-.01-3.63-.06c-1.02-.05-1.43-.2-1.76-.33-.3-.12-.5-.28-.69-.47-.19-.19-.35-.39-.47-.69-.13-.33-.28-.74-.33-1.76-.05-.95-.06-1.2-.06-3.63s.01-2.68.06-3.63c.05-1.02.2-1.43.33-1.76.12-.3.28-.5.47-.69.19-.19.39-.35.69-.47.33-.13.74-.28 1.76-.33.95-.05 1.2-.06 3.63-.06zM12 9a3 3 0 100 6 3 3 0 000-6zm0 2.2a.8.8 0 110 1.6.8.8 0 010-1.6z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-text-secondary hover:text-gold-warm transition-colors duration-300">
              {/* Twitter Icon (X) */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-text-secondary text-sm mt-8">
        © {new Date().getFullYear()} LuxDine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;