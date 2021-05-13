import React from 'react';

const logo = 'images/containers/Navbar/devkor_logo.svg';

export const Navbar = () => {
  return (
    <>
      <div className="navbar__container">
        <div className="logo">
          <img src={logo} alt="devkor" />
        </div>
        <ul>
          <li> LOGIN </li>
          <li> SIGNUP </li>
          <li> PROJECTS </li>
          <li> ABOUT </li>
        </ul>
      </div>
      <div className="emptyblock" style={{ height: 50 }} />
    </>
  );
};

export default Navbar;
