import React from 'react';
import Markdown from 'markdown-to-jsx';
import styles from 'styles/containers/write.module.scss';
import { useSelector } from 'react-redux';

const MarkdownPreview = () => {
  const demoInfo = useSelector((state) => state.demo);

  return (
    <div className={styles.previewContainer}>
      {demoInfo.title && <h1 className={styles.title}>{demoInfo.title}</h1>}
      <div className={styles.previewBox}>
        <Markdown>{demoInfo.description}</Markdown>
      </div>
    </div>
  );
};

export default MarkdownPreview;
