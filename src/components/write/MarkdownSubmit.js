import React from 'react';
import styles from 'styles/containers/write.module.scss';

const MarkdownSubmit = () => {
  return (
    <div className={styles.submitContainer}>
      <button className={styles.submitContainerExit} type="button">
        {'< 나가기'}
      </button>
      <button className={styles.submitContainerSubmit} type="button">
        등륵하기
      </button>
    </div>
  );
};

export default MarkdownSubmit;
