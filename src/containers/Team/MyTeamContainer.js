import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ButtonItem from 'components/Button';
import { PromisePopup } from 'components/Popup';
import { MyTeamItem } from 'components/team/TeamItem';
import useTeamInfoById from 'components/hooks/useTeamInfoById';
import { leaveTeamById } from 'components/team/teamAuth';
import styles from 'styles/containers/teamContainer.module.scss';

ButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const TeamContainer = ({ id }) => {
  console.log(id);
  const router = useRouter();
  const [currTeamId, setCurrTeamId] = React.useState(null);
  const [team] = useTeamInfoById(id);
  return (
    <>
      <div className={styles.container}>
        {team && team.length > 0 ? (
          <>
            {team.map((data) => {
              return <MyTeamItem data={data} setCurrTeamId={setCurrTeamId} isMyTeam />;
            })}
          </>
        ) : (
          <>
            {id ? (
              <p> 해당 팀이 존재하지 않습니다. &#128575;</p>
            ) : (
              <p> 현재 속한 팀이 없습니다. &#128575;</p>
            )}
          </>
        )}
      </div>
      {currTeamId ? (
        <PromisePopup
          title="정말 탈퇴하시겠습니까?"
          promiseOnClickY={() =>
            leaveTeamById(currTeamId).then((res) => {
              setTimeout(() => {
                setCurrTeamId(null);
                router.reload();
              }, 1000);
              return res;
            })
          }
          onClickN={() => setCurrTeamId(null)}
        />
      ) : null}
    </>
  );
};

TeamContainer.propTypes = {
  id: PropTypes.number,
};

export default TeamContainer;
