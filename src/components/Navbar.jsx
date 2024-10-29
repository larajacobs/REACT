// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import './styles/NavBar.css'; // Ensure this path is correct

function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
        <li>
          <Link to="/aboutme">About Me</Link>
        </li>
        <li>
          <Link to="/sell">Sell</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
