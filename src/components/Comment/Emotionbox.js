import styles from 'styles/components/comment/emotion.module.scss';
import PropTypes from 'prop-types';
import { toggleMyEmojis } from 'reducers/emojis';
import { useDispatch } from 'react-redux';

export const EmotionBox = (props) => {
  const { emotionList } = props;
  const dispatch = useDispatch();

  const onClick = (type) => {
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

EmotionBox.propTypes = {
  emotionList: PropTypes.array,
};
