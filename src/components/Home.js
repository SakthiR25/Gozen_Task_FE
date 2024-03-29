import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to our Application!</h1>
      <div className="nav-links">
        <Link to="/about" className="nav-link" style={{ backgroundColor: '#F0F0F0' }}>About</Link>
        <Link to="/contact" className="nav-link" style={{ backgroundColor: '#F0F0F0' }}>Contact</Link>
      </div>
    </div>
  );
};

export default Home;
