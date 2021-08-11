import useSubtitle from 'components/hooks/write/useSubtitle';
import useTitle from 'components/hooks/write/useTitle';
import TagEditor from 'components/tagEditor';
import TeamSelector from 'components/write/TeamSelector';
import useTags from 'components/hooks/write/useTag';
import MarkdownSubmit from 'components/write/MarkdownSubmit';
import useSubmitPopup from 'components/hooks/write/useSubmitPopup';
import styles from 'styles/components/markdownpopup.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

const MarkdownSubeditor = () => {
  const [title] = useTitle();
  const [subtitle, setSubtitle] = useSubtitle();
  const [tags, setTags] = useTags();
  const setSubmitPopup = useSubmitPopup()[1]; // using only setSubmitPopup

  return (
    <div className={styles.subEditorContainer}>
      <div className={styles.subEditorBox}>
        <h3>{title || '제목을 입력하세요'}</h3>
        <div className={styles.tagEditorWrapper}>
          <TagEditor placeholder="기술 스택을 입력하세요" tags={tags} onChange={setTags} />
        </div>
        <div className={styles.teamEditorWrapper}>
          <TeamSelector placeholder="프로젝트를 제작한 팀을 선택해주세요" />
        </div>
        <div className={styles.subtitleContainer}>
          <TextareaAutosize
            value={subtitle}
            placeholder="프로젝트에 대해 간단하게 설명해주세요"
            onChange={(e) => {
              setSubtitle(e.target.value);
            }}
          />
        </div>
      </div>
      <MarkdownSubmit
        texts={{
          yes: '등록하기',
          no: '취소',
        }}
        onClicks={{
          yes: () => setSubmitPopup(false),
          no: () => setSubmitPopup(false),
        }}
      />
    </div>
  );
};

export default MarkdownSubeditor;
