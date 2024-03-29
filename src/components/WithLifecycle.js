import React, { Component } from 'react';
import './WithLifecycle.css'; // Import CSS file for styling

class WithLifecycle extends Component {
  componentDidMount() {
    console.log('Component did mount');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <p className="lifecycle-text">Lifecycle</p>;
  }
}

export default WithLifecycle;
