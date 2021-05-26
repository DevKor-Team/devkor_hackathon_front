import React from 'react';
import styles from 'styles/containers/banner2.module.scss';

export const Banner2 = () => {
  return (
    <div className={styles.banner2}>
      <span>TAGS</span>
      <div className={styles.tagbox}>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
      </div>
      <div className={styles.tagbox}>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
      </div>
      <div className={styles.tagbox}>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
        <div className={styles.tagbox__item}>Academic</div>
      </div>
    </div>
  );
};

export default Banner2;
