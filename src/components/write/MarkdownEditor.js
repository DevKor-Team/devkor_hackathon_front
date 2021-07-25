import React from 'react';
// import PropTypes from 'prop-types';
import MarkdownEditorPanel from 'components/write/MarkdownEditorPanel';
import MarkdownTitleEditor from 'components/write/MarkdownTitleEditor';
// import MarkdownDescEditor from 'components/write/MarkdownDescEditor';
import styles from 'styles/containers/write.module.scss';
import dynamic from 'next/dynamic';

const MarkdownDescEditor = dynamic(import('components/write/MarkdownDescEditor'), { ssr: false });
const MarkdownEditor = () => {
  return (
    <div className={styles.editorContainer}>
      <MarkdownTitleEditor />
      {/* MarkdownTagEditor */}
      <MarkdownEditorPanel />
      <MarkdownDescEditor />
      {/* MarkdownSubmit */}
    </div>
  );
};

export default MarkdownEditor;
