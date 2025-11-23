import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import AuthCard from '../components/AuthCard'; // Assuming AuthCard will be created later

const AuthPage = () => {
  const { login, register, viewAsGuest, user, isGuest } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (user || isGuest) {
      navigate('/');
    }
  }, [user, isGuest, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-deep">
      <AuthCard
        onLogin={login}
        onRegister={register}
        onViewAsGuest={viewAsGuest}
      />
    </div>
  );
};

export default AuthPage;
