import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Popup } from 'components/Popup';
import styles from 'styles/containers/myContainer.module.scss';
import { setUser, setUserProfile } from 'reducers/users';
import { putUserProfile } from 'axios/User';

const defaultimg = '/images/default.jpg';

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

  const defaultOnClick = async (profile) => {
    try {
      const res = await putUserProfile(profile);
      dispatch(setUserProfile(res.data));
      console.log('수정 성공'); // UI 표현 필요
      // 0.5초 뒤에
      setTimeout(setPopup(false), 0.5);
    } catch (err) {
      console.log('실패! 다시 시도해주세요 ㅠㅠ'); // UI 표현 필요
      setTimeout(setPopup(false), 0.5);
    }
  };

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
          onClickY={() => defaultOnClick(myInfo.profile)}
          onClickN={() => setPopup((curVal) => !curVal)}
        />
      ) : null}
    </>
  );
};

export default MyContainer;
