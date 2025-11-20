import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function AuthGate() {
  const [tab, setTab] = useState('login')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: 480, maxWidth: '96%', background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', borderRadius: 16, padding: 20, boxShadow: '0 12px 40px rgba(0,0,0,0.6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(135deg, #F5C542, #e6b63a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#111' }}>LD</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>LuxDine</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Fine Dining & Reservations</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setTab('login')} style={{ background: tab === 'login' ? 'rgba(255,255,255,0.04)' : 'transparent', padding: '6px 10px', borderRadius: 8 }}>Login</button>
            <button onClick={() => setTab('register')} style={{ background: tab === 'register' ? 'rgba(255,255,255,0.04)' : 'transparent', padding: '6px 10px', borderRadius: 8 }}>Register</button>
          </div>
        </div>

        <div>
          {tab === 'login' ? <Login /> : <Register />}
        </div>

        <div style={{ marginTop: 12, fontSize: 13, color: 'var(--muted)' }}>
          <p style={{ margin: 0 }}>
            You can browse as guest. Booking requires an account.
          </p>
        </div>
      </div>
    </div>
  )
}
