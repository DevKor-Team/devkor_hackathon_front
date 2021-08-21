import React from 'react';
import UserContainer from 'containers/User/UserContainer';
import styles from 'styles/index.module.scss';
import { useRouter } from 'next/router';

export default function My() {
  const router = useRouter();
  const { id } = router.query;

  return <div className={styles.wrapper}>{id && <UserContainer id={id} />}</div>;
}
