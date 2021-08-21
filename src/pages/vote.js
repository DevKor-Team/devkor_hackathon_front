import CheckLeader from 'containers/CheckLeader';
import React from 'react';
import VoteContainer from 'containers/Vote/VoteContainer';
import styles from 'styles/index.module.scss';

const VotePage = () => {
  return (
    <div className={styles.wrapper}>
      <CheckLeader>
        <VoteContainer />
      </CheckLeader>
    </div>
  );
};

export default VotePage;
