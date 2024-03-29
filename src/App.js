import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

// Import components
import Home from '../src/components/Home';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Button from '../src/components/Button';
import Counter from '../src/components/Counter';
import ErrorBoundary from '../src/components/ErrorBoundary';
import Forms from '../src/components/Form';
import ConditionalComponent from '../src/components/ConditionalRender';
import HigherOrderComponent from '../src/components/HigherOrderComponent';
import WithLifecycle from '../src/components/WithLifecycle';
import WithLoading from '../src/components/WithLoading';
import PageOne from '../src/components/PageOne';


function App() {
  return (
    <Router>
      <div>
        {/* Router part */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Remaining imports */}
        <PageOne />

        <Button />
        <Counter />
        <ErrorBoundary />
        <Forms />
        <ConditionalComponent />
        <HigherOrderComponent />

        <WithLifecycle />
        <WithLoading />
      </div>
    </Router>
  );
}

export default App;
