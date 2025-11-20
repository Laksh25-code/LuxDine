import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()

  // allow only logged-in non-guest users
  if (user && !user.guest) return children

  // otherwise redirect to auth gate
  return <Navigate to="/auth" replace />
}
