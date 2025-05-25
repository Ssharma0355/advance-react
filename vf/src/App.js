import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContectUs from "./pages/ContectUs";
import Login from "./Components/Login";
import Protected from "./Components/Protected";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<ContectUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
