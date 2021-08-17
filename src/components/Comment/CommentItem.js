import styles from 'styles/components/comment/commentItem.module.scss';
import PropTypes from 'prop-types';
import DateCalculator from 'components/hooks/DateCalculator';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { CommentButton } from './CommentButton';
import CommentEditCard from './CommentEditItem';

const Edit = '/images/components/Comment/CommentItem/edit.svg';

export const CommentItem = (props) => {
  const { data } = props;
  const { writer, createdAt } = data;
  const dateObj = createdAt ? new DateCalculator(createdAt, moment()) : '';
  const user = useSelector((state) => state.users.user);
  // edit mode
  const [edit, setEdit] = useState(false);
  const contentRef = useRef();

  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        {JSON.stringify(user) === JSON.stringify(writer) && (
          <div className={styles.close_btn}>
            <img src={Edit} alt="수정하기" onClick={() => setEdit(!edit)} />
            <p> X </p>
          </div>
        )}
        <span className={styles.title}> {writer ? writer.username : '익명'} </span>
        {!edit && (
          <>
            <span className={styles.date}> {dateObj && dateObj.diffAuto()} </span>
            <p className={styles.content} ref={contentRef}>
              {' '}
              {data.content}{' '}
            </p>
            <div className={styles.buttonbox}>
              <div style={{ display: 'flex' }}>
                <CommentButton> ▲ </CommentButton>
                <div style={{ width: '5px' }} />
                <CommentButton> ▼ </CommentButton>
              </div>
            </div>
          </>
        )}
        {edit && (
          <CommentEditCard
            onCancel={() => setEdit(!edit)}
            defaultValue={data.content}
            target={contentRef}
            onSubmit={() => setEdit(!edit)}
          />
        )}
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
