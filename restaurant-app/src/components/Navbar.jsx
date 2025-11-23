import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isGuest, logout } = useAuth();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <div style={{width:36,height:36,borderRadius:8,background:'var(--accent)',display:'flex',alignItems:'center',justifyContent:'center',color:'#0f0f0f',fontWeight:800}}>LD</div>
          <span>LuxDine</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#whats-new">Whats New</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="auth-actions">
          {user ? (
            <>
              <span style={{ color: 'var(--muted)' }}>{user.name || user.email}</span>
              <button onClick={logout} style={{ background:'transparent',border:'none',color:'var(--muted)',cursor:'pointer' }}>Logout</button>
            </>
          ) : isGuest ? (
            <span style={{ color: 'var(--muted)' }}>Guest</span>
          ) : (
            <Link to="/auth" style={{ color: 'var(--text)' }}>
              <lord-icon
                src="https://cdn.lordicon.com/bhfukwzjk.json"
                trigger="hover"
                colors="primary:#121331,secondary:#08a88a"
                style={{width:"20px",height:"20px", verticalAlign: "middle", marginRight: "5px"}}>
              </lord-icon>
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
