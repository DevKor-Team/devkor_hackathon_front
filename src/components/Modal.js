import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/components/modal.module.scss';

const Modal = ({ children, isOn, turnOff }) => {
  return (
    isOn && (
      <>
        <div
          className={styles.background}
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (e.target === e.currentTarget) {
              turnOff();
            }
          }}
          role="dialog"
        >
          {children}
        </div>
      </>
    )
  );
};

Modal.propTypes = {
  children: PropTypes.elementType.isRequired,
  isOn: PropTypes.bool,
  turnOff: PropTypes.func,
};

export default Modal;
