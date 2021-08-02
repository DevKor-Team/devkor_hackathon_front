import React from 'react';
import styles from 'styles/containers/demoContainer.module.scss';
import { CommentComponent } from 'components/Comment';
import Markdown from 'markdown-to-jsx';

const defaultThumbnail = '../images/containers/Navbar/devkor_logo.svg';

export const DemoContainer = ({ postData }) => {
  const data = postData;
  if (postData) {
    return (
      <>
        <div className={styles.leftArrow} />
        <div className={styles.rightArrow} />
        <section>
          <img
            className={styles.thumbnail}
            src={data.thumbnail ? data.thumbnail : defaultThumbnail}
            alt="thumbnail"
          />
        </section>
        <section className={styles.infobox}>
          <h1 className={styles.title}> {data.title} </h1>
          <h2 className={styles.tag}> {data.tech_stacks.map((item) => item).join(', ')} </h2>
          <p className={styles.members}>
            {' '}
            {data.team.users.map((user) => user.username).join(', ')}{' '}
          </p>
          <Markdown className={styles.desc}>{data.desc}</Markdown>
        </section>
        <CommentComponent />
      </>
    );
  }
  return null;
};

DemoContainer.propTypes = {
  postData: Object,
};

export default DemoContainer;
