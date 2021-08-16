import React from 'react';
import { ProjectItem } from 'components/ProjectItem';
import styles from 'styles/containers/banner3.module.scss';

export const Banner3 = () => {
  return (
    <div className={styles.banner3}>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
};

export default Banner3;
