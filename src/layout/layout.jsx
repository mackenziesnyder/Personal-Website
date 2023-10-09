import React from 'react';
import Navbar from '../navBar/navBar';

const Layout = ({ children }) => {

  return (
    <div className="layout-container">
      <Navbar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;