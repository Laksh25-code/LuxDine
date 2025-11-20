import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthRequiredModal from '../components/AuthRequiredModal'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user, logout } = useAuth()
  const [reserved, setReserved] = useState(false)

  const heroImage =
    'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b7d0f8d1f7d7f0b2e7a1a3d2c9c4f7a'

  const gallery = [
    'https://images.unsplash.com/photo-1555992336-03a23c9d4e7b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4b6b0d3c9a3c7b0e7fdc7a2f2e9f1a8d',
    'https://images.unsplash.com/photo-1541542684-9d5b7a7f5f43?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f3a6d3a6d3b6a7e9d4b5c6a7e8f9a0b',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c2e3f4d5a6b7c8d9e0f1a2b3c4d5e6f',
    'https://images.unsplash.com/photo-1506086679526-1c0a0b1d5a4f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a5b7c9d0e1f2a3b4c5d6e7f8a9b0c1d',
    'https://images.unsplash.com/photo-1521302080396-4c2b3d7a8f0a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6d8c9b0a1e2f3d4c5b6a7e8d9f0c1b2a',
    'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=7c9b8a6f5e4d3c2b1a0f9e8d7c6b5a4f',
    'https://images.unsplash.com/photo-1541542684-4f0b9a7b1c2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2d4c6b8a0f1e2d3c4b5a6c7d8e9f0a1b',
    'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8e7a6b5c4d3f2a1b0c9d8e7f6a5b4c3d',
  ]

  const [modalOpen, setModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleReserve = (data) => {
    // data is not used in this simplified demo
    if (user && user.guest) {
      // show modal prompting login
      setModalOpen(true)
      return
    }

    // simulate booking then navigate to protected confirmation
    // in a real app you'd POST to an API
    setReserved(true)
    setTimeout(() => {
      setReserved(false)
      navigate('/booking-confirmation')
    }, 800)
  }

  return (
    <div>
      <header className="lux-header">
        <div className="lux-brand">
          <div className="lux-logo">LD</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>LuxDine</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Fine Dining & Reservations</div>
          </div>
        </div>
        <nav className="lux-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <section className="lux-hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">LuxDine — A Curated Dining Experience</h1>
            <p className="hero-sub">
              Experience a modern interpretation of classic gastronomy in an intimate,
              elegant setting — where every detail is crafted for memorable evenings.
            </p>

            <div style={{ display: 'flex', gap: 12 }}>
              <button className="cta-primary" onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>
                Book a Table
              </button>
              <Link to="/menu" className="cta-secondary" style={{ padding: '0.7rem 1rem', alignSelf: 'center' }}>
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="card-row">
        <div className="card">
          <h3>About</h3>
          <p>
            LuxDine blends seasonal ingredients with refined technique. Our chefs curate
            a tasting journey that celebrates local produce and timeless flavors.
          </p>
        </div>
        <div className="card">
          <h3>Special Offers</h3>
          <p style={{ color: 'var(--accent-crimson)' }}>Limited-time: Chef's Tasting Menu at 25% off (Mon–Wed)</p>
        </div>
        <div className="card">
          <h3>What's New</h3>
          <p>Seasonal menu launched — expect bold, organic flavors with refined presentation.</p>
        </div>
      </div>

      <section style={{ marginTop: 26 }}>
        <h2 style={{ margin: '8px 0 12px 0' }}>Gallery</h2>
        <div className="gallery">
          {gallery.map((src, idx) => (
            <img key={idx} src={src} alt={`gallery-${idx}`} />
          ))}
        </div>
      </section>

      <section id="reservation" className="reservation">
        <div>
          <h2 style={{ marginTop: 0 }}>Reserve Your Table</h2>
          <p style={{ color: 'var(--muted)' }}>Select date, time and party size. We'll take care of the rest.</p>

          <form className="res-form" onSubmit={(e) => { e.preventDefault(); const form = e.target; const data = { name: form.name?.value, email: form.email?.value, date: form.date?.value, time: form.time?.value, party: form.party?.value }; handleReserve(data) }}>
            <label>Name</label>
            <input name="name" defaultValue={user && !user.guest ? user.name : ''} required placeholder="Full name" />
            <label style={{ marginTop: 10 }}>Email</label>
            <input name="email" defaultValue={user && !user.guest ? user.email : ''} required type="email" placeholder="you@example.com" />
            <label style={{ marginTop: 10 }}>Date</label>
            <input name="date" required type="date" min={new Date().toISOString().split('T')[0]} />
            <label style={{ marginTop: 10 }}>Time</label>
            <select name="time">
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
            </select>
            <label style={{ marginTop: 10 }}>Party size</label>
            <select name="party">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>

            <button className="cta-primary submit" type="submit" disabled={user && user.guest}>
              {user && user.guest ? 'Login to Reserve' : 'Confirm Reservation'}
            </button>
            {reserved && <div style={{ marginTop: 8, color: 'var(--accent-gold)' }}>Reservation confirmed — we'll email you shortly.</div>}
          </form>
          <div>
            <p style={{ color: 'var(--muted)', marginTop: 8 }}>{user && user.guest ? 'You are browsing as guest — bookings require an account.' : ''}</p>
          </div>
          <div>
            {modalOpen && <AuthRequiredModal open={modalOpen} onClose={() => setModalOpen(false)} />}
          </div>
        </div>

        <aside>
          <div className="card">
            <h3>Contact & Hours</h3>
            <p style={{ color: 'var(--muted)' }}>
              123 Elegance Ave, City — Open Tue–Sun 17:00–23:00
            </p>
            <p style={{ marginTop: 8 }}>
              {user ? (
                <>
                  Signed in as <strong>{user.guest ? 'Guest' : user.name || user.email}</strong>
                  <div style={{ marginTop: 8 }}>
                    <button onClick={logout} className="cta-secondary">Logout</button>
                  </div>
                </>
              ) : (
                <div>
                  <Link to="/login" className="cta-secondary">Login</Link>
                </div>
              )}
            </p>
          </div>
        </aside>
      </section>

      <div className="floating-reserve">
        <button className="cta-primary" onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>
          Book a Table
        </button>
      </div>

      <footer className="footer">
        <div>
          <div style={{ fontWeight: 700 }}>LuxDine</div>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>© {new Date().getFullYear()} LuxDine</div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#" style={{ color: 'var(--muted)' }}>Instagram</a>
          <a href="#" style={{ color: 'var(--muted)' }}>Facebook</a>
          <a href="#" style={{ color: 'var(--muted)' }}>Contact</a>
        </div>
      </footer>
    </div>
  )
}
