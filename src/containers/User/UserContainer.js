import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/containers/myContainer.module.scss';
import * as UserAPI from 'axios/User';

const defaultimg = '/images/default.jpg';

const InfoItem = ({ title, value, onChange, readOnly }) => {
  return (
    <div className={styles.info}>
      <input
        className={styles.info__text}
        placeholder={title}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
};

InfoItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
};

const ButtonItem = ({ text, onClick }) => {
  return (
    <div
      className={styles.button}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className={styles.button__text}>{text}</div>
    </div>
  );
};

ButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const UserContainer = ({ id }) => {
  console.log(id);
  const [userInfo, setUserInfo] = React.useState(null);
  React.useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await UserAPI.getUserInfoById(id);
        console.log(res.data);
        setUserInfo(res.data);
      } catch (err) {
        console.dir(err);
      }
    };
    getInfo();
  }, [id]);
  return (
    <>
      {userInfo && (
        <div className={styles.container}>
          <div className={styles.imagewrapper}>
            <img
              className={styles.profileImg}
              src={userInfo.profile?.profile_img || defaultimg}
              alt="profile"
            />
          </div>
          <div className={styles.title}>{userInfo.username}</div>
          <div className={styles.infowrapper}>
            <InfoItem title="email" value={userInfo.email} readOnly />
            <InfoItem title="실명" value={userInfo.username} readOnly />
            <InfoItem title="github 주소" value={userInfo.profile?.url} readOnly />
            <InfoItem title="Position" value={userInfo.profile?.position} readOnly />
            <InfoItem title="Bio" value={userInfo.profile?.bio} readOnly />
          </div>
        </div>
      )}
    </>
  );
};

UserContainer.propTypes = {
  id: PropTypes.string,
};

export default UserContainer;
