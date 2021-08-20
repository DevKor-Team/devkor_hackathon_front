import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from 'styles/components/auth.module.scss';
import { LoginModal as Modal } from './Modal';

const LoginModal = ({ turnOff, title }) => {
  const router = useRouter();
  const moveTo = (href) => {
    router.push(href);
  };
  return (
    <Modal turnOff={turnOff}>
      <div className={styles.auth}>
        <div className={styles.auth__title}>{title}</div>
        <div className={styles.auth__subtitle}>Welcome to DevKor</div>
        <div className={styles.auth__buttonContainer}>
          <div
            role="button"
            tabIndex={0}
            className={styles.button}
            onClick={() => {
              moveTo('/api/oauth/google/login');
            }}
          >
            <div className={styles.button_img}>
              <img src="/images/google_logo.svg" alt="google login" />
            </div>
            <div className={styles.button__description}>Google 로그인</div>
          </div>
          <div className={styles.button}>
            <div className={styles.button_img}>
              <img src="/images/github_logo.svg" alt="github login" />
            </div>
            <div className={styles.button__description}>Github 로그인</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

LoginModal.propTypes = {
  turnOff: PropTypes.func,
  title: PropTypes.string,
};

export default LoginModal;
