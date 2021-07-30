import { setTeam, getTeamById } from 'reducers/users';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function useTeamInfoById(id) {
  const dispatch = useDispatch();
  const teamInfo = useSelector((state) => state.users.team);
  useEffect(() => {
    if (id !== undefined) {
      dispatch((d) => {
        getTeamById(d, id);
      });
    }
  }, [id]);

  const setTeamInfo = (data) => {
    dispatch(setTeam(data));
  };
  return [teamInfo, setTeamInfo];
}
