import styles from 'styles/components/comment/emotion.module.scss';
import PropTypes from 'prop-types';

export const EmotionBox = (props) => {
  const { emotionList } = props;
  return (
    <>
      <ul className={styles.emotion_wrapper}>
        {emotionList.map((item) => (
          <li key={item.text}>
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
