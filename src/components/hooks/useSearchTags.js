import * as toggleAction from 'reducers/tags';
import { useSelector, useDispatch } from 'react-redux';

export default function useSearchTags() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags.tags);

  const toggleTag = (index) => {
    dispatch(toggleAction.toggleTag(index));
  };
  return [tags, toggleTag];
}
