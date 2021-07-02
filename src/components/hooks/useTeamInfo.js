import { setTeam, getTeam } from 'reducers/users';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function useTeamInfo() {
  const dispatch = useDispatch();
  const teamInfo = useSelector((state) => state.users.team);

  useEffect(() => {
    dispatch(getTeam).then(() => {
      console.dir('내 팀 정보 불러오기 완료');
    });
  }, []);
  const setTeamInfo = (data) => {
    dispatch(setTeam(data));
  };
  return [teamInfo, setTeamInfo];
}
