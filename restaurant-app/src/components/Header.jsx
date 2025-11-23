import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Discounts', href: '#discounts' },
  { name: 'What\'s New', href: '#whats-new' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reservation', href: '#reservation' },
  { name: 'Contact', href: '#contact' },
];

const SmoothScrollNav = ({ to, children, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(to);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick(); // Close mobile menu if open
    }
  };

  return (
    <a href={to} onClick={handleClick} className="text-cream-soft hover:text-gold-warm transition-colors duration-300 font-heading">
      {children}
    </a>
  );
};

const Header = () => {
  const { user, isGuest, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsUserDropdownOpen(false);
    navigate('/auth');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-charcoal-deep shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo and Name */}
        <Link to="/" className="flex items-center space-x-2">
          {/* Placeholder for circular logo */}
          <div className="w-8 h-8 rounded-full bg-gold-warm flex items-center justify-center text-charcoal-deep font-bold text-sm">LD</div>
          <span className="text-2xl font-bold font-heading text-gold-warm">LuxDine</span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <SmoothScrollNav key={link.name} to={link.href}>
              {link.name}
            </SmoothScrollNav>
          ))}
        </nav>

        {/* Right: User Area / Auth Links */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center space-x-2 text-cream-soft hover:text-gold-warm transition-colors duration-300 font-heading"
              >
                <span>{user.name || user.email}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card rounded-md shadow-lg py-1 z-20 border border-border">
                  <Link to="/" className="block px-4 py-2 text-cream-soft hover:bg-surface hover:text-gold-warm">Dashboard</Link>
                  <Link to="/my-bookings" className="block px-4 py-2 text-cream-soft hover:bg-surface hover:text-gold-warm">My Bookings</Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-cream-soft hover:bg-surface hover:text-gold-warm"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : isGuest ? (
            <span className="bg-slate-gray text-cream-soft text-sm px-3 py-1 rounded-full font-heading">Guest Mode</span>
          ) : (
            <>
              <Link to="/auth" className="text-cream-soft hover:text-gold-warm transition-colors duration-300 font-heading">
                Login / Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-cream-soft focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-over Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-charcoal-deep bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8">
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-cream-soft focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="flex flex-col space-y-6 text-2xl">
            {navLinks.map((link) => (
              <SmoothScrollNav key={link.name} to={link.href} onClick={closeMobileMenu}>
                {link.name}
              </SmoothScrollNav>
            ))}
          </nav>
          <div className="flex flex-col space-y-4 items-center">
            {user ? (
              <>
                <span className="text-cream-soft text-lg font-heading">{user.name || user.email}</span>
                <Link to="/" onClick={closeMobileMenu} className="text-cream-soft hover:text-gold-warm text-lg font-heading">Dashboard</Link>
                <Link to="/my-bookings" onClick={closeMobileMenu} className="text-cream-soft hover:text-gold-warm text-lg font-heading">My Bookings</Link>
                <button onClick={() => { handleLogout(); closeMobileMenu(); }} className="text-cream-soft hover:text-gold-warm text-lg font-heading">Logout</button>
              </>
            ) : isGuest ? (
              <span className="bg-slate-gray text-cream-soft text-lg px-4 py-2 rounded-full font-heading">Guest Mode</span>
            ) : (
              <Link to="/auth" onClick={closeMobileMenu} className="text-cream-soft hover:text-gold-warm text-lg font-heading">
                Login / Register
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;