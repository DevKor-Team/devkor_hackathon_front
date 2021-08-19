import React from 'react';
import { Banner1 } from 'containers/Home/Banner1';
import { Banner2 } from 'containers/Home/Banner2';
import styles from 'styles/index.module.scss';
import Project from 'containers/Project/ProjectContainer';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Banner1 />
      <Banner2 />
      <Project />
    </main>
  );
}
