import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className='logo-cont'>
        <button className='logo-button'>Mackenzie</button>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/Personal-Website/" className='nav-button' >Home</Link>
          {/* <Link to="/about" className='nav-button' >About</Link> */}
          <Link to="/experience" className='nav-button' >Experience</Link>
          <Link to="/resume" className='nav-button' >Resume</Link>
          <a className='contact-button' href="mailto:mackenziesnyder222@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;