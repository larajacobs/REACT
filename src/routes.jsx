// src/routes.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Correct path
import AboutMe from "./components/AboutMe"; // Correct casing
import Payment from "./components/Payment"; // Correct path
import Sell from "./components/Sell"; // Correct path

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;