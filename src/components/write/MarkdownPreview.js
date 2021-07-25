import React from 'react';
// import PropTypes from 'prop-types';
import styles from 'styles/containers/write.module.scss';

const MarkdownPreview = () => {
  const text = '#hello';
  return <div className={styles.previewContainer}>{text}</div>;
};

export default MarkdownPreview;
