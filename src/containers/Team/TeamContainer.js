import React from 'react';
import PropTypes from 'prop-types';
import { MemberItem } from 'components/MemberItem';
import { Popup } from 'components/Popup';
import styles from 'styles/containers/teamContainer.module.scss';
import useTeamInfoById from 'components/hooks/useTeamInfoById';

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

export const TeamContainer = ({ id }) => {
  console.log(id);
  const [popup, setPopup] = React.useState(false);
  const [myTeam] = useTeamInfoById(id);
  return (
    <>
      <div className={styles.container}>
        {myTeam && myTeam.length > 0 ? (
          <>
            {myTeam.map((data) => {
              return (
                <>
                  <div className={styles.title}>팀명 : {data.name}</div>
                  <div className={styles.membertitle}>
                    멤버 구성({data.users ? data.users.length : 0})
                  </div>
                  <div className={styles.memberwrapper}>
                    {data.users &&
                      data.users.map((item) => {
                        return (
                          <MemberItem
                            title={`${item.last_name} ${item.first_name}`}
                            sub="Member"
                            onClick={defaultOnClick}
                            key={item.id}
                          />
                        );
                      })}
                  </div>
                </>
              );
            })}
            {id ? null : (
              <div className={styles.buttonwrapper}>
                <ButtonItem text="팀 초대링크 복사하기" onClick={defaultOnClick} />
                <ButtonItem text="팀 탈퇴하기" onClick={() => setPopup((curVal) => !curVal)} />
              </div>
            )}
          </>
        ) : (
          <>{id ? <p> 해당 팀이 존재하지 않습니다. </p> : <p> 속한 팀이 없습니다. </p>}</>
        )}
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

TeamContainer.propTypes = {
  id: PropTypes.number,
};

export default TeamContainer;
