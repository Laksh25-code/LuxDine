import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
