import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';

const AuthPage = () => {
  const { user, isGuest } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(user || isGuest) navigate('/');
  },[user,isGuest,navigate]);

  return (
    <div style={{ minHeight: '100vh', display:'flex', alignItems:'center', justifyContent:'center', background: 'var(--bg)' }}>
      <AuthCard />
    </div>
  );
};

export default AuthPage;
