import React from 'react';
import { useRouter } from 'next/router';
import TeamRegisterContainer from 'containers/Team/TeamRegisterContainer';
import CheckLogin from 'containers/CheckLogin';
import styles from 'styles/index.module.scss';

export default function Team() {
  const router = useRouter();
  const { id, token } = router.query;
  return (
    <div className={styles.wrapper}>
      <CheckLogin>
        <TeamRegisterContainer id={id} token={token} />
      </CheckLogin>
    </div>
  );
}
