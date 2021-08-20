import CommentForm from 'components/Comment/Comment';
import CommentWrapper from 'components/Comment/CommentList';
import EmotionForm from 'components/Comment/Emotionbox';
import { useSelector } from 'react-redux';

export const CommentContainer = () => {
  const comments = useSelector((state) => state.comments.comments);
  const emotionList = [
    {
      count: 0,
      text: 'Superb',
      img: '/images/components/emotion/superb.svg',
    },
    {
      count: 0,
      text: 'Love',
      img: '/images/components/emotion/love.svg',
    },
    {
      count: 0,
      text: 'Wow',
      img: '/images/components/emotion/wow.svg',
    },
    {
      count: 0,
      text: 'Sad',
      img: '/images/components/emotion/sad.svg',
    },
    {
      count: 10,
      text: 'Laugh',
      img: '/images/components/emotion/laugh.svg',
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
