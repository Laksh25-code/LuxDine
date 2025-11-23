import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AUTH_KEY = 'luxdine_user_demo';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(()=>{
    const raw = localStorage.getItem(AUTH_KEY);
    if(raw){
      try {
        const parsed = JSON.parse(raw);
        setUser(parsed.user || null);
        setIsGuest(parsed.isGuest || false);
      } catch { localStorage.removeItem(AUTH_KEY); }
    }
  },[]);

  const persist = (u, guest=false) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ user: u, isGuest: guest }));
    setUser(u);
    setIsGuest(guest);
  };

  const login = (email, password) => {
    // demo logic: if stored user email matches, login succeeds
    const stored = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');
    if(stored && stored.user && stored.user.email === email){
      persist(stored.user, false);
      return Promise.resolve(stored.user);
    }
    return Promise.reject(new Error('No matching user found. Please register first (demo).'));
  };

  const register = (name, email, password) => {
    // demo: create user object and persist
    const newUser = { id: Date.now(), name, email };
    persist(newUser, false);
    return Promise.resolve(newUser);
  };

  const viewAsGuest = () => {
    persist(null, true);
    return Promise.resolve();
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
    setIsGuest(false);
  };

  return (
    <AuthContext.Provider value={{ user, isGuest, login, register, viewAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
