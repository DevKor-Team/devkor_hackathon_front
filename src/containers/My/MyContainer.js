import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'components/Popup';
import styles from 'styles/containers/myContainer.module.scss';

const defaultimg = '/images/default.jpg';

const defaultOnClick = () => {
  alert('준비 중인 기능입니다.');
};

const InfoItem = ({ title }) => {
  return (
    <div className={styles.my__container__info}>
      <div className={styles.my__container__info__text}>{title}</div>
    </div>
  );
};

InfoItem.propTypes = {
  title: PropTypes.string,
};

const ButtonItem = ({ text, onClick }) => {
  return (
    <div className={styles.my__container__button} onClick={onClick} role="button" tabIndex={0}>
      <div className={styles.my__container__button__text}>{text}</div>
    </div>
  );
};

ButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export const MyContainer = () => {
  const [popup, setPopup] = React.useState(false);
  return (
    <>
      <div className={styles.my__container}>
        <div className={styles.my__container__imagewrapper}>
          <img src={defaultimg} alt="profile" />
        </div>
        <div className={styles.my__container__title}>Hojin Jung</div>
        <div className={styles.my__container__infowrapper}>
          <InfoItem title="email" />
          <InfoItem title="실명" />
          <InfoItem title="github 주소" />
          <InfoItem title="Position" />
        </div>
        <div className={styles.my__container__buttonwrapper}>
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
