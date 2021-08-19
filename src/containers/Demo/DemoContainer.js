import React from 'react';
import styles from 'styles/containers/demoContainer.module.scss';
import CommentWrapper from 'containers/Demo/CommentContainer';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';

const defaultThumbnail = '../images/containers/Navbar/devkor_logo.svg';

export const DemoContainer = ({ postData }) => {
  const data = postData;
  if (postData) {
    return (
      <>
        {/* <div className={styles.leftArrow} />
        <div className={styles.rightArrow} /> */}
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
          <div>
            <Markdown className={styles.desc}>{data.desc}</Markdown>
          </div>
        </section>
        <CommentWrapper />
      </>
    );
  }
  return null;
};

DemoContainer.propTypes = {
  postData: PropTypes.objectOf({
    id: PropTypes.number,
    created_at: PropTypes.string,
    desc: PropTypes.string,
    sub_title: PropTypes.string,
    tags: PropTypes.array,
    team: PropTypes.object,
    tech_stacks: PropTypes.array,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    updated_at: PropTypes.string,
  }),
};

export default DemoContainer;
