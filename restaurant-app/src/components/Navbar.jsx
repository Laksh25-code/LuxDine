import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LordIcon from './LordIcon'; // <-- import wrapper

const IconLink = ({ icon, children, href }) => (
  <a
    href={href}
    className="flex items-center gap-2 text-cream-soft hover:text-gold-warm transition-colors duration-300"
    role="link"
  >
    <LordIcon
      src={icon}
      trigger="hover"
      colors="primary:#CAA86B,secondary:#F5F5F5"
      style={{ width: '20px', height: '20px' }}
    />
    <span>{children}</span>
  </a>
);

const Navbar = () => {
  const { user, isGuest, logout } = useAuth();

  const navLinks = [
    { name: 'Home', href: '#hero', icon: 'https://cdn.lordicon.com/wloilxuq.json' },
    { name: 'About', href: '#about', icon: 'https://cdn.lordicon.com/dxjqoygy.json' },
    { name: "What's New", href: '#whats-new', icon: 'https://cdn.lordicon.com/lagxxypo.json' },
    { name: 'Gallery', href: '#gallery', icon: 'https://cdn.lordicon.com/pithnlch.json' },
    { name: 'Contact', href: '#contact', icon: 'https://cdn.lordicon.com/iltqorsz.json' },
  ];

  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="LuxDine home">
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0f0f0f',
              fontWeight: 800
            }}
            aria-hidden="true"
          >
            LD
          </div>
          <span style={{ marginLeft: 8 }}>LuxDine</span>
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          {navLinks.map(link => (
            <IconLink key={link.name} icon={link.icon} href={link.href}>
              {link.name}
            </IconLink>
          ))}
        </nav>

        <div className="auth-actions" aria-live="polite">
          {user ? (
            <>
              <span style={{ color: 'var(--muted)', marginRight: 8 }}>
                {user.name || user.email}
              </span>
              <button
                onClick={logout}
                style={{ background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}
                aria-label="Logout"
                title="Logout"
              >
                Logout
              </button>
            </>
          ) : isGuest ? (
            <span style={{ color: 'var(--muted)' }}>Guest</span>
          ) : (
            <Link to="/auth" style={{ color: 'var(--text)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <LordIcon
                src="https://cdn.lordicon.com/bhfukwzjk.json"
                trigger="hover"
                colors="primary:#CAA86B,secondary:#F5F5F5"
                style={{ width: '20px', height: '20px' }}
              />
              <span>Login / Register</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
