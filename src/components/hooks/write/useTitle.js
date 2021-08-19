import { changeTitle } from 'reducers/demo';
import { useSelector, useDispatch } from 'react-redux';

export default function useTitle() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.demo.title);

  const setTitle = (data) => {
    dispatch(changeTitle(data));
  };
  return [title, setTitle];
}
