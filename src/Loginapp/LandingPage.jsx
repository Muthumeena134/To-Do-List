import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is logged in by reading from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Redirect to login if not logged in
      window.location.href = '/login';
    }
  }, []);

  return (
    <div>
      {user ? (
        <h2>Welcome!</h2>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default LandingPage;
