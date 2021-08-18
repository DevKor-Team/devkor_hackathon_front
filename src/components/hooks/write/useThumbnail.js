import React from 'react';
import { changeThumbnail } from 'reducers/demo';
import { useSelector, useDispatch } from 'react-redux';
import useUpload from 'components/hooks/useUpload';

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
    console.log(file);
    console.log(localImageUrl);
    if (localImageUrl && file) {
      dispatch(
        changeThumbnail({
          url: localImageUrl,
          name: file.name,
        })
      );
    }
  }, [file]);

  return [thumbnail, setThumbnail, resetThumbnail];
}
