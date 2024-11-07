// src/App.jsx
import Navbar from "./components/Navbar"; 
import './styles/AppStyle.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; 
import AboutMe from "./components/AboutMe"; 
import Payment from "./components/Payment";
import Sell from "./components/Sell";
import Themes from "./components/Themes"; // Import the theme switcher

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-100"> {/* Add base-100 to handle background for light theme */}
        <div className="flex justify-between items-center p-4">
          <Navbar />
          <Themes /> 
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
