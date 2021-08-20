import { changeDescription } from 'reducers/demo';
import { useSelector, useDispatch } from 'react-redux';

export default function useDescription() {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.demo.description);

  const setDescription = (data) => {
    dispatch(changeDescription(data));
  };
  return [description, setDescription];
}
