import './App.css';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Success from './components/responsePages/Success';
import Cancel from './components/responsePages/Cancel';

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
