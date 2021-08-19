import React from 'react';
import { Banner1 } from 'containers/Home/Banner1';
import { Banner2 } from 'containers/Home/Banner2';
import styles from 'styles/index.module.scss';
import Project from 'containers/Project/ProjectContainer';
import { useSelector } from 'react-redux';

export default function Home() {
  const tags = useSelector((state) => state.tags.tags)
    .filter((tag) => tag.active)
    .map((tag) => tag.name);
  console.log(tags);
  return (
    <main className={styles.wrapper}>
      <Banner1 />
      <Banner2 />
      <Project searchTags={tags} />
    </main>
  );
}
