import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const palette = {
    primary: '#1A1A1A',
    secondary: '#F9F6F0',
    accent: '#CAA86B',
    background: '#121212',
    surface: '#1F1F1F',
    card: '#2C2C2C',
    border: '#444444',
    textPrimary: '#F5F5F5',
    textSecondary: '#A9A9A9',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: palette.background }}>
      <div style={{ padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: palette.card, width: '350px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: palette.textPrimary }}>Login</h2>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: palette.textSecondary }}>Email</label>
            <input type="email" id="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: `1px solid ${palette.border}`, backgroundColor: palette.surface, color: palette.textPrimary }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: palette.textSecondary }}>Password</label>
            <input type="password" id="password" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: `1px solid ${palette.border}`, backgroundColor: palette.surface, color: palette.textPrimary }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: 'none', backgroundColor: palette.accent, color: palette.primary, cursor: 'pointer', marginBottom: '1rem', fontWeight: 'bold' }}>Login</button>
        </form>
        <div style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '0.5rem', color: palette.textSecondary }}>Don't have an account? <Link to="/register" style={{ color: palette.accent }}>Register</Link></p>
          <Link to="/"><button style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: `1px solid ${palette.accent}`, backgroundColor: 'transparent', color: palette.accent, cursor: 'pointer' }}>View as Guest</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
