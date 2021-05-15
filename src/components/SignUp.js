import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import Modal from './Modal';

const ChooseSignUpType = () => {
  return (
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
            <div className="button__description">Google 회원가입</div>
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
        <div className="button__description">Github 회원가입</div>
      </div>
    </div>
  );
};

const TypeMoreInfo = () => {
  return (
    <>
      <div className="auth__buttonContainer">
        <div className="input">
          <input placeholder="email" />
        </div>
        <div className="input">
          <input placeholder="실명" />
        </div>
        <div className="input">
          <input placeholder="github 주소" />
        </div>
        <div className="select">
          <select>
            <option value="americano">FE</option>
            <option value="caffe latte">BE</option>
            <option value="cafe au lait">DL</option>
          </select>
        </div>
      </div>
      <div className="button button--position-bottom">
        <div className="button__description button__description--align-middle">건너뛰기</div>
      </div>
    </>
  );
};

const SignUpModal = ({ isOn, turnOff, title }) => {
  const signUpState = 'chooseSignUpType'; // 'chooseSignUpType' | 'typeMoreInfo'
  return (
    <Modal isOn={isOn} turnOff={turnOff}>
      <div className="auth">
        <div className="auth__title">{title}</div>
        <div className="auth__subtitle">Welcome to DevKor</div>
        {signUpState === 'chooseSignUpType' ? <ChooseSignUpType /> : <TypeMoreInfo />}
      </div>
    </Modal>
  );
};

SignUpModal.propTypes = {
  isOn: PropTypes.bool,
  turnOff: PropTypes.func,
  title: PropTypes.string,
};

export default SignUpModal;
