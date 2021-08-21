import { useState, useCallback } from 'react';

const useUpload = () => {
  const [file, setFile] = useState(null);
  const upload = useCallback(
    () =>
      new Promise((resolve, reject) => {
        const input = document.createElement('input');
        const timeout = setTimeout(reject, 1000 * 60 * 3);
        input.type = 'file';
        input.onchange = () => {
          clearTimeout(timeout);
          if (!input.files) return reject();
          const inputFile = input.files[0];
          setFile(inputFile);
          resolve(inputFile);
          return inputFile;
        };
        input.click();
      }),
    []
  );
  return [upload, file];
};

export default useUpload;
