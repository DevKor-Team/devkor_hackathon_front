import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Popup } from 'components/Popup';
import styles from 'styles/containers/myContainer.module.scss';
import { setUser, setUserProfile } from 'reducers/users';

const defaultimg = '/images/default.jpg';

const defaultOnClick = () => {
  alert('준비 중인 기능입니다.');
};

const InfoItem = ({ title, value, onChange }) => {
  return (
    <div className={styles.info}>
      {/* <div className={styles.info__text}>{title}</div> */}
      <input className={styles.info__text} placeholder={title} value={value} onChange={onChange} />
    </div>
  );
};

InfoItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const ButtonItem = ({ text, onClick }) => {
  return (
    <div className={styles.button} onClick={onClick} role="button" tabIndex={0}>
      <div className={styles.button__text}>{text}</div>
    </div>
  );
};

ButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export const MyContainer = () => {
  const [popup, setPopup] = React.useState(false);
  const myInfo = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  console.log(myInfo);
  // I need typescript...
  const email = myInfo ? myInfo.email || '' : '';
  const username = myInfo ? myInfo.username || '' : '';
  const url = myInfo && myInfo.profile ? myInfo.profile.url || '' : '';
  const position = myInfo && myInfo.profile ? myInfo.profile.position || '' : '';

  const setProfile = (key, value) => {
    if (['url', 'position'].includes(key)) {
      dispatch(
        setUserProfile({
          ...myInfo.profile,
          [key]: value,
        })
      );
    } else {
      dispatch(
        setUser({
          ...myInfo,
          [key]: value,
        })
      );
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imagewrapper}>
          <img src={defaultimg} alt="profile" />
        </div>
        <div className={styles.title}>{username}</div>
        <div className={styles.infowrapper}>
          <InfoItem
            title="email"
            value={email}
            onChange={(e) => {
              setProfile('email', e.target.value);
            }}
          />
          <InfoItem
            title="실명"
            value={username}
            onChange={(e) => {
              setProfile('username', e.target.value);
            }}
          />
          <InfoItem
            title="github 주소"
            value={url}
            onChange={(e) => {
              setProfile('url', e.target.value);
            }}
          />
          <InfoItem
            title="Position"
            value={position}
            onChange={(e) => {
              setProfile('position', e.target.value);
            }}
          />
        </div>
        <div className={styles.buttonwrapper}>
          <ButtonItem text="수정하기" onClick={() => setPopup((curVal) => !curVal)} />
        </div>
      </div>
      {popup ? (
        <Popup
          title="정말 수정하시겠습니까?"
          onClickY={defaultOnClick}
          onClickN={() => setPopup((curVal) => !curVal)}
        />
      ) : null}
    </>
  );
};

export default MyContainer;
