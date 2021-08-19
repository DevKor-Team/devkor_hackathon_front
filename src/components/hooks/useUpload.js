import { useState, useCallback } from 'react';

const useUpload = () => {
  const [file, setFile] = useState(null);
  const upload = useCallback(() => {
    const promise = new Promise((resolve, reject) => {
      const input = document.createElement('input');

      const timeout = setTimeout(reject, 1000 * 60 * 3);
      input.type = 'file';
      input.onchange = () => {
        clearTimeout(timeout);
        console.log('onchange');
        console.log(input.files);
        if (!input.files) return reject();
        const inputFile = input.files[0];
        setFile(inputFile);
        return resolve(inputFile);
      };
      input.click();
    });
    return promise;
  }, []);
  return [upload, file];
};

export default useUpload;
