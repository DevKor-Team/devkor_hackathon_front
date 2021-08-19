import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/components/modal.module.scss';

const Modal = ({ children, turnOff }) => {
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

Modal.propTypes = {
  children: PropTypes.elementType.isRequired,
  turnOff: PropTypes.func,
};

export default Modal;
