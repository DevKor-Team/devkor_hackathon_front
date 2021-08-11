import Modal from 'components/Modal';
import useSubmitPopup from 'components/hooks/write/useSubmitPopup';
import styles from 'styles/components/markdownpopup.module.scss';
import useThumbnail from 'components/hooks/write/useThumbnail';
import MarkdownSubeditor from 'components/write/MarkdownSubEditor';

const MarkdownPopup = () => {
  const [submitPopup, setSubmitPopup] = useSubmitPopup(); // using only setSubmitPopup
  const [thumbnail, setThumbnail, resetThumbnail] = useThumbnail();

  return (
    <Modal
      isOn={submitPopup}
      turnOff={() => {
        setSubmitPopup(false);
      }}
    >
      <div className={styles.popupContainer}>
        <div className={styles.thumbnailContainer}>
          {thumbnail ? (
            <img src={thumbnail} alt="thumbnail" />
          ) : (
            <span>
              프로젝트를 가장 잘 나타내는 이미지를 등록해주세요!
              <br />
              ex.) 로고, 썸네일
            </span>
          )}
          <div className={styles.thumbnailButtonContainer}>
            <button type="button" onClick={setThumbnail}>
              {thumbnail ? '수정하기' : '등록하기'}
            </button>
            {thumbnail && (
              <button type="button" onClick={resetThumbnail}>
                삭제하기
              </button>
            )}
          </div>
        </div>
        <MarkdownSubeditor />
      </div>
    </Modal>
  );
};

export default MarkdownPopup;
