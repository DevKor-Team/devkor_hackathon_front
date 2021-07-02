import React from 'react';
import { useRouter } from 'next/router';
import { TeamContainer } from 'containers/Team/TeamContainer';
import styles from 'styles/index.module.scss';

export default function Team() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  console.log(id);
  return (
    <div className={styles.wrapper}>
      <TeamContainer id={id} />
    </div>
  );
}
