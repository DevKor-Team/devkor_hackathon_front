import useSubtitle from 'components/hooks/write/useSubtitle';
import TagEditor from 'components/tagEditor';
import TeamSelector from 'components/write/TeamSelector';
import useTechStacks from 'components/hooks/write/useTechStacks';
import MarkdownSubmit from 'components/write/MarkdownSubmit';
import useSubmitPopup from 'components/hooks/write/useSubmitPopup';
import styles from 'styles/components/markdownpopup.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { useSelector } from 'react-redux';
import { fetchDemo, postDemo } from 'axios/Demo';
import moveTo from 'components/util/moveTo';
import { useRouter } from 'next/router';

const MarkdownSubeditor = () => {
  const router = useRouter();
  const title = useSelector((state) => state.demo.title);
  const demo = useSelector((state) => state.demo);

  const [subtitle, setSubtitle] = useSubtitle();
  const [techStacks, setTechStacks] = useTechStacks();
  const setSubmitPopup = useSubmitPopup()[1]; // using only setSubmitPopup

  const submit = async () => {
    const formData = new FormData();
    if (demo.thumbnail) {
      const blob = await fetch(demo.thumbnail.url).then((r) => {
        return r.blob();
      });
      formData.append('thumbnail', blob, demo.thumbnail.name);
    } else {
      throw new Error('썸네일을 등록해주세요');
    }
    if (demo.title) {
      formData.append('title', demo.title);
    } else {
      throw new Error('제목을 입력해주세요');
    }
    if (demo.description) {
      formData.append('desc', demo.description);
    } else {
      throw new Error('설명을 입력해주세요');
    }
    if (demo.subtitle) {
      formData.append('sub_title', demo.subtitle);
    } else {
      throw new Error('간단한 설명을 입력해주세요');
    }
    // 기본값이 empty array
    formData.append('tags', JSON.stringify(demo.tags));
    formData.append('tech_stacks', JSON.stringify(demo.techStacks));
    if (demo.team.id) {
      formData.append('team', demo.team.id);
    } else {
      throw new Error('팀을 선택해주세요');
    }
    if (typeof demo.id === 'number') {
      try {
        const res = await fetchDemo(formData, demo.id);
        return res;
      } catch (err) {
        throw new Error(err.message);
      }
    } else {
      try {
        const res = await postDemo(formData);
        return res;
      } catch (err) {
        throw new Error(err.message);
      }
    }
  };

  return (
    <div className={styles.subEditorContainer}>
      <div className={styles.subEditorBox}>
        <h3>{title || '제목을 입력하세요'}</h3>
        <div className={styles.tagEditorWrapper}>
          <TagEditor
            placeholder="기술 스택을 입력하세요"
            tags={techStacks}
            onChange={setTechStacks}
          />
        </div>
        <div className={styles.teamEditorWrapper}>
          <TeamSelector placeholder="프로젝트를 제작한 팀을 선택해주세요" readOnly />
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
          yes: () =>
            submit()
              .then((res) => {
                console.log(res);
                return moveTo(router, `/demo/${res.data.id}`);
              })
              .catch((err) => {
                return new Error(err.message);
              }),
          no: () => setSubmitPopup(false),
        }}
        promise
      />
    </div>
  );
};

export default MarkdownSubeditor;
