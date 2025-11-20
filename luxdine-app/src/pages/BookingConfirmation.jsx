import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function BookingConfirmation() {
  const { user } = useAuth()

  return (
    <main style={{ padding: 24 }}>
      <h1>Booking Confirmation</h1>
      <p style={{ color: 'var(--muted)' }}>
        Thank you{user && !user.guest ? `, ${user.name || user.email}` : ''}! Your booking is confirmed.
      </p>

      <div style={{ marginTop: 16 }}>
        <Link to="/dashboard" className="cta-secondary">Go to Dashboard</Link>
      </div>
    </main>
  )
}
