import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CheckLogin = ({ children }) => {
  const myInfo = useSelector((state) => state.users.user);
  if (myInfo) {
    return children;
  }
  return <p>로그인 후 진행하실 수 있습니다.</p>;
};

CheckLogin.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.elementType.isRequired]),
};

export default CheckLogin;
