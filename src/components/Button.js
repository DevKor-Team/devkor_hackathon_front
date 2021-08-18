import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/containers/teamContainer.module.scss';
import useFetchData from 'components/hooks/useFetchData';

export const PromiseButtonItem = ({ text, onClick, className, color }) => {
  const [data, isLoaded, error, fetchData] = useFetchData(onClick);
  React.useEffect(() => {
    console.log(data, isLoaded, error);
  });
  let state = {
    text,
    color,
    click: true,
  };
  if (error) {
    state = {
      text: error.message,
      color: 'red',
      click: true,
    };
  } else if (data) {
    state = {
      text: '성공!',
      color: 'green',
      click: false,
    };
  } else if (!isLoaded) {
    state = {
      text: '로딩중..',
      color,
      click: false,
    };
  }

  return (
    <ButtonItem2
      text={state.text}
      color={state.color}
      click={state.click}
      onClick={fetchData}
      className={className}
    />
  );
};

PromiseButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.string,
};

const ButtonItem2 = ({ text, onClick, className, color, click = true }) => {
  return (
    <button
      className={className || styles.button}
      type="button"
      onClick={() => {
        if (click) onClick();
      }}
      tabIndex={0}
      style={{ color }}
    >
      {text}
    </button>
  );
};

const ButtonItem = ({ text, onClick, className, click = true }) => {
  return (
    <div
      className={className && styles.button}
      onClick={() => {
        if (click) onClick();
      }}
      role="button"
      tabIndex={0}
    >
      <div className={styles.button__text}>{text}</div>
    </div>
  );
};
ButtonItem2.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  click: PropTypes.bool,
  color: PropTypes.string,
};

ButtonItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  click: PropTypes.bool,
};

export default ButtonItem;
