import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Forgotpassword from './components/forgotpassword';
import Authentication from './pages/authentication';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Authentication />} />
        <Route exact path="/forgot-password" element={<Forgotpassword />} />
      </Routes>
    </Router>
  );
}

export default App;
