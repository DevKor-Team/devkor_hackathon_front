import React from 'react';
import styles from 'styles/containers/banner2.module.scss';

export const Banner2 = () => {
  return (
    <div className={styles.banner2}>
      <span>TAGS</span>
      <div className={styles.tagbox}>
        <div className={styles.tagbox__item}>React.js</div>
        <div className={styles.tagbox__item}>Django</div>
        <div className={styles.tagbox__item}>HTML5</div>
        <div className={styles.tagbox__item}>CSS3</div>
      </div>
      <div className={styles.tagbox}>
        <div className={styles.tagbox__item}> Frontend </div>
        <div className={styles.tagbox__item}> Backend </div>
        <div className={styles.tagbox__item}> Redux </div>
        <div className={styles.tagbox__item}> AWS </div>
        <div className={styles.tagbox__item}> SQL </div>
      </div>
      <div className={styles.tagbox}>
        <div className={styles.tagbox__item}> Javascript </div>
        <div className={styles.tagbox__item}> MySQL </div>
        <div className={styles.tagbox__item}> Postgresql </div>
        <div className={styles.tagbox__item}> DevKOR </div>
        <div className={styles.tagbox__item}> Devathon </div>
      </div>
    </div>
  );
};

export default Banner2;
