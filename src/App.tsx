import React from 'react';
import { Route, Routes } from 'react-router-dom';


import './App.css';
import Header from './components/header';
import HomePage from './pages/home';
import LandingPage from './pages/landing';
import WeatherPage from './pages/weather';

function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="weather" element={<WeatherPage />} />
        </Routes>
      </>
  );
}

export default App;
