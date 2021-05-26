import React from 'react';
import PropTypes from 'prop-types';
import { MemberItem } from 'components/MemberItem';
import { Popup } from 'components/Popup';
import styles from 'styles/containers/teamContainer.module.scss';

const defaultOnClick = () => {
  alert('준비 중인 기능입니다.');
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

export const TeamContainer = () => {
  const [popup, setPopup] = React.useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>팀명 : DevKor</div>
        <div className={styles.membertitle}>멤버 구성(4)</div>
        <div className={styles.memberwrapper}>
          <MemberItem title="TaehoLee" sub="Leader" onClick={defaultOnClick} />
          <MemberItem title="L0z1k" sub="Member" onClick={defaultOnClick} />
          <MemberItem title="froggagul" sub="Member" onClick={defaultOnClick} />
          <MemberItem title="bbangjo" sub="Member" onClick={defaultOnClick} />
        </div>
        <div className={styles.buttonwrapper}>
          <ButtonItem text="팀 초대링크 복사하기" onClick={defaultOnClick} />
          <ButtonItem text="팀 탈퇴하기" onClick={() => setPopup((curVal) => !curVal)} />
        </div>
      </div>
      {popup ? (
        <Popup
          title="정말 탈퇴하시겠습니까?"
          onClickY={defaultOnClick}
          onClickN={() => setPopup((curVal) => !curVal)}
        />
      ) : null}
    </>
  );
};

export default TeamContainer;
