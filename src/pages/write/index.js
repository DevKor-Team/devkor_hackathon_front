import React from 'react';
import MarkdownEditor from 'components/write/MarkdownEditor';
import MarkdownPreview from 'components/write/MarkdownPreview';
import wrapperStyles from 'styles/index.module.scss';
import styles from 'styles/containers/write.module.scss';
import MarkdownPopup from 'components/write/MarkdownPopup';

export default function WritePage() {
  // get id from query

  return (
    // check permission - 로그인, 팀장, 게시물 존재시 소유 여부
    <div className={wrapperStyles.wrapper}>
      <div className={styles.container}>
        {/* left */}
        <MarkdownEditor />
        <MarkdownPreview />
        {/* Markdown */}
      </div>
      <MarkdownPopup />
    </div>
  );
}
