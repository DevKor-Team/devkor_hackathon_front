import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setUser } from 'reducers/users';
import { getUserProfile } from 'axios/User';
import LoginModal from './Login';

const logo = 'images/containers/Navbar/devkor_logo.svg';

const NavbarItem = ({ title, onClick }) => {
  return (
    <li>
      <div
        onClick={() => {
          onClick();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onClick();
        }}
        role="button"
        tabIndex={0}
      >
        {title}
      </div>
    </li>
  );
};

NavbarItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export const DesktopNavbar = () => {
  const dispatch = useDispatch();

  const [isAuthModalOn, setIsAuthModalOn] = React.useState(false);

  const userProfile = useSelector((state) => state.users.user);
  console.log(userProfile);

  React.useEffect(() => {
    getUserProfile()
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  const toggleModal = () => {
    setIsAuthModalOn(!isAuthModalOn);
  };
  return (
    <>
      <LoginModal
        isOn={isAuthModalOn}
        turnOff={() => {
          toggleModal();
        }}
        title="LOGIN/SIGNUP"
      />
      <div className="navbar__container">
        <div
          className="logo"
          onClick={() => {
            window.location.href = '/';
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') window.location.href = '/';
          }}
          role="button"
          tabIndex={0}
        >
          <img src={logo} alt="devkor" />
        </div>
        <ul>
          {userProfile === null ? (
            <NavbarItem title="LOGIN/SIGNUP" onClick={toggleModal} />
          ) : (
            <>
              <NavbarItem
                title="TEAM"
                onClick={() => {
                  window.location.href = '/team';
                }}
              />
              <NavbarItem
                title="MY"
                onClick={() => {
                  window.location.href = '/my';
                }}
              />
            </>
          )}
          <NavbarItem
            title="PROJECTS"
            onClick={() => {
              window.location.href = '/projects';
            }}
          />
          <NavbarItem
            title="ABOUT"
            onClick={() => {
              window.location.href = 'http://bit.ly/3pQdRsI';
            }}
          />
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
