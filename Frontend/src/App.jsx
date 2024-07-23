import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
