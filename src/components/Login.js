import React from 'react';
import PropTypes from 'prop-types';

const LoginModal = ({ isOn, turnOff }) => {
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
        <div className="auth">
          <div className="auth__title">LOGIN</div>
          <div className="auth__subtitle">welcome to devkor</div>
          <div className="button">
            <div className="button_img">
              <img src="images/google_logo.svg" alt="google login" />
            </div>
            <div className="button_description">Google 로그인</div>
          </div>
          <div className="button">
            <div className="button_img">
              <img src="images/github_logo.svg" alt="google login" />
            </div>
            <div className="button_description">Github 로그인</div>
          </div>
        </div>
      </>
    )
  );
};

LoginModal.propTypes = {
  isOn: PropTypes.bool,
  turnOff: PropTypes.func,
};

export default LoginModal;
