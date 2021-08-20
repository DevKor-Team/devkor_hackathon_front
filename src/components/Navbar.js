import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useMyInfo from 'components/hooks/useMyInfo';
import styles from 'styles/components/navbar.module.scss';
import { setCsrfToken } from 'axios/User';
import { userLogout } from 'reducers/users';
import { handleModal } from 'components/hooks/handleModal';
import MenuWrapper from 'components/Menu';
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
          key={text}
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
  dropDownData: PropTypes.arrayOf(PropTypes.object),
};

DropDownNavbarItem.propTypes = {
  dropDownData: PropTypes.arrayOf(PropTypes.object),
};

export const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const [myInfo] = useMyInfo();
  const [myLeaderInfo] = useMyLeaderInfo();
  const router = useRouter();
  const [mobile, setMobile] = useState(false);
  const [menu, setopenMenu] = useState(false);

  const moveTo = (href) => {
    router.push(href);
  };

  const toggleModal = () => {
    handleModal();
  };

  const handleMenu = () => {
    let scrollPosition = 0;
    const body = document.querySelector('body');
    scrollPosition = window.pageYOffset;

    if (menu === true) {
      const { top } = body.style;
      setopenMenu(false);

      body.style.removeProperty('position');
      body.style.removeProperty('top');
      body.style.removeProperty('width');

      window.scrollTo(0, Number(-1 * top.split('px')[0]));
    } else {
      setopenMenu(true);
      body.style.top = `-${scrollPosition}px`;
      body.style.position = 'fixed';
      body.style.width = '100%';
    }
  };

  React.useEffect(() => {
    setCsrfToken();
    if (isMobile) {
      setMobile(true);
    }
    window.addEventListener('resize', () => {
      const { innerWidth } = window;
      if (innerWidth <= 640) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);

  if (mobile) {
    return (
      <>
        {menu && (
          <MenuWrapper
            handleClose={() => {
              setopenMenu(false);
              handleMenu();
            }}
            handleModal={() => toggleModal()}
          />
        )}
        <LoginModal
          turnOff={() => {
            toggleModal();
          }}
          title="LOGIN/SIGNUP"
        />
        <div className={styles.container}>
          <div role="button" tabIndex={0} className={styles.logo} onClick={() => moveTo('/')}>
            <img src={logo} alt="devkor" />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={styles.hamburgermenu}
            onClick={() => {
              setopenMenu(true);
              handleMenu();
            }}
          >
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
