import { Link, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './styles/luxdine.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthGate from './pages/AuthGate'
import { useAuth } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import BookingConfirmation from './pages/BookingConfirmation'

function App() {
  const { user } = useAuth()
  const location = useLocation()

  const hideNavPaths = ['/auth', '/login', '/register']
  const showNav = !hideNavPaths.includes(location.pathname)

  return (
    <div>
      {showNav && (
        <nav style={{ padding: 12 }}>
          <Link to="/" style={{ marginRight: 12 }}>
            Home
          </Link>
          <Link to="/login" style={{ marginRight: 12 }}>
            Login
          </Link>
          <Link to="/register">Register</Link>
        </nav>
      )}

      <Routes>
        <Route path="/auth" element={<AuthGate />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/auth" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/booking-confirmation"
          element={
            <ProtectedRoute>
              <BookingConfirmation />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
