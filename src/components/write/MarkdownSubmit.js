import React from 'react';
import styles from 'styles/containers/write.module.scss';
import useSubmitPopup from 'components/hooks/write/useSubmitPopup';
import { useRouter } from 'next/router';

const MarkdownSubmit = () => {
  const setSubmitPopup = useSubmitPopup()[1]; // using only setSubmitPopup
  const router = useRouter();

  return (
    <div className={styles.submitContainer}>
      <button
        className={styles.submitContainerExit}
        type="button"
        onClick={() => {
          router.back();
        }}
      >
        {'< 나가기'}
      </button>
      <button
        className={styles.submitContainerSubmit}
        type="button"
        onClick={() => {
          setSubmitPopup(true);
        }}
      >
        등륵하기
      </button>
    </div>
  );
};

export default MarkdownSubmit;
