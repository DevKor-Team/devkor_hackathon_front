import styles from 'styles/components/comment/commentItem.module.scss';
// import PropTypes from 'prop-types';
import { CommentButton } from './CommentButton';

export const CommentItem = (/* props */) => {
  // console.log(props);
  return (
    <div className={styles.container}>
      {/* <img src={test} alt="profile" /> */}
      <div className={styles.textbox}>
        <span className={styles.title}> 5252 나씨 </span>
        <span className={styles.date}> 4months ago </span>
        <p> 내용 </p>
        <div className={styles.buttonbox}>
          <div style={{ display: 'flex' }}>
            <CommentButton> ▲ </CommentButton>
            <div style={{ width: '5px' }} />
            <CommentButton> ▼ </CommentButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

// CommentItem.propTypes = {
//   data: PropTypes.objectOf({
//     id: PropTypes.number,
//   }),
// };
