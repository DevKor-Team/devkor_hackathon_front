import React from 'react';
import MarkdownEditor from 'components/write/MarkdownEditor';
import MarkdownPreview from 'components/write/MarkdownPreview';
import wrapperStyles from 'styles/index.module.scss';
import styles from 'styles/containers/write.module.scss';
import MarkdownPopup from 'components/write/MarkdownPopup';
import CheckLogin from 'containers/CheckLogin';
import CheckLeader from 'containers/CheckLeader';

export default function WritePage() {
  // get id from query

  return (
    // check permission - 로그인, 팀장
    <CheckLogin>
      <CheckLeader>
        <div className={wrapperStyles.wrapper}>
          <div className={styles.container}>
            <MarkdownEditor />
            <MarkdownPreview />
          </div>
          <MarkdownPopup />
        </div>
      </CheckLeader>
    </CheckLogin>
  );
}
