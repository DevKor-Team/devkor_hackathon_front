import React from 'react';
import { ProjectItem } from 'components/ProjectItem';
import styles from 'styles/containers/banner3.module.scss';

export const Banner3 = () => {
  return (
    <div className={styles.banner3}>
      <div className={styles.projectwrapper}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <div className={styles.projectwrapper}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <div className={styles.projectwrapper}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Banner3;
