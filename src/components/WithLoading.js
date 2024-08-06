import React, { useState, useEffect } from 'react';
import './WithLoading.css'; // Import CSS file for styling

const WithLoading = WrappedComponent => {
  const EnhancedComponent = props => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading delay
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    if (loading) return <p className="loading-text">Loading...</p>;

    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
};

export default WithLoading;
