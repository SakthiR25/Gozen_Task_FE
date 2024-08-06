import React, { useState } from 'react';
import './ConditionalComponent.css'; // Import CSS file for styling

const ConditionalComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="conditional-component">
      {isLoggedIn ? <p className="welcome-message">Welcome user!</p> : <p className="login-message">Please log in</p>}
      <button className="toggle-button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default ConditionalComponent;
