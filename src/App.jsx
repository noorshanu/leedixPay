import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";


import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import AboutUsFr from "./Pages/AboutUsFr";
import HomeFr from "./Pages/HomeFr";



function App() {
  return (
    <Router> {/* Wrap your entire application with the Router component */}
      <Routes>
        {/* English Routes */}
        <Route path="/en" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/en/about-us" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* French Routes */}
        <Route path="/fr/" element={<HomeFr/>} />
        <Route path="/fr/about-us" element={<AboutUsFr />} />
        
     
      </Routes>
    </Router>
  );
}

export default App;