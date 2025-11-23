import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({});
  const { login, register, viewAsGuest } = useAuth();
  const nav = useNavigate();

  const onChange = (e) => setForm({...form,[e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    try{
      if(isLogin){
        await login(form.email, form.password);
      } else {
        await register(form.name, form.email, form.password);
      }
      nav('/');
    } catch(err){
      alert(err.message);
    }
  };

  const guest = async () => {
    await viewAsGuest();
    nav('/');
  };

  return (
    <div className="auth-card" role="region" aria-label="Authentication">
      <div className="auth-tabs">
        <button className={`tab-btn ${isLogin ? 'active' : ''}`} onClick={()=>setIsLogin(true)}>Login</button>
        <button className={`tab-btn ${!isLogin ? 'active' : ''}`} onClick={()=>setIsLogin(false)}>Register</button>
      </div>

      <form onSubmit={submit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" onChange={onChange} />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input name="email" id="email" type="email" onChange={onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" id="password" type="password" onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <div style={{ marginTop: '0.8rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)', marginBottom:'.5rem' }}>You can browse as guest. Booking requires an account.</p>
        <button onClick={guest} className="btn-ghost">View as Guest</button>
      </div>
    </div>
  );
};

export default AuthCard;
