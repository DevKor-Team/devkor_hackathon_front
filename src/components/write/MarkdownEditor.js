import React from 'react';
// import PropTypes from 'prop-types';
import MarkdownTitleEditor from 'components/write/MarkdownTitleEditor';
import MarkdownSubmit from 'components/write/MarkdownSubmit';
import styles from 'styles/containers/write.module.scss';
import dynamic from 'next/dynamic';

const MarkdownDescEditor = dynamic(import('components/write/MarkdownDescEditor'), { ssr: false });
const MarkdownEditor = () => {
  return (
    <div className={styles.editorContainer}>
      <MarkdownTitleEditor />
      {/* MarkdownTagEditor */}
      <MarkdownDescEditor />
      <MarkdownSubmit />
    </div>
  );
};

export default MarkdownEditor;
