import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useMyInfo from 'components/hooks/useMyInfo';
import styles from 'styles/components/navbar.module.scss';
import { userLogout } from 'reducers/users';
import LoginModal from './Login';

const logo = 'images/containers/Navbar/devkor_logo.svg';

const NavbarItem = ({ title, onClick, dropdown = false }) => {
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
      {dropdown && (
        <ul className={styles.dropdown}>
          <li> 게시글 작성 </li>
          <li> 팀 관리 </li>
        </ul>
      )}
    </li>
  );
};

NavbarItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  dropdown: PropTypes.bool,
};

export const DesktopNavbar = () => {
  const [isAuthModalOn, setIsAuthModalOn] = React.useState(false);
  const [myInfo] = useMyInfo();
  const router = useRouter();

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
          {myInfo === null ? (
            <NavbarItem title="LOGIN/SIGNUP" onClick={toggleModal} />
          ) : (
            <>
              <NavbarItem
                title="TEAM"
                onClick={() => {
                  moveTo('/team');
                }}
                dropdown
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
          {myInfo && <NavbarItem title="LOGOUT" onClick={() => userLogout()} />}
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
