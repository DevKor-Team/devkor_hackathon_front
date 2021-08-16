import styles from 'styles/components/comment/commentItem.module.scss';
import PropTypes from 'prop-types';
import { CommentButton } from './CommentButton';

export const CommentItem = (props) => {
  const { data } = props;
  const { writer } = data;

  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        <span className={styles.title}> {writer.username} </span>
        <span className={styles.date}> 4months ago </span>
        <p> {data.content} </p>
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

CommentItem.propTypes = {
  data: PropTypes.objectOf({
    id: PropTypes.number,
    writer: PropTypes.any,
    content: PropTypes.string,
  }),
};
