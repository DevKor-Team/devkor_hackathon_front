import axios from 'axios';

export const getMyEmojis = (demoId) => {
  return axios(
    {
      method: 'GET',
      url: `/api/demo/emoji/?demo=${demoId}`,
    },
    {
      withCredentials: true,
    }
  );
};

export const toggleEmoji = (demoId, data) => {
  return axios(
    {
      method: 'POST',
      url: `/api/demo/demo/${demoId}/emoji/`,
      data,
    },
    {
      withCredentials: true,
    }
  );
};
