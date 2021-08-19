import React from 'react';
import MarkdownEditor from 'components/write/MarkdownEditor';
import MarkdownPreview from 'components/write/MarkdownPreview';
import wrapperStyles from 'styles/index.module.scss';
import styles from 'styles/containers/write.module.scss';
import MarkdownPopup from 'components/write/MarkdownPopup';
import useTeam from 'components/hooks/write/useTeam';
import { useRouter } from 'next/router';
import moveTo from 'components/util/moveTo';
import { getDemoById, resetDemo } from 'reducers/demo';
import { useDispatch } from 'react-redux';

const WriteContainer = () => {
  const [team] = useTeam();
  const router = useRouter();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!team) return moveTo(router, '/write?phase=1');
    if (team && team.demo) {
      dispatch((d) => {
        getDemoById(d, team.demo);
      });
    }
    return () => {
      dispatch(resetDemo);
    };
  }, []);
  return (
    <div className={wrapperStyles.wrapper}>
      <div className={styles.container}>
        <MarkdownEditor />
        <MarkdownPreview />
      </div>
      <MarkdownPopup />
    </div>
  );
};

export default WriteContainer;
