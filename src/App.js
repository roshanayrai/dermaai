import './App.css';
import Homepage from './pages/Homepage';  
import Weather from './pages/Weather';
import Login from './pages/Login'
import Signup from './pages/Signup'
import SkinProfileCreation from './pages/SkinProfileCreation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <div className="App">

      <Homepage></Homepage>
    </div>
  );
}

export default App;
