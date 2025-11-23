import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthCard = ({ onLogin, onRegister, onViewAsGuest }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const { register: registerForm, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    if (isLogin) {
      onLogin(data.email, data.password);
    } else {
      onRegister(data.name, data.email, data.password);
    }
    reset(); // Clear form after submission
    navigate('/'); // Navigate to dashboard after auth action
  };

  const handleViewAsGuest = () => {
    onViewAsGuest();
    navigate('/'); // Navigate to dashboard after guest action
  };

  return (
    <div className="bg-card p-8 rounded-lg shadow-xl border border-border w-full max-w-md">
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 text-lg font-semibold rounded-t-lg focus:outline-none ${
            isLogin ? 'bg-gold-warm text-charcoal-deep' : 'text-text-secondary hover:text-text-primary'
          }`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 text-lg font-semibold rounded-t-lg focus:outline-none ${
            !isLogin ? 'bg-gold-warm text-charcoal-deep' : 'text-text-secondary hover:text-text-primary'
          }`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {!isLogin && (
          <div>
            <label htmlFor="name" className="block text-text-secondary text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...registerForm('name', { required: 'Name is required' })}
              className="shadow appearance-none border border-border rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:shadow-outline bg-surface"
            />
            {errors.name && <p className="text-crimson text-xs italic mt-1">{errors.name.message}</p>}
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-text-secondary text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...registerForm('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="shadow appearance-none border border-border rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:shadow-outline bg-surface"
          />
          {errors.email && <p className="text-crimson text-xs italic mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-text-secondary text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...registerForm('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className="shadow appearance-none border border-border rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:shadow-outline bg-surface"
          />
          {errors.password && <p className="text-crimson text-xs italic mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-gold-warm hover:bg-gold-warm/90 text-charcoal-deep font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-200"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-text-secondary mb-3">You can browse as guest. Booking requires an account.</p>
        <button
          onClick={handleViewAsGuest}
          className="bg-slate-gray hover:bg-slate-gray/90 text-cream-soft font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-200"
        >
          View as Guest
        </button>
      </div>
    </div>
  );
};

export default AuthCard;