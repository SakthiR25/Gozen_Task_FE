import React from 'react';
import './MyComponent.css'; // Import CSS file for styling

const withLogger = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component is mounted');
    }

    render() {
      return <div className="my-component-wrapper"><WrappedComponent {...this.props} /></div>;
    }
  }
}

const MyComponent = () => {
  return <div>My Component</div>;
}

export default withLogger(MyComponent);
