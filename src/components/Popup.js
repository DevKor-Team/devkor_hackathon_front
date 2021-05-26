import PropTypes from 'prop-types';
import styles from 'styles/components/popup.module.scss';

const ButtonItem = ({ text, onClick }) => {
  return (
    <div
      className={styles.popup__buttonwrapper__button}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.popup__buttonwrapper__button__text}>{text}</div>
    </div>
  );
};

ButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export const Popup = ({ title, onClickY, onClickN }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__container}>
        <div className={styles.popup__title}>{title}</div>
        <div className={styles.popup__buttonwrapper}>
          <ButtonItem text="예" onClick={onClickY} />
          <ButtonItem text="아니요" onClick={onClickN} />
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string,
  onClickY: PropTypes.func,
  onClickN: PropTypes.func,
};

export default Popup;
