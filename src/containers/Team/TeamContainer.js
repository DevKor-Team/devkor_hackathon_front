import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ButtonItem from 'components/Button';
import { PromisePopup } from 'components/Popup';
import { MyTeamItem } from 'components/team/TeamItem';
import { leaveTeamById } from 'components/team/teamAuth';
import styles from 'styles/containers/teamContainer.module.scss';

ButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const TeamContainer = ({ team }) => {
  const router = useRouter();
  const [focusTeamId, setFocusTeamId] = React.useState(null);

  return (
    <>
      <div className={styles.container}>
        {team ? (
          <MyTeamItem data={team} setFocusTeamId={setFocusTeamId} isMyTeam={false} />
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
  team: {
    id: PropTypes.number,
    demo: PropTypes.number,
    leader: PropTypes.object,
    users: PropTypes.object,
  },
};

export default TeamContainer;
