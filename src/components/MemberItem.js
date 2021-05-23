import PropTypes from 'prop-types';
import styles from 'styles/components/memberItem.module.scss';

const memberItemIamg = '/images/components/MemberItem/default.jpg';

export const MemberItem = ({ title, sub, onClick }) => {
  return (
    <div className={styles.memberItem__container} onClick={onClick} role="button" tabIndex={0}>
      <div className={styles.memberItem__imagewrapper}>
        <img src={memberItemIamg} alt="profile" />
      </div>
      <div className={styles.memberItem__textwrapper}>
        <div className={styles.memberItem__textwrapper__title}>{title}</div>
        <div className={styles.memberItem__textwrapper__sub}>{sub}</div>
      </div>
    </div>
  );
};

MemberItem.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string,
  onClick: PropTypes.func,
};

export default MemberItem;
