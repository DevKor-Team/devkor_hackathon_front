import React from 'react';
import { MyContainer } from 'containers/My/MyContainer';
import styles from 'styles/index.module.scss';

export default function My() {
  return (
    <div className={styles.wrapper}>
      <MyContainer />
    </div>
  );
}
