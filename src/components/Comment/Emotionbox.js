import styles from 'styles/components/comment/emotion.module.scss';
import { toggleMyEmojis } from 'reducers/emojis';
import { useSelector, useDispatch } from 'react-redux';

export const EmotionBox = () => {
  const dispatch = useDispatch();
  const emojis = useSelector((state) => state.emojis.emojis);
  const myEmojis = useSelector((state) => state.emojis.myEmojis);
  const user = useSelector((state) => state.users.user);

  const checkLogin = () => {
    if (user === null) {
      return false;
    }
    return true;
  };

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
  console.log(emotionList);
  const onClick = (type) => {
    if (checkLogin() === false) {
      alert('로그인 후 댓글을 남겨 주세요!');
    } else {
      let typ = '';
      if (type === 'Superb') {
        typ = 'FR';
      } else if (type === 'Love') {
        typ = 'LK';
      } else if (type === 'Wow') {
        typ = 'WW';
      } else if (type === 'Sad') {
        typ = 'SD';
      } else if (type === 'Laugh') {
        typ = 'FN';
      }
      dispatch((d, getState) => toggleMyEmojis(d, getState, typ));
    }
  };

  return (
    <>
      <ul className={styles.emotion_wrapper}>
        {emotionList.map((item) => (
          <li
            key={item.text}
            onClick={() => {
              onClick(item.text);
            }}
            className={item.isOn ? styles.active : ''}
          >
            {item.count}
            <img src={item.img} alt={item.text} />
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EmotionBox;
