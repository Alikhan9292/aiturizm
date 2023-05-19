import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About";
import BeautifulPlaces from "./components/BeautifulPlaces";
import OpenAi from "./components/OpenAi";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/beautifulplaces" element={<BeautifulPlaces />} />
          <Route path="/openai" element={<OpenAi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
