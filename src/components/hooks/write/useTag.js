import { changeTags } from 'reducers/demo';
import { useSelector, useDispatch } from 'react-redux';

export default function useTags() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.demo.tags);

  const setTags = (data) => {
    dispatch(changeTags(data));
  };
  return [tags, setTags];
}
