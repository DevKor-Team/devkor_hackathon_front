import CommentForm from 'components/Comment/Comment';
import CommentWrapper from 'components/Comment/CommentList';
import EmotionForm from 'components/Comment/Emotionbox';
import { useSelector } from 'react-redux';

export const CommentContainer = () => {
  const comments = useSelector((state) => state.comments.comments);
  const emojis = useSelector((state) => state.emojis.emojis);
  const myEmojis = useSelector((state) => state.emojis.emojis);

  const emotionList = [
    {
      count: emojis.fire,
      isOn: myEmojis.fire,
      text: 'Superb',
      img: '/images/components/emotion/superb.svg',
    },
    {
      count: emojis.like,
      isOn: myEmojis.like,
      text: 'Love',
      img: '/images/components/emotion/love.svg',
    },
    {
      count: emojis.wow,
      isOn: myEmojis.wow,
      text: 'Wow',
      img: '/images/components/emotion/wow.svg',
    },
    {
      count: emojis.sad,
      isOn: myEmojis.sad,
      text: 'Sad',
      img: '/images/components/emotion/sad.svg',
    },
    {
      count: emojis.fun,
      isOn: myEmojis.fun,
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
