import React, { useState, useEffect } from 'react';
import LoginPage from './Loginapp/LoginPage';
import LandingPage from './Loginapp/LandingPage';

const App = () => {
  const [page, setPage] = useState('login');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setPage('landing');
    } else {
      setPage('login');
    }
  }, []);

  return (
    <div>
      {page === 'login' ? <LoginPage /> : <LandingPage />}
    </div>
  );
};

export default App;
