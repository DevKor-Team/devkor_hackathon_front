import CommentForm from 'components/Comment/Comment';
import CommentWrapper from 'components/Comment/CommentList';
import EmotionForm from 'components/Comment/Emotionbox';
import { useSelector } from 'react-redux';

const test = '/images/default.jpg';

export const CommentContainer = () => {
  const comments = useSelector((state) => state.comments.comments);

  const emotionList = [
    {
      text: 'Superb',
      img: test,
    },
    {
      text: 'Love',
      img: test,
    },
    {
      text: 'Wow',
      img: test,
    },
    {
      text: 'Sad',
      img: test,
    },
    {
      text: 'Laugh',
      img: test,
    },
    {
      text: 'Angry',
      img: test,
    },
  ];

  return (
    <>
      <EmotionForm emotionList={emotionList} />
      <CommentForm />
      <CommentWrapper comments={comments} />
    </>
  );
};

export default CommentContainer;
