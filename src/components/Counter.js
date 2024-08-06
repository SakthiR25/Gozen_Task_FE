import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <p className="counter-value">Count: {count}</p>
      <button className="increment-button" onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
