import styles from 'styles/components/comment/commentItem.module.scss';
import PropTypes from 'prop-types';
import DateCalculator from 'components/hooks/DateCalculator';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteComments, likeComments, dislikeComments } from 'reducers/comments';
import { LoadingSpinner } from 'components/Loading';
import { useRouter } from 'next/router';
import moveTo from 'components/util/moveTo';
import { CommentButton } from './CommentButton';
import CommentEditCard from './CommentEditItem';

const Edit = '/images/components/Comment/CommentItem/edit.svg';
const Like = '/images/components/Comment/CommentItem/like.svg';
const defaultProfileImg = '/images/default.jpg';

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
  const [likes, setLike] = useState(data.likes);
  const [dislikes, setDisLike] = useState(data.dislikes);
  const router = useRouter();

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

  const onLikeButtonClick = () => {
    if (user === null) {
      alert('로그인 후 이용 가능합니다!');
      return null;
    }
    dispatch(() => likeComments(id))
      .then((res) => {
        const [newLike, newDisLike] = [res.data.likes, res.data.dislikes];
        setLike(newLike);
        setDisLike(newDisLike);
      })
      .catch((err) => console.log(err));
    return null;
  };

  const onDisLikeButtonClick = () => {
    if (user === null) {
      alert('로그인 후 이용 가능합니다!');
      return null;
    }
    dispatch(() => dislikeComments(id))
      .then((res) => {
        const [newLike, newDisLike] = [res.data.likes, res.data.dislikes];
        setLike(newLike);
        setDisLike(newDisLike);
      })
      .catch((err) => console.log(err));
    return null;
  };

  if (!loading) {
    return (
      <div className={styles.container}>
        <div className={styles.textbox}>
          {user && writer && user.id === writer.id && (
            <div className={styles.close_btn}>
              <img src={Edit} alt="수정하기" onClick={() => setEdit(!edit)} />
              <p onClick={deleteComment}> X </p>
            </div>
          )}
          <div
            className={styles.title}
            role="button"
            tabIndex={0}
            onClick={() => moveTo(router, `/user/${writer?.id}`)}
          >
            <img
              src={writer?.profile?.profile_img ? writer.profile.profile_img : defaultProfileImg}
              alt="profile"
            />
            <div className={styles.info}>
              <div>{writer ? (fullName.length === 0 ? writer.username : fullName) : '익명'}</div>
              <div className={styles.weak}>{writer?.profile?.position}</div>
              <div className={styles.weak}> {dateObj && dateObj.diffAuto()} </div>
            </div>
          </div>
          {!edit && (
            <>
              <p className={styles.content}> {data.content} </p>
              <div className={styles.buttonbox}>
                <div style={{ display: 'flex' }}>
                  <CommentButton onClick={onLikeButtonClick}>
                    <img src={Like} alt="like" /> + {likes || 0}
                  </CommentButton>
                  <div style={{ width: '5px' }} />
                  <CommentButton onClick={onDisLikeButtonClick}>
                    <img
                      src={Like}
                      alt="like"
                      style={{ transform: 'rotate(180deg)', paddingBottom: '3px' }}
                    />{' '}
                    + {dislikes || 0}
                  </CommentButton>
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
  data: PropTypes.object,
};
