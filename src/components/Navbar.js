import React from 'react';
import { useMediaQuery } from 'react-responsive';

const logo = 'images/containers/Navbar/devkor_logo.svg';

export const DesktopNavbar = () => {
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
      <div className="emptyblock" />
    </>
  );
};

export const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  if (isMobile) {
    return (
      <>
        <div className="navbar__container">
          <div className="logo">
            <img src={logo} alt="devkor" />
          </div>
          <div className="navbar__hamburgermenu">
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="emptyblock" />
      </>
    );
  }
  return DesktopNavbar();
};
export default Navbar;
