import useFetchData from 'components/hooks/useFetchData';
import { postImage } from 'axios/Demo';

export default function useUpload(file) {
  const action = async () => {
    if (file.size > 1024 * 1024 * 15) {
      return new Error('File is too big');
    }
    try {
      const response = await postImage(file);
      return response;
    } catch (e) {
      return new Error(e);
    }
  };

  return useFetchData(action);
}
