import PropTypes from 'prop-types';
import styles from 'styles/components/memberItem.module.scss';

const memberItemIamg = '/images/components/MemberItem/default.jpg';

export const MemberItem = ({ title, sub, profile, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick} role="button" tabIndex={0}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={profile?.profile_img ?? memberItemIamg} alt="profile" />
        </div>
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <p className={styles.position}>{profile?.position}</p>
          <p className={styles.sub}>{sub}</p>
        </div>
      </div>
      <p className={styles.bio}>{profile?.bio}</p>
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
    bio: PropTypes.string,
  }),
};

export default MemberItem;
