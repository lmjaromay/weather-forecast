import React from 'react';
import { Route, Routes } from 'react-router-dom';


import './App.css';
import Header from './components/header';
import ProtectedRoute from './components/routes/protectedRoute';
import HomePage from './pages/home';
import LandingPage from './pages/landing';
// import HomePage from './pages/home';
// import LandingPage from './pages/landing';
import WeatherPage from './pages/weather';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="home" element={<ProtectedRoute component={HomePage} />} />
          <Route path="weather" element={<ProtectedRoute component={WeatherPage} />} />
        </Routes>
      </>
  );
}

export default App;
