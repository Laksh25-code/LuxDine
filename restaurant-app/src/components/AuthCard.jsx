import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login, register, loginAsGuest } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(email, password);
    } else {
      register(name, email, password);
    }
  };

  return (
    <div className="bg-card/70 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-4 py-2 text-lg font-semibold transition-colors duration-300 ${
            isLogin ? 'text-accent border-b-2 border-accent' : 'text-text-secondary'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-4 py-2 text-lg font-semibold transition-colors duration-300 ${
            !isLogin ? 'text-accent border-b-2 border-accent' : 'text-text-secondary'
          }`}
        >
          Register
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-text-secondary mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-surface border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              required={!isLogin}
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-text-secondary mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-surface border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-text-secondary mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-surface border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-primary font-bold py-2 px-4 rounded-md hover:scale-102 hover:-translate-y-0.5 transform transition-transform duration-300"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <div className="text-center mt-6">
        <button onClick={loginAsGuest} className="text-text-secondary hover:text-accent transition-colors duration-300">
          View as Guest
        </button>
        <p className="text-xs text-text-secondary mt-2">Browse as guest — bookings require an account.</p>
      </div>
    </div>
  );
};

export default AuthCard;
