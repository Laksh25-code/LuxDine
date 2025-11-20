import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const auth = useAuth()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const [serverError, setServerError] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setServerError('')
    const res = await auth.register({ name: data.name, email: data.email, password: data.password })
    if (res && res.success) {
      navigate('/')
    } else {
      setServerError(res.message || 'Registration failed')
    }
  }

  return (
    <main style={{ padding: 20, maxWidth: 480, margin: '0 auto' }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {serverError && (
          <div style={{ color: 'red', marginBottom: 8 }}>{serverError}</div>
        )}

        <div style={{ marginBottom: 8 }}>
          <label>Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            style={{ display: 'block', width: '100%' }}
          />
          {errors.name && (
            <small style={{ color: 'red' }}>{errors.name.message}</small>
          )}
        </div>

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
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
            type="password"
            style={{ display: 'block', width: '100%' }}
          />
          {errors.password && (
            <small style={{ color: 'red' }}>{errors.password.message}</small>
          )}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </div>
      </form>

      <p style={{ marginTop: 12 }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </main>
  )
}
