import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  const palette = {
    background: '#121212',
    textPrimary: '#F5F5F5',
    textSecondary: '#A9A9A9',
  };

  return (
    <div style={{ backgroundColor: palette.background, minHeight: '100vh' }}>
      <Navbar />
       <div>
       
       </div>
    </div>
  );
};

export default Home;
