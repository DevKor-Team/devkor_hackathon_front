import { setLeader, getTeam } from 'reducers/users';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function useMyLeaderInfo() {
  const dispatch = useDispatch();
  const leaderInfo = useSelector((state) => state.users.leader);

  useEffect(() => {
    dispatch(getTeam).then(() => {
      console.dir('내 팀 정보 불러오기 완료');
    });
  }, []);
  const setLeaderInfo = (data) => {
    dispatch(setLeader(data));
  };
  return [leaderInfo, setLeaderInfo];
}
