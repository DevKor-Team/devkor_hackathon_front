import styles from 'styles/components/comment/commentEditItem.module.scss';
import PropTypes from 'prop-types';
import { CommentButton, SubmitButton } from './CommentButton';

export const CommentEditItem = ({ target, onCancel, onSubmit, defaultValue }) => {
  const editComment = (e) => {
    e.preventDefault();

    // const data = new FormData(e.target);
    console.log(target);
    // 수정한 게시글 내용 변경
    // target.current.innerHTML = data.get('content');
    onSubmit();
  };
  return (
    <form className={styles.editbox} onSubmit={editComment}>
      <textarea name="content">{defaultValue}</textarea>
      <div className={styles.button_wrapper}>
        <CommentButton onClick={onCancel}>취소</CommentButton>
        <SubmitButton>수정</SubmitButton>
      </div>
    </form>
  );
};

CommentEditItem.propTypes = {
  target: PropTypes.any,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  defaultValue: PropTypes.string,
};
export default CommentEditItem;
