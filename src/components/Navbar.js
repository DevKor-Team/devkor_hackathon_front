import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from 'reducers/users';
import { getUserProfile } from 'axios/User';
import LoginModal from './Login';

const logo = 'images/containers/Navbar/devkor_logo.svg';

export const DesktopNavbar = () => {
  const dispatch = useDispatch();

  const [isAuthModalOn, setIsAuthModalOn] = React.useState(false);
  // const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users.user);
  console.log(users);

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
                if (e.key === 'Enter') toggleModal();
              }}
              role="button"
              tabIndex={0}
            >
              LOGIN/SIGNUP
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
