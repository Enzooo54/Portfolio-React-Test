import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './component/Header';
import Error from './pages/Error';
import Services from './pages/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<Error />} />
          <Route path='/services' element={<Services />} />
        </Routes>
    </Router>
  </React.StrictMode>
);

