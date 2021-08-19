import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/components/modal.module.scss';

const LoginModal = ({ children, turnOff }) => {
  return (
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
  );
};

LoginModal.propTypes = {
  children: PropTypes.elementType.isRequired,
  turnOff: PropTypes.func,
};

export default LoginModal;
