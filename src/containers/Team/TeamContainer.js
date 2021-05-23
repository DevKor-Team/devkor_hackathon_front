import React from 'react';
import PropTypes from 'prop-types';
import { MemberItem } from 'components/MemberItem';
import styles from 'styles/containers/teamContainer.module.scss';

const defaultOnClick = () => {
  alert('준비 중인 기능입니다.');
};

const ButtonItem = ({ text, onClick }) => {
  return (
    <div
      className={styles.team__container__buttonwrapper__button}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.team__container__buttonwrapper__button__text}>{text}</div>
    </div>
  );
};

ButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const DeletePopup = ({ onClickY, onClickN }) => {
  return (
    <div className={styles.team__container__deletepopup}>
      <div className={styles.team__container__deletepopup__container}>
        <div className={styles.team__container__deletepopup__container__title}>
          정말 탈퇴하시겠습니까?
        </div>
        <div className={styles.team__container__deletepopup__container__buttonwrapper}>
          <ButtonItem text="예" onClick={onClickY} />
          <ButtonItem text="아니요" onClick={onClickN} />
        </div>
      </div>
    </div>
  );
};

DeletePopup.propTypes = {
  onClickY: PropTypes.func,
  onClickN: PropTypes.func,
};

export const TeamContainer = () => {
  const [popup, setPopup] = React.useState(false);
  return (
    <>
      <div className={styles.team__container}>
        <div className={styles.team__container__title}>팀명 : DevKor</div>
        <div className={styles.team__container__membertitle}>멤버 구성(4)</div>
        <div className={styles.team__container__memberwrapper}>
          <MemberItem title="TaehoLee" sub="Leader" onClick={defaultOnClick} />
          <MemberItem title="L0z1k" sub="Member" onClick={defaultOnClick} />
          <MemberItem title="froggagul" sub="Member" onClick={defaultOnClick} />
          <MemberItem title="bbangjo" sub="Member" onClick={defaultOnClick} />
        </div>
        <div className={styles.team__container__buttonwrapper}>
          <ButtonItem text="팀 초대링크 복사하기" onClick={defaultOnClick} />
          <ButtonItem text="팀 탈퇴하기" onClick={() => setPopup((curVal) => !curVal)} />
        </div>
      </div>
      {popup ? (
        <DeletePopup onClickY={defaultOnClick} onClickN={() => setPopup((curVal) => !curVal)} />
      ) : null}
    </>
  );
};

export default TeamContainer;
