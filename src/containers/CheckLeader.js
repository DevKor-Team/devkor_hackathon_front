import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CheckLeader = ({ children }) => {
  const leaderInfo = useSelector((state) => state.users.leader);
  if (leaderInfo && leaderInfo.length > 0) {
    return children;
  }
  return <p>팀의 리더만 실행할 수 있습니다.</p>;
};

CheckLeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.elementType.isRequired]),
};

export default CheckLeader;
