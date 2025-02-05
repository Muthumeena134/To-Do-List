// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '25%' }}>
        <h2>Sidebar</h2>
        <ul>
          <li><a href="/news">Latest News</a></li>
          <li><a href="/sport">Sport</a></li>
        </ul>
      </aside>
      <main style={{ width: '75%' }}>
        <h2>Main Content</h2>
        <p>Welcome to BBC Clone!</p>
      </main>
    </div>
  );
}

export default Home;
