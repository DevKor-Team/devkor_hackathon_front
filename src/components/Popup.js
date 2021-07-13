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
  let subtitle;
  if (isLoaded) {
    if (data) {
      subtitle = {
        text: 'succeed!',
        color: 'green',
      };
    } else if (error) {
      subtitle = {
        text: error.message,
        color: 'red',
      };
    }
  } else {
    subtitle = {
      text: 'loading..',
      color: 'black',
    };
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

export const Popup = ({
  title,
  onClickY,
  onClickN,
  subtitle = {
    text: '',
    color: 'black',
  },
  isLoaded = true,
}) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__container}>
        <div className={styles.popup__title}>{title}</div>
        <div className={styles.popup__subtitle} style={{ color: subtitle.color }}>
          {subtitle.text}
        </div>
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
  subtitle: {
    text: PropTypes.string,
    color: PropTypes.string,
  },
  isLoaded: PropTypes.bool,
  onClickY: PropTypes.func,
  onClickN: PropTypes.func,
};

export default Popup;
