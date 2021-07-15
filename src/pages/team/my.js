import React from 'react';
import MyTeamContainer from 'containers/Team/MyTeamContainer';
import styles from 'styles/index.module.scss';

export default function Team() {
  return (
    <div className={styles.wrapper}>
      <MyTeamContainer />
    </div>
  );
}
