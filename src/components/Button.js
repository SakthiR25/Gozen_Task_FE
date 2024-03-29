import React from 'react';
import './Button.css'; // Import CSS file for styling

const Button = () => {
  const handleClick = () => {
    alert('Clicked Successfully'); // Display alert dialog with message
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      Click Here
    </button>
  ); // Apply custom class for styling
};

export default Button;
