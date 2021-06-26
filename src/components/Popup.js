import PropTypes from 'prop-types';
import styles from 'styles/components/popup.module.scss';
import useFetchData from 'components/hooks/useFetchData';

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

export const PromisePopup = ({ title, promiseOnClickY, onClickN }) => {
  const [data, isLoaded, error, fetchData] = useFetchData(promiseOnClickY);
  let subtitle = '';
  if (isLoaded) {
    if (data) {
      console.log(data);
      subtitle = 'succeed!';
    } else if (error) {
      console.log(error.message);
      subtitle = error.message;
    }
  } else {
    subtitle = 'loading..';
  }
  return (
    <Popup
      title={title}
      subtitle={subtitle}
      onClickY={fetchData}
      onClickN={onClickN}
      isLoaded={isLoaded}
    />
  );
};

PromisePopup.propTypes = {
  title: PropTypes.string,
  promiseOnClickY: PropTypes.func,
  onClickN: PropTypes.func,
};

export const Popup = ({ title, onClickY, onClickN, subtitle = '', isLoaded = true }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__container}>
        <div className={styles.popup__title}>{title}</div>
        <div className={styles.popup__subtitle}>{subtitle}</div>
        <div className={styles.popup__buttonwrapper}>
          {isLoaded && <ButtonItem text="예" onClick={onClickY} />}
          {isLoaded && <ButtonItem text="아니요" onClick={onClickN} />}
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isLoaded: PropTypes.bool,
  onClickY: PropTypes.func,
  onClickN: PropTypes.func,
};

export default Popup;
