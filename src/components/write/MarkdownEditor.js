import React from 'react';
// import PropTypes from 'prop-types';
import MarkdownTitleEditor from 'components/write/MarkdownTitleEditor';
import MarkdownSubmit from 'components/write/MarkdownSubmit';
import styles from 'styles/containers/write.module.scss';
import dynamic from 'next/dynamic';
import useSubmitPopup from 'components/hooks/write/useSubmitPopup';
import { useRouter } from 'next/router';

const MarkdownDescEditor = dynamic(import('components/write/MarkdownDescEditor'), { ssr: false });
const MarkdownEditor = () => {
  const setSubmitPopup = useSubmitPopup()[1]; // using only setSubmitPopup
  const router = useRouter();

  return (
    <div className={styles.editorContainer}>
      <MarkdownTitleEditor />
      {/* MarkdownTagEditor */}
      <MarkdownDescEditor />
      <MarkdownSubmit
        texts={{
          yes: '등륵하기',
          no: '< 나가기',
        }}
        onClicks={{
          yes: () => setSubmitPopup(true),
          no: () => router.back(),
        }}
      />
    </div>
  );
};

export default MarkdownEditor;
