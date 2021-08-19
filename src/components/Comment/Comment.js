import styles from 'styles/components/comment/comment.module.scss';
import { CommentButton, SubmitButton } from 'components/Comment/CommentButton';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useMyInfo from 'components/hooks/useMyInfo';
import { createComments } from 'reducers/comments';
import { useDispatch } from 'react-redux';
import { LoadingSpinner } from 'components/Loading';
import { handleModal } from 'components/hooks/handleModal';
import { userLogout } from 'reducers/users';

export const CommentComponent = () => {
  const router = useRouter();
  const user = useMyInfo()[0];
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const checkLogin = () => {
    if (user === null) {
      return false;
    }
    return true;
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append('demo', router.query.id);
    formData.append('user', user);

    if (checkLogin() === false) {
      return alert('로그인 후 댓글을 남겨 주세요!');
    }

    if (formData.get('content').length === 0) {
      return alert('내용을 입력해주세요!');
    }

    setLoading('pending');

    dispatch((d, getState) => createComments(d, getState, formData))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading('error');
      });
    return null;
  };

  if (loading === false) {
    return (
      <div className={styles.container}>
        <form onSubmit={onSubmitComment}>
          <div className={styles.buttonwrapper}>
            {!user ? (
              <CommentButton onClick={handleModal}>LOGIN</CommentButton>
            ) : (
              <CommentButton onClick={userLogout}>LOGOUT</CommentButton>
            )}
          </div>
          <textarea placeholder="댓글을 입력해 주세요" name="content" />
          <div className={styles.buttonwrapper} style={{ justifyContent: 'flex-end' }}>
            <SubmitButton> COMMENT</SubmitButton>
          </div>
        </form>
      </div>
    );
  }
  if (loading === 'pending') {
    return (
      <div className={styles.container}>
        <LoadingSpinner text="댓글을 등록중입니다 ... " />
      </div>
    );
  }
  if (loading === 'error') {
    return (
      <div className={styles.container}>
        <p> 서버상의 에러가 발생하여 정상적으로 처리되지 않았습니다. 새로고침 후 시도해주세요</p>
      </div>
    );
  }
  return null;
};
export default CommentComponent;
