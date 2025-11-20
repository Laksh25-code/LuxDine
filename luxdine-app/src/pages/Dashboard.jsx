import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <p style={{ color: 'var(--muted)' }}>Welcome back, {user?.name || user?.email}.</p>

      <section style={{ marginTop: 18 }}>
        <div className="card">
          <h3>Your Reservations</h3>
          <p style={{ color: 'var(--muted)' }}>You have no upcoming reservations.</p>
        </div>
      </section>
    </main>
  )
}
