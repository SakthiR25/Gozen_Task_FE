import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; // Import CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <div className="contact-info">
        <p>Email: sakthivel@gmail.com.com</p>
        <p>Phone: +91 9361137301</p>
      </div>
      <div className="link-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </div>
  );
};

export default Contact;
