import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { register: authRegister, login, loginAsGuest } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const [serverError, setServerError] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setServerError('')
    const res = await login({ email: data.email, password: data.password })
    if (res && res.success) {
      navigate('/')
    } else {
      setServerError(res.message || 'Login failed')
    }
  }

  const handleGuest = () => {
    loginAsGuest()
    navigate('/')
  }

  return (
    <main style={{ padding: 20, maxWidth: 480, margin: '0 auto' }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {serverError && (
          <div style={{ color: 'red', marginBottom: 8 }}>{serverError}</div>
        )}

        <div style={{ marginBottom: 8 }}>
          <label>Email</label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            style={{ display: 'block', width: '100%' }}
          />
          {errors.email && (
            <small style={{ color: 'red' }}>{errors.email.message}</small>
          )}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Password</label>
          <input
            {...register('password', { required: 'Password is required' })}
            type="password"
            style={{ display: 'block', width: '100%' }}
          />
          {errors.password && (
            <small style={{ color: 'red' }}>{errors.password.message}</small>
          )}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <button type="button" onClick={handleGuest}>
            View as Guest
          </button>
        </div>
      </form>

      <p style={{ marginTop: 12 }}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </main>
  )
}
