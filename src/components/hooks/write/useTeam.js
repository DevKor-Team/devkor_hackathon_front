import { changeTeam } from 'reducers/demo';
import { useSelector, useDispatch } from 'react-redux';

export default function useTeam() {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.demo.team);

  const setTeam = (data) => {
    dispatch(changeTeam(data));
  };
  return [team, setTeam];
}
