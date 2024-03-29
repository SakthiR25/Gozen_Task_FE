import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut suscipit ante. Nullam cursus nunc sit amet tortor condimentum, at vehicula justo bibendum. Nam auctor, velit eget vehicula commodo, felis sem viverra ligula, eget vulputate purus libero vel mi. Morbi at lacinia magna.</p>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </div>
  );
};

export default About;
