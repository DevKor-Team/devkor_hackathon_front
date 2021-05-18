import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/auth.module.scss';

const LoginModal = ({ children, isOn, turnOff }) => {
  return (
    isOn && (
      <>
        <div
          className={styles.background}
          onClick={() => {
            turnOff();
          }}
          role="dialog"
        />
        {children}
      </>
    )
  );
};

LoginModal.propTypes = {
  children: PropTypes.elementType.isRequired,
  isOn: PropTypes.bool,
  turnOff: PropTypes.func,
};

export default LoginModal;
