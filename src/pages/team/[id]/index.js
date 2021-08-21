import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import TeamContainer from 'containers/Team/TeamContainer';
import CheckLogin from 'containers/CheckLogin';
import styles from 'styles/index.module.scss';
import { getTeamInfoById } from 'axios/Team';

export default function Team() {
  const router = useRouter();
  const { id } = router.query;
  const [team, setTeam] = React.useState();

  useEffect(() => {
    if (id) {
      getTeamInfoById(id)
        .then((res) => {
          setTeam(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  return (
    <div className={styles.wrapper}>
      <CheckLogin>
        <TeamContainer team={team} />
      </CheckLogin>
    </div>
  );
}
