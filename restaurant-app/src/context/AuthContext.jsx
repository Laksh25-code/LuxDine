import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isGuest, setIsGuest] = useState(() => {
    const storedIsGuest = localStorage.getItem('isGuest');
    return storedIsGuest ? JSON.parse(storedIsGuest) : false;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.removeItem('isGuest'); // If user is logged in, they are not a guest
    } else if (isGuest) {
      localStorage.setItem('isGuest', JSON.stringify(true));
      localStorage.removeItem('user'); // If guest, no user is logged in
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('isGuest');
    }
  }, [user, isGuest]);

  const login = (email, password) => {
    // Demo login - in a real app, this would involve an API call
    console.log('Logging in with', email, password);
    // For demo, assume successful login returns a user object with a name
    setUser({ name: 'Demo User', email });
    setIsGuest(false);
  };

  const register = (name, email, password) => {
    // Demo register - in a real app, this would involve an API call
    console.log('Registering with', name, email, password);
    setUser({ name, email });
    setIsGuest(false);
  };

  const viewAsGuest = () => {
    console.log('Viewing as guest');
    setUser(null);
    setIsGuest(true);
  };

  const logout = () => {
    console.log('Logging out');
    setUser(null);
    setIsGuest(false);
    localStorage.removeItem('user');
    localStorage.removeItem('isGuest');
  };

  const value = {
    user,
    isGuest,
    login,
    register,
    viewAsGuest,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
