import PropTypes from 'prop-types';
import styles from 'styles/components/memberItem.module.scss';

const memberItemIamg = '/images/components/MemberItem/default.jpg';

export const MemberItem = ({ title, sub, profile, onClick }) => {
  return (
    <div className={styles.memberItem__container} onClick={onClick} role="button" tabIndex={0}>
      <div className={styles.memberItem__imagewrapper}>
        <img src={profile?.profile_img ?? memberItemIamg} alt="profile" />
      </div>
      <div className={styles.memberItem__textwrapper}>
        <p className={styles.memberItem__textwrapper__title}>{title}</p>
        <p className={styles.memberItem__textwrapper__position}>{profile?.position}</p>
        <p className={styles.memberItem__textwrapper__sub}>{sub}</p>
      </div>
    </div>
  );
};

MemberItem.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string,
  onClick: PropTypes.func,
  profile: PropTypes.shape({
    position: PropTypes.string,
    profile_img: PropTypes.string,
  }),
};

export default MemberItem;
