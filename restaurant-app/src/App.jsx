import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import { useAuth } from './context/AuthContext';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const ProtectedRoute = ({ children }) => {
  const { user, isGuest } = useAuth();
  if (!user && !isGuest) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      {/* Other routes can be added here and wrapped with ProtectedRoute if needed */}
    </Routes>
  );
}

export default App;
