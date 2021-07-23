import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
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
  const router = useRouter();
  const [focusTeamId, setFocusTeamId] = React.useState(null);
  const [team] = useTeamInfoById(id);
  console.log(team);

  const myInfo = useSelector((state) => state.users.user);
  let isMyTeam = false;
  const ids = team && team.users && team.users.map((item) => item.id);
  if (ids && ids.includes(myInfo.id)) {
    isMyTeam = true;
  }

  return (
    <>
      <div className={styles.container}>
        {team ? (
          <MyTeamItem data={team} setFocusTeamId={setFocusTeamId} isMyTeam={isMyTeam} />
        ) : (
          <p> 해당 팀이 존재하지 않습니다. &#128575;</p>
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

TeamContainer.propTypes = {
  id: PropTypes.string,
};

export default TeamContainer;
