import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useMyInfo from 'components/hooks/useMyInfo';
import styles from 'styles/components/navbar.module.scss';
import { setCsrfToken } from 'axios/User';
import { userLogout } from 'reducers/users';
import LoginModal from './Login';
import useMyLeaderInfo from './hooks/useMyLeaderInfo';

const logo = '/images/containers/Navbar/devkor_logo.svg';

const NavbarItem = ({ title, onClick, dropDown = false, dropDownData }) => {
  return (
    <li>
      <div
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onClick();
        }}
        role="button"
        tabIndex={0}
      >
        {title}
      </div>
      {dropDown && <DropDownNavbarItem dropDownData={dropDownData} />}
    </li>
  );
};

const DropDownNavbarItem = ({ dropDownData }) => {
  return (
    <ul className={styles.dropdown}>
      {dropDownData.map(({ onClick, text }) => (
        <li
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        >
          {text}
        </li>
      ))}
    </ul>
  );
};

NavbarItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  dropDown: PropTypes.bool,
  dropDownData: PropTypes.arrayOf(
    PropTypes.objectOf({
      onClick: PropTypes.func,
      text: PropTypes.string,
    })
  ),
};

DropDownNavbarItem.propTypes = {
  dropDownData: PropTypes.arrayOf(
    PropTypes.objectOf({
      onClick: PropTypes.func,
      text: PropTypes.string,
    })
  ),
};

export const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const [isAuthModalOn, setIsAuthModalOn] = React.useState(false);
  const [myInfo] = useMyInfo();
  const [myLeaderInfo] = useMyLeaderInfo();
  const router = useRouter();

  const moveTo = (href) => {
    router.push(href);
  };
  const toggleModal = () => {
    setIsAuthModalOn(!isAuthModalOn);
  };

  React.useEffect(() => {
    setCsrfToken();
  }, []);

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
  return (
    <>
      <LoginModal
        isOn={isAuthModalOn}
        turnOff={() => {
          toggleModal();
        }}
        title="LOGIN/SIGNUP"
      />
      <nav className={styles.container}>
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
              {myLeaderInfo && myLeaderInfo.length > 0 ? (
                <NavbarItem
                  title="TEAM"
                  // onClick={() => {
                  //   moveTo('/team');
                  // }}
                  dropDown
                  dropDownData={[
                    {
                      text: '게시글 작성',
                      onClick: () => {
                        moveTo('/write');
                      },
                    },
                    {
                      text: '팀 관리',
                      onClick: () => {
                        moveTo('/team/my');
                      },
                    },
                  ]}
                />
              ) : (
                <NavbarItem
                  title="TEAM"
                  onClick={() => {
                    moveTo('/team/my');
                  }}
                />
              )}
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
      </nav>
      <div className={styles.emptyblock} />
    </>
  );
};
export default Navbar;
