import styles from 'styles/components/markdownpopup.module.scss';
import useSubtitle from 'components/hooks/write/useSubtitle';
import useTitle from 'components/hooks/write/useTitle';
import TagEditor from 'components/write/TagEditor';
import TeamSelector from 'components/write/TeamSelector';

const MarkdownSubeditor = () => {
  const [title] = useTitle();
  const [subtitle, setSubtitle] = useSubtitle();

  return (
    <div className={styles.subEditorContainer}>
      <h4>{title}</h4>
      <TagEditor placeholder="기술 스택을 입력하세요" />
      <TeamSelector placeholder="프로젝트를 제작한 팀을 선택해주세요" />
      <div className={styles.subtitleContainer}>
        <input
          value={subtitle}
          placeholder="프로젝트에 대해 간단하게 설명해주세요"
          onChange={(e) => {
            setSubtitle(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default MarkdownSubeditor;
