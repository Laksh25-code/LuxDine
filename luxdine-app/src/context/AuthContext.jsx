import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const DEV_USER_KEY = 'luxdine_dev_user'
const AUTH_USER_KEY = 'luxdine_auth_user'

/**
 * AuthProvider - frontend-only auth context for development
 * user state: null | { guest: true } | { name, email, guest: false }
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // Load current user from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUTH_USER_KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch (e) {
      console.warn('AuthProvider: failed to parse stored user', e)
    }
  }, [])

  // Persist current user to localStorage (simple session persistence)
  useEffect(() => {
    try {
      if (user === null) {
        localStorage.removeItem(AUTH_USER_KEY)
      } else {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user))
      }
    } catch (e) {
      console.warn('AuthProvider: failed to persist user', e)
    }
  }, [user])

  /** register a dev user and auto-login (dev only) */
  const register = ({ name, email, password }) => {
    if (!email || !password) return { success: false, message: 'Email and password required' }
    const profile = { name: name || '', email, password }
    try {
      localStorage.setItem(DEV_USER_KEY, JSON.stringify(profile))
      // auto-login
      setUser({ name: profile.name, email: profile.email, guest: false })
      return { success: true }
    } catch (e) {
      return { success: false, message: 'Failed to save user' }
    }
  }

  /** login by verifying against stored dev user */
  const login = ({ email, password }) => {
    try {
      const raw = localStorage.getItem(DEV_USER_KEY)
      if (!raw) return { success: false, message: 'No registered user (dev only)' }
      const stored = JSON.parse(raw)
      if (stored.email === email && stored.password === password) {
        setUser({ name: stored.name, email: stored.email, guest: false })
        return { success: true }
      }
      return { success: false, message: 'Invalid credentials' }
    } catch (e) {
      return { success: false, message: 'Login failed' }
    }
  }

  /** set user as guest */
  const loginAsGuest = () => {
    setUser({ guest: true })
  }

  /** logout / clear user */
  const logout = () => {
    setUser(null)
  }

  const value = { user, register, login, loginAsGuest, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/** useAuth - hook wrapper to access auth context */
export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}

export default AuthContext
