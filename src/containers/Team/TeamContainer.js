import React from 'react';
import PropTypes from 'prop-types';
import { MemberItem } from 'components/MemberItem';
import { Popup } from 'components/Popup';
import styles from 'styles/containers/teamContainer.module.scss';
import { getTeam } from 'reducers/users';
import { useSelector, useDispatch } from 'react-redux';

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
  const myTeam = useSelector((state) => state.users.team);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTeam).then(() => {
      console.dir('팀 정보 불러오기 완료');
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        {myTeam ? (
          myTeam.map((data) => {
            return (
              <>
                <div className={styles.title}>팀명 : {data.name}</div>
                <div className={styles.membertitle}>멤버 구성({data.users.length})</div>
                <div className={styles.memberwrapper}>
                  {data.users.map((item) => {
                    return (
                      <MemberItem title={item.username} sub="Member" onClick={defaultOnClick} />
                    );
                  })}
                </div>
              </>
            );
          })
        ) : (
          <p> 속한 팀이 없습니다. </p>
        )}
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
