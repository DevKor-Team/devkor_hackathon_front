import React from 'react';
import * as tagAction from 'reducers/tags';
import { useSelector, useDispatch } from 'react-redux';

export default function useSearchTags() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags.tags);

  React.useEffect(() => {
    dispatch((d) => tagAction.getTags(d));
  }, []);

  const toggleTag = (index) => {
    dispatch(tagAction.toggleTag(index));
  };
  return [tags, toggleTag];
}
