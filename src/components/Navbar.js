import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { getUser } from 'reducers/users';
import styles from 'styles/components/navbar.module.scss';
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

  const router = useRouter();
  // React.useEffect(() => {
  //   getUserProfile()
  //     .then((res) => {
  //       dispatch(setUser(res.data));
  //     })
  //     .catch((err) => {
  //       console.dir(err);
  //     });
  // }, []);
  React.useEffect(() => {
    dispatch(getUser);
  }, []);

  const moveTo = (href) => {
    router.push(href);
  };
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
      <div className={styles.container}>
        <div
          className={styles.logo}
          onClick={() => {
            moveTo('/');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') moveTo('/');
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
                  moveTo('/team');
                }}
              />
              <NavbarItem
                title="MY"
                onClick={() => {
                  moveTo('/my');
                }}
              />
            </>
          )}
          <NavbarItem
            title="PROJECTS"
            onClick={() => {
              moveTo('/projects');
            }}
          />
          <NavbarItem
            title="ABOUT"
            onClick={() => {
              moveTo('http://bit.ly/3pQdRsI');
            }}
          />
        </ul>
      </div>
      <div className={styles.emptyblock} />
    </>
  );
};

export const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  if (isMobile) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="devkor" />
          </div>
          <div className={styles.hamburgermenu}>
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className={styles.emptyblock} />
      </>
    );
  }
  return DesktopNavbar();
};
export default Navbar;
