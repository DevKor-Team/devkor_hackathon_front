import React from 'react';
import { TeamContainer } from 'containers/Team/TeamContainer';
import styles from 'styles/index.module.scss';

export default function Team() {
  return (
    <div className={styles.wrapper}>
      <TeamContainer />
    </div>
  );
}
