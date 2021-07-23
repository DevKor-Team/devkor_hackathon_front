import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ButtonItem from 'components/Button';
import { PromisePopup } from 'components/Popup';
import { MyTeamItem } from 'components/team/TeamItem';
import useMyTeamInfo from 'components/hooks/useMyTeamInfo';
import { leaveTeamById } from 'components/team/teamAuth';
import styles from 'styles/containers/teamContainer.module.scss';

ButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const MyTeamContainer = () => {
  const router = useRouter();
  const [focusTeamId, setFocusTeamId] = React.useState(null);
  const [team] = useMyTeamInfo();

  return (
    <>
      <div className={styles.container}>
        {team && team.length > 0 ? (
          <>
            {team.map((data) => {
              return <MyTeamItem data={data} setFocusTeamId={setFocusTeamId} isMyTeam />;
            })}
          </>
        ) : (
          <p> 현재 속한 팀이 없습니다. &#128575;</p>
        )}
      </div>
      {focusTeamId ? (
        <PromisePopup
          title="정말 탈퇴하시겠습니까?"
          promiseOnClickY={() =>
            leaveTeamById(focusTeamId).then((res) => {
              setTimeout(() => {
                setFocusTeamId(null);
                router.reload();
              }, 1000);
              return res;
            })
          }
          onClickN={() => setFocusTeamId(null)}
        />
      ) : null}
    </>
  );
};

export default MyTeamContainer;
