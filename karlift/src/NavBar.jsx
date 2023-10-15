import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/application">Application Form</Link></li>
        <li><Link to="/about">About Me</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;