import { setUser, getUser } from 'reducers/users';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function useProfile() {
  const dispatch = useDispatch();
  const myInfo = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(getUser);
  }, []);

  const setMyInfo = (data) => {
    dispatch(setUser(data));
  };

  return [myInfo, setMyInfo];
}
