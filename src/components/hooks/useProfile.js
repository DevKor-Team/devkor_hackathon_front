import { setUserProfile } from 'reducers/users';
import { useSelector, useDispatch } from 'react-redux';

export default function useProfile() {
  const dispatch = useDispatch();
  const myInfo = useSelector((state) => state.users.user);
  const profile = myInfo ? myInfo.profile : null;

  const setProfile = (data) => {
    dispatch(setUserProfile(data));
  };
  return [profile, setProfile];
}
