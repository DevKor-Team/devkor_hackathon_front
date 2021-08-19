import styles from 'styles/components/comment/commentItem.module.scss';
import PropTypes from 'prop-types';
import DateCalculator from 'components/hooks/DateCalculator';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteComments } from 'reducers/comments';
import { LoadingSpinner } from 'components/Loading';
import { CommentButton } from './CommentButton';
import CommentEditCard from './CommentEditItem';

const Edit = '/images/components/Comment/CommentItem/edit.svg';

export const CommentItem = (props) => {
  const { data, idx } = props;
  const { writer, id } = data;
  const createdAt = data.created_at;
  const dateObj = createdAt ? new DateCalculator(createdAt, moment()) : '';
  const user = useSelector((state) => state.users.user);
  const fullName = writer.last_name + writer.first_name;
  // edit mode
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  console.log(writer);
  const deleteComment = () => {
    const checkTrue = window.confirm('정말 삭제하시겠습니까?');

    if (checkTrue) {
      setLoading(true);
      dispatch(() => deleteComments(dispatch, id, idx))
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    }
    return null;
  };

  if (!loading) {
    return (
      <div className={styles.container}>
        <div className={styles.textbox}>
          {JSON.stringify(user) === JSON.stringify(writer) && (
            <div className={styles.close_btn}>
              <img src={Edit} alt="수정하기" onClick={() => setEdit(!edit)} />
              <p onClick={deleteComment}> X </p>
            </div>
          )}
          <span className={styles.title}>
            {writer ? (fullName.length === 0 ? writer.username : fullName) : '익명'}
          </span>
          {!edit && (
            <>
              <span className={styles.date}> {dateObj && dateObj.diffAuto()} </span>
              <p className={styles.content}> {data.content} </p>
              <div className={styles.buttonbox}>
                <div style={{ display: 'flex' }}>
                  <CommentButton> ▲ </CommentButton>
                  <div style={{ width: '5px' }} />
                  <CommentButton> ▼ </CommentButton>
                </div>
              </div>
            </>
          )}
          {edit && (
            <CommentEditCard
              id={id}
              idx={idx}
              onCancel={() => setEdit(!edit)}
              defaultValue={data.content}
              onSubmit={() => setEdit(!edit)}
            />
          )}
        </div>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={styles.editbox}>
        <LoadingSpinner width={50} height={50} text="댓글 삭제 중 ... " />
      </div>
    );
  }
  return null;
};

export default CommentItem;

CommentItem.propTypes = {
  idx: PropTypes.number,
  data: PropTypes.objectOf({
    id: PropTypes.number,
    writer: PropTypes.any,
    content: PropTypes.string,
  }),
};
