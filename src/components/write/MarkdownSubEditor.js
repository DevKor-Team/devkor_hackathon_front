import styles from 'styles/components/markdownpopup.module.scss';
import useSubtitle from 'components/hooks/write/useSubtitle';
import useTitle from 'components/hooks/write/useTitle';
import TagEditor from 'components/tagEditor';
import TeamSelector from 'components/write/TeamSelector';
import useTags from 'components/hooks/write/useTag';

const MarkdownSubeditor = () => {
  const [title] = useTitle();
  const [subtitle, setSubtitle] = useSubtitle();
  const [tags, setTags] = useTags();

  return (
    <div className={styles.subEditorContainer}>
      <h3>{title}</h3>
      <div className={styles.tagEditorWrapper}>
        <TagEditor placeholder="기술 스택을 입력하세요" tags={tags} onChange={setTags} />
      </div>
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
