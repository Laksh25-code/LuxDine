import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);

  const login = (email, password) => {
    // Demo login
    console.log('Logging in with', email, password);
    setUser({ email });
    setIsGuest(false);
  };

  const register = (name, email, password) => {
    // Demo register
    console.log('Registering with', name, email, password);
    setUser({ email });
    setIsGuest(false);
  };

  const loginAsGuest = () => {
    console.log('Logging in as guest');
    setUser(null);
    setIsGuest(true);
  };

  const logout = () => {
    setUser(null);
    setIsGuest(false);
  };

  const value = {
    user,
    isGuest,
    login,
    register,
    loginAsGuest,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
