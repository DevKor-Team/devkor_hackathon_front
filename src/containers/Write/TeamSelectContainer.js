import React from 'react';
import { useRouter } from 'next/router';
import styles from 'styles/containers/teamSelectContainer.module.scss';
import TeamSelector from 'components/write/TeamSelector';
import { ButtonItem2 } from 'components/Button';
import moveTo from 'components/util/moveTo';
import useTeam from 'components/hooks/write/useTeam';
import { useSelector } from 'react-redux';

const TeamSelectContainer = () => {
  const router = useRouter();
  const [team, setTeam] = useTeam();
  const myLeaderInfo = useSelector((state) => state.users.leader);
  //   const [myLeaderInfo] = useMyLeaderInfo();
  React.useEffect(() => {
    console.log(myLeaderInfo.length);
    if (myLeaderInfo.length === 1) {
      setTeam(myLeaderInfo[0]);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>데모를 작성할 팀을 선택해주세요</div>
      <div className={styles.selectorWrapper}>
        <TeamSelector
          placeholder="데모를 작성할 팀을 선택해주세요"
          customStyle={{
            container: (base) => ({
              ...base,
              width: '60%',
              left: '50%',
              transform: 'translateX(-50%)',
            }),
            singleValue: (base) => ({
              ...base,
              right: '0px',
              color: 'black',
              textAlign: 'right',
            }),
          }}
        />
      </div>
      <ButtonItem2
        text="팀 선택하기"
        onClick={() => {
          if (team) {
            moveTo(router, '/write?phase=2');
          } else {
            alert('팀을 선택해주세요!');
          }
        }}
        className={styles.submitButton}
        click
      />
    </div>
  );
};

export default TeamSelectContainer;
