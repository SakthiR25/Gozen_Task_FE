import React from 'react';
import { Link } from 'react-router-dom';
import './Pageone.css'; // Importing CSS file

const PageOne = () => {
  return (
    <div className="page-one-container"> {/* Apply a CSS class */}
      <h1>Welcome to Page One 1</h1>
      
      <p>This is the content of Page One.</p>
      <Link to="/page-two" className="page-two-link">Go to Page Two</Link> {/* Apply a CSS class */}
    </div>
  );
}

export default PageOne;
