// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../styles/NavBarStyle.css' // Optional: for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
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
};

export default Navbar;
