import styles from 'styles/components/comment.module.scss';

export const CommentComponent = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.emotion_wrapper}>
        <li> aa </li>
        <li> aa </li>
        <li> aa </li>
        <li> aa </li>
        <li> aa </li>
        <li> aa </li>
      </ul>
      <form>
        <div className={styles.buttonwrapper}>
          <button type="button" className={styles.login}>
            {' '}
            LOGIN{' '}
          </button>
          <button type="button" className={styles.login}>
            {' '}
            SIGNUP{' '}
          </button>
        </div>
        <textarea placeholder="댓글을 입력해 주세요" name="content" />
        <div className={styles.buttonwrapper} style={{ justifyContent: 'flex-end' }}>
          <button type="submit" className={styles.submit}>
            {' '}
            COMMENT{' '}
          </button>
        </div>
      </form>
    </div>
  );
};
export default CommentComponent;
