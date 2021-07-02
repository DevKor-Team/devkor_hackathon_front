import { setTeam, getTeamById, getTeam } from 'reducers/users';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function useTeamInfoById(id) {
  const dispatch = useDispatch();
  const teamInfo = useSelector((state) => state.users.team);
  useEffect(() => {
    if (id !== undefined) {
      dispatch((d) => {
        console.log(id);
        getTeamById(d, id);
      });
    } else {
      dispatch(getTeam);
    }
  }, []);

  const setTeamInfo = (data) => {
    dispatch(setTeam(data));
  };
  return [teamInfo, setTeamInfo];
}
