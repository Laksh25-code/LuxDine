import React from 'react'
import './../styles/luxdine.css'
import { useNavigate } from 'react-router-dom'

export default function AuthRequiredModal({ open, onClose }) {
  const navigate = useNavigate()
  if (!open) return null

  return (
    <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 120 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} onClick={onClose} />
      <div style={{ zIndex: 125, width: 420, maxWidth: '92%', background: 'var(--bg-deep)', borderRadius: 12, padding: 20, boxShadow: '0 12px 40px rgba(0,0,0,0.6)' }}>
        <h3 style={{ marginTop: 0 }}>Please log in to confirm reservation</h3>
        <p style={{ color: 'var(--muted)' }}>You are currently browsing as a guest. Create an account or log in to complete reservations.</p>

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button className="cta-primary" onClick={() => navigate('/auth')}>Login / Register</button>
          <button className="cta-secondary" onClick={onClose}>Continue Browsing</button>
        </div>
      </div>
    </div>
  )
}
