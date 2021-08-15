import styles from 'styles/components/comment/comment.module.scss';
import { CommentButton, SubmitButton } from 'components/Comment/CommentButton';
import { useRouter } from 'next/router';
import useMyInfo from 'components/hooks/useMyInfo';
import { createComments } from 'reducers/comments';
import { useDispatch } from 'react-redux';

export const CommentComponent = () => {
  const router = useRouter();
  const user = useMyInfo()[0];
  const dispatch = useDispatch();

  const checkLogin = () => {
    if (user === undefined) {
      return alert('로그인 후 댓글을 남겨 주세요!');
    }
    return null;
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append('demo', router.query.id);
    formData.append('writer', user.id);

    dispatch(() => createComments(dispatch, formData));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitComment}>
        <div className={styles.buttonwrapper}>
          <CommentButton>LOGIN</CommentButton>
          <CommentButton>SIGNUP</CommentButton>
        </div>
        <textarea
          placeholder="댓글을 입력해 주세요"
          name="content"
          onClick={() => user === undefined && checkLogin()}
        />
        <div className={styles.buttonwrapper} style={{ justifyContent: 'flex-end' }}>
          <SubmitButton> COMMENT</SubmitButton>
        </div>
      </form>
    </div>
  );
};
export default CommentComponent;
