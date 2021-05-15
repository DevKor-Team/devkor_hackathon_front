import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import Modal from './Modal';

const LoginModal = ({ isOn, turnOff, title }) => {
  return (
    <Modal isOn={isOn} turnOff={turnOff}>
      <div className="auth">
        <div className="auth__title">{title}</div>
        <div className="auth__subtitle">Welcome to DevKor</div>
        <div className="auth__buttonContainer">
          <GoogleLogin
            clientId="52596861077-al66do6s1ft73969jii5d2v7t80ga4u4.apps.googleusercontent.com"
            render={(renderProps) => (
              <div
                role="button"
                tabIndex={0}
                className="button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <div className="button_img">
                  <img src="images/google_logo.svg" alt="google login" />
                </div>
                <div className="button__description">Google 로그인</div>
              </div>
            )}
            buttonText="Login"
            onSuccess={(result) => console.log(result)}
            onFailure={(result) => console.log(result)}
            cookiePolicy="single_host_origin"
          />
          <div className="button">
            <div className="button_img">
              <img src="images/github_logo.svg" alt="google login" />
            </div>
            <div className="button__description">Github 로그인</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

LoginModal.propTypes = {
  isOn: PropTypes.bool,
  turnOff: PropTypes.func,
  title: PropTypes.string,
};

export default LoginModal;
