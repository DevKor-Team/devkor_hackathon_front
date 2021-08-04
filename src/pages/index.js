import React from 'react';
import { Banner1 } from 'containers/Home/Banner1';
import { Banner2 } from 'containers/Home/Banner2';
import { Banner3 } from 'containers/Home/Banner3';
import styles from 'styles/index.module.scss';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Banner1 />
      <Banner2 />
      <Banner3 />
    </main>
  );
}
