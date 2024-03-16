import React from 'react';
import './Navbar.css'; // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo">Resewn</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#products" className="nav-link">Products</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
