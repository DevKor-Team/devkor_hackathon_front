import React from 'react';
import PropTypes from 'prop-types';

const LoginModal = ({ children, isOn, turnOff }) => {
  return (
    isOn && (
      <>
        <div
          className="stickyBackground--color-grey"
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
