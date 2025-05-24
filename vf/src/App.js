import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ContectUs from './pages/ContectUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<ContectUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
