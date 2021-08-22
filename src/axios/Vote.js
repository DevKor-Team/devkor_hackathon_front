import axios from 'axios';

export const isVotable = () => {
  return axios(
    {
      method: 'GET',
      url: '/api/vote/votable',
    },
    {
      withCredentials: true,
    }
  );
};

export const vote = (data) => {
  return axios(
    {
      method: 'POST',
      url: '/api/vote/vote',
      data,
    },
    {
      withCredentials: true,
    }
  );
};
