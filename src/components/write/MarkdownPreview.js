import React from 'react';
import Markdown from 'markdown-to-jsx';
import styles from 'styles/containers/write.module.scss';
import { useSelector } from 'react-redux';

const MarkdownPreview = () => {
  const demoInfo = useSelector((state) => state.demo);

  return (
    <div className={styles.previewContainer}>
      <h4>{demoInfo.title}</h4>
      <Markdown>{demoInfo.description}</Markdown>
    </div>
  );
};

export default MarkdownPreview;
