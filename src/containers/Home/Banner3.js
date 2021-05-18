import React from 'react';
import { ProjectItem } from 'components/ProjectItem';
import styles from 'styles/containers/banner3.module.scss';

export const Banner3 = () => {
  return (
    <div className={styles.home__banner3}>
      <div className={styles.home__banner3__projectwrapper}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <div className={styles.home__banner3__projectwrapper}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <div className={styles.home__banner3__projectwrapper}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Banner3;
