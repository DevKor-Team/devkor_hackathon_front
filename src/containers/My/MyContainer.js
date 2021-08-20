import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PromisePopup } from 'components/Popup';
import useProfile from 'components/hooks/useProfile';
import { fetchProfile } from 'axios/User';
import styles from 'styles/containers/myContainer.module.scss';

const defaultimg = '/images/default.jpg';

const InfoItem = ({ title, value, onChange, readOnly }) => {
  return (
    <div className={styles.info}>
      {/* <div className={styles.info__text}>{title}</div> */}
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
  const myInfo = useSelector((state) => state.users.user);
  const [profile, setProfile] = useProfile();
  const [popup, setPopup] = React.useState(false);
  const [profileImg, setProfileImg] = React.useState(profile?.profile_img ?? defaultimg);
  const editImg = React.useRef();

  // I need typescript...
  const username = myInfo ? `${myInfo.last_name || ''} ${myInfo.first_name || ''}` : '';
  const email = myInfo ? myInfo.email || '' : '';
  // I need typescript...
  const url = profile ? profile.url || '' : '';
  const position = profile ? profile.position || '' : '';

  const setProfileByKey = (key, value) => {
    if (['url', 'position'].includes(key)) {
      setProfile({
        ...profile,
        [key]: value,
      });
    }
  };

  const readFile = (file) =>
    new Promise((res) => {
      const reader = new FileReader();
      reader.onload = () => {
        const imgURI = reader.result;
        if (typeof imgURI === 'string') res(imgURI);
      };
      reader.readAsDataURL(file);
    });

  const onChangeImg = async () => {
    setProfileImg(await readFile(editImg.current.files[0]));
  };

  return (
    <>
      {myInfo && (
        <div className={styles.container}>
          <div className={styles.imagewrapper}>
            <input
              className={styles.editImg}
              type="file"
              ref={editImg}
              onChange={() => onChangeImg()}
            />
            <img
              src={profileImg}
              alt="profile"
              onClick={() => editImg?.current && editImg.current.click()}
            />
          </div>
          <div className={styles.title}>{username}</div>
          <div className={styles.infowrapper}>
            <InfoItem title="email" value={email} readOnly />
            <InfoItem title="실명" value={username} readOnly />
            <InfoItem
              title="github 주소"
              value={url}
              onChange={(e) => {
                setProfileByKey('url', e.target.value);
              }}
              readOnly={false}
            />
            <InfoItem
              title="Position"
              value={position}
              onChange={(e) => {
                setProfileByKey('position', e.target.value);
              }}
              readOnly={false}
            />
          </div>
          <div className={styles.buttonwrapper}>
            <ButtonItem text="수정하기" onClick={() => setPopup((curVal) => !curVal)} />
          </div>
        </div>
      )}
      {popup ? (
        <PromisePopup
          title="정말 수정하시겠습니까?"
          promiseOnClickY={() => {
            return fetchProfile(myInfo.profile)
              .then((res) => {
                setProfile(res.data);
                setTimeout(() => {
                  setPopup((curVal) => !curVal);
                }, 1000);
                return res;
              })
              .catch((err) => {
                if (err.response.status === 400 && err.response.data) {
                  const message = Object.values(err.response.data);
                  return new Error(message[0][0]);
                }
                return new Error(err.message);
              });
          }}
          onClickN={() => setPopup((curVal) => !curVal)}
        />
      ) : null}
    </>
  );
};

export default MyContainer;
