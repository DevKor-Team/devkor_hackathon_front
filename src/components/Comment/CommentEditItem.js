import styles from 'styles/components/comment/commentEditItem.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { patchComments } from 'reducers/comments';
import { useState } from 'react';
import { LoadingSpinner } from 'components/Loading';
import { CommentButton, SubmitButton } from './CommentButton';

export const CommentEditItem = ({ id, idx, onCancel, onSubmit, defaultValue }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const ItemID = id;

  const editComment = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    // loading
    setLoading('pending');

    dispatch(() => patchComments(dispatch, ItemID, idx, data))
      .then(() => onSubmit())
      .catch(() => {
        alert('댓글이 정상적으로 수정되지 못했습니다!');
        onSubmit();
      });
    return null;
  };

  if (loading === false) {
    return (
      <form className={styles.editbox} onSubmit={editComment}>
        <textarea name="content" defaultValue={defaultValue} />
        <div className={styles.button_wrapper}>
          <CommentButton onClick={onCancel}>취소</CommentButton>
          <SubmitButton>수정</SubmitButton>
        </div>
      </form>
    );
  }
  if (loading === 'pending') {
    return (
      <div className={styles.editbox}>
        <LoadingSpinner width={50} height={50} text="댓글 수정 중 ... " />
      </div>
    );
  }
  return null;
};

CommentEditItem.propTypes = {
  id: PropTypes.number,
  idx: PropTypes.number,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  defaultValue: PropTypes.string,
};
export default CommentEditItem;
