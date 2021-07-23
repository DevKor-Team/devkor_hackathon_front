import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ButtonItem from 'components/Button';
import { PromisePopup } from 'components/Popup';
import { RegisterTeamItem } from 'components/team/TeamItem';
import useTeamInfoById from 'components/hooks/useTeamInfoById';
import { registerTeamById } from 'components/team/teamAuth';
import styles from 'styles/containers/teamContainer.module.scss';

ButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const TeamRegisterContainer = ({ id, token }) => {
  const router = useRouter();
  const [currTeamId, setCurrTeamId] = React.useState(null);
  const [team] = useTeamInfoById(id);

  const myInfo = useSelector((state) => state.users.user);
  let isMyTeam = false;
  const ids = team && team.users && team.users.map((item) => item.id);
  if (ids && myInfo && ids.includes(myInfo.id)) {
    isMyTeam = true;
  }

  return (
    <>
      <div className={styles.container}>
        {team && <RegisterTeamItem data={team} setCurrTeamId={setCurrTeamId} isMyTeam={isMyTeam} />}
      </div>
      {currTeamId ? (
        <PromisePopup
          title="정말 가입하시겠습니까?"
          promiseOnClickY={() =>
            registerTeamById(team.id, token).then((res) => {
              setTimeout(() => {
                setCurrTeamId(null);
                router.push(`/team/${team.id}`);
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

TeamRegisterContainer.propTypes = {
  id: PropTypes.string,
  token: PropTypes.string,
};

export default TeamRegisterContainer;
