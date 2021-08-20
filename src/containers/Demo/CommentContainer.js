import CommentForm from 'components/Comment/Comment';
import CommentWrapper from 'components/Comment/CommentList';
import EmotionForm from 'components/Comment/Emotionbox';
import { useSelector } from 'react-redux';

export const CommentContainer = () => {
  const comments = useSelector((state) => state.comments.comments);

  return (
    <>
      <EmotionForm />
      <CommentForm />
      <CommentWrapper comments={comments} />
    </>
  );
};

export default CommentContainer;
