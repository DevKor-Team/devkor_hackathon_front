import React, { useEffect } from 'react';
import TeamContainer from 'containers/Team/TeamContainer';
import CheckLogin from 'containers/CheckLogin';
import styles from 'styles/index.module.scss';
import { getTeamList } from 'axios/Team';

export default function Team() {
  const [teams, setTeams] = React.useState([]);
  useEffect(() => {
    getTeamList().then((res) => {
      setTeams(res.data.results);
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <CheckLogin>
        {teams.map((team) => (
          <TeamContainer team={team} />
        ))}
      </CheckLogin>
    </div>
  );
}
