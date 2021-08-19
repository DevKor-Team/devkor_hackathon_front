import { useState, useEffect } from 'react';

export default function useFetchData(action) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [data, setData] = useState(null);

  useEffect(async () => {
    if (!isLoaded) {
      try {
        const actionData = await action();
        if (actionData instanceof Error) {
          throw actionData;
        }
        setData(actionData);
        setError(null);
      } catch (err) {
        setData(null);
        setError(err);
      } finally {
        setIsLoaded(true);
      }
    }
  }, [isLoaded]);

  const fetchData = () => {
    setIsLoaded(false);
  };

  return [data, isLoaded, error, fetchData];
}
