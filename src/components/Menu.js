import styles from 'styles/components/menu.module.scss';
import useMyInfo from 'components/hooks/useMyInfo';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { userLogout } from 'reducers/users';
import { handleModal } from 'components/hooks/handleModal';
import PropTypes from 'prop-types';
import useMyLeaderInfo from './hooks/useMyLeaderInfo';

const LeaderItem = ({ title, onClick, children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (onClick === undefined) {
      setOpen(!open);
    } else {
      onClick();
    }
  };

  return (
    <ul className={styles.leaderitem} onClick={handleClick}>
      {title}
      {open && children}
    </ul>
  );
};

LeaderItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export const MenuContainer = (props) => {
  const [myInfo] = useMyInfo();
  const [myLeaderInfo] = useMyLeaderInfo();
  const router = useRouter();

  const onClose = () => {
    props.handleClose();
  };

  const moveTo = (href) => {
    router.push(href);
    onClose();
  };

  const toggleModal = () => {
    handleModal();
    onClose();
  };
  return (
    <>
      {myInfo !== null ? (
        <>
          <div
            className={styles.background}
            role="button"
            tabIndex="0"
            onClick={(e) => {
              onClose(e);
            }}
          >
            {' '}
          </div>
          <div className={styles.wrapper}>
            <div className={styles.innerbox}>
              {myLeaderInfo && myLeaderInfo.length > 0 ? (
                <LeaderItem title="TEAM">
                  <li onClick={() => moveTo('/write')}> 글 작성 </li>
                  <li onClick={() => moveTo('/team/my')}> 팀 관리 </li>
                </LeaderItem>
              ) : (
                <LeaderItem title="TEAM" onClick={() => moveTo('/team/my')} />
              )}
              <span
                tabIndex="0"
                role="button"
                className={styles.item}
                onClick={() => moveTo('/my')}
              >
                {' '}
                MY{' '}
              </span>
              <span
                tabIndex="0"
                role="button"
                className={styles.item}
                onClick={() => moveTo('/projects')}
              >
                {' '}
                PROJECTS{' '}
              </span>
              <span
                role="button"
                tabIndex="0"
                className={styles.item}
                onClick={() => {
                  moveTo('http://bit.ly/3pQdRsI');
                }}
              >
                {' '}
                ABOUT{' '}
              </span>
              <span tabIndex="0" role="button" className={styles.item} onClick={() => userLogout()}>
                LOGOUT
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={styles.background}
            role="button"
            tabIndex="0"
            onClick={(e) => {
              onClose(e);
            }}
          >
            {' '}
          </div>
          <div className={styles.wrapper}>
            <div className={styles.innerbox}>
              <span tabIndex="0" role="button" className={styles.item} onClick={toggleModal}>
                {' '}
                LOGIN/SIGNUP{' '}
              </span>
              <span
                tabIndex="0"
                role="button"
                className={styles.item}
                onClick={() => moveTo('/projects')}
              >
                {' '}
                PROJECTS{' '}
              </span>
              <span
                tabIndex="0"
                role="button"
                className={styles.item}
                onClick={() => {
                  moveTo('http://bit.ly/3pQdRsI');
                }}
              >
                {' '}
                ABOUT{' '}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

MenuContainer.propTypes = {
  handleClose: PropTypes.func,
};

export default MenuContainer;
