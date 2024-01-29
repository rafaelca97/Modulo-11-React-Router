import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/welcome"
        element={<Welcome />}
      />
    </Routes>
    </>
  );
}

export default App;
