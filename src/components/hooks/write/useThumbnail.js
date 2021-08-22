import React from 'react';
import { changeThumbnail } from 'reducers/demo';
import { useSelector, useDispatch } from 'react-redux';
import useUpload from 'components/hooks/useUpload';
import { getFilename } from 'axios/Demo';

export default function useThumbnail() {
  const dispatch = useDispatch();
  const thumbnail = useSelector((state) => state.demo.thumbnail);
  const [upload, file] = useUpload();

  const setThumbnail = () => {
    upload();
  };
  const resetThumbnail = () => {
    dispatch(changeThumbnail(null));
  };

  React.useEffect(() => {
    const localImageUrl = file && window.URL.createObjectURL(file);
    if (localImageUrl && file) {
      dispatch(
        changeThumbnail({
          url: localImageUrl,
          name: getFilename(file),
        })
      );
    }
  }, [file]);

  return [thumbnail, setThumbnail, resetThumbnail];
}
