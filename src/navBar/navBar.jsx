import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="" className='nav-button' >Home</Link>
          <Link to="/about" className='nav-button' >About</Link>
          <Link to="/experience" className='nav-button' >Experience</Link>
          <Link to="/resume" className='nav-button' >Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;