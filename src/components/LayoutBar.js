import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import Logo from './Logo';
import "./componentStyles.css"

const LayoutBar = () => {
  return (
    <div className="layout-bar">
        <Link to="/"><Logo width={"60px"} height={"60px"}/></Link>
      
      <nav>
        <ul>
        
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/suggest">Subscribe</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LayoutBar;