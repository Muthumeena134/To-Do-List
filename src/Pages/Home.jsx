// Home.js
import React from 'react';
import './Home.css';  // If you want to style it

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop destination for amazing content!</p>
      </header>

      <section className="image-section">
        <h2>Our Amazing Features</h2>
        <div className="image-gallery">
          <div className="image-item">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Feature 1" 
              className="home-image" 
            />
            <p>Feature 1</p>
          </div>
          <div className="image-item">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Feature 2" 
              className="home-image" 
            />
            <p>Feature 2</p>
          </div>
          <div className="image-item">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Feature 3" 
              className="home-image" 
            />
            <p>Feature 3</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a team of passionate individuals who create high-quality content to
          keep you informed and entertained. We believe in making the web a better
          place with awesome features and services.
        </p>
      </section>
    </div>
  );
};

export default Home;
