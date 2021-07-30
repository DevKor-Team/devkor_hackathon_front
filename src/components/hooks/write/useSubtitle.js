import { changeSubtitle } from 'reducers/demo';
import { useSelector, useDispatch } from 'react-redux';

export default function useSubtitle() {
  const dispatch = useDispatch();
  const subtitle = useSelector((state) => state.demo.subtitle);

  const setSubtitle = (data) => {
    dispatch(changeSubtitle(data));
  };
  return [subtitle, setSubtitle];
}
