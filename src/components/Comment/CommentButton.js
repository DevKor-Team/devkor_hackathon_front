import styles from 'styles/components/comment/commentButton.module.scss';
import PropTypes from 'prop-types';

export const CommentButton = ({ children, onClick }) => {
  return (
    <button type="button" className={styles.login} onClick={onClick}>
      {children}
    </button>
  );
};

export const SubmitButton = ({ children }) => {
  return (
    <button type="submit" className={styles.submit}>
      {children}
    </button>
  );
};

CommentButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

SubmitButton.propTypes = {
  children: PropTypes.any,
};
