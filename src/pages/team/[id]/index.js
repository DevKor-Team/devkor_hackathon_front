import React from 'react';
import { useRouter } from 'next/router';
import TeamContainer from 'containers/Team/TeamContainer';
import CheckLogin from 'containers/CheckLogin';
import styles from 'styles/index.module.scss';

export default function Team() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.wrapper}>
      <CheckLogin>
        <TeamContainer id={id} />
      </CheckLogin>
    </div>
  );
}
