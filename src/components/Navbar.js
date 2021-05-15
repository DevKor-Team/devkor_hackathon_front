import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LoginModal from './Login';

const logo = 'images/containers/Navbar/devkor_logo.svg';

export const DesktopNavbar = () => {
  const [isLoginModalOn, setIsLoginModalOn] = React.useState(false);
  const [isAuthModalOn, setIsAuthModalOn] = React.useState(false);

  const toggleModal = (type) => {
    if (type === 'login') {
      setIsLoginModalOn(!isLoginModalOn);
    } else if (type === 'signup') {
      setIsAuthModalOn(!isAuthModalOn);
    }
  };
  return (
    <>
      <LoginModal isOn={isLoginModalOn} />
      <div className="navbar__container">
        <div className="logo">
          <img src={logo} alt="devkor" />
        </div>
        <ul>
          <li>
            <div
              onClick={() => {
                toggleModal('login');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') toggleModal('login');
              }}
              role="button"
              tabIndex={0}
            >
              LOGIN
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                toggleModal('signup');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') toggleModal('signup');
              }}
              role="button"
              tabIndex={0}
            >
              SIGNUP
            </div>
          </li>
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
