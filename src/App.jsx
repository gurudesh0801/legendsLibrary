import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactUs from "./Components/ContactUs/ContactUs";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="https://legends-library--mu.vercel.app/contact" element={<ContactUs />} />
          <Route path="https://legends-library--mu.vercel.app/login" element={<Login />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
