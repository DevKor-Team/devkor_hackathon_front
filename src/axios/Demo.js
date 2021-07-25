import axios from 'axios';

export function postImage(file) {
  return axios(
    {
      method: 'POST',
      url: '/api/demo/image/',
      file,
    },
    {
      withCredentials: true,
    }
  );
}

export function getDemo(id) {
  return axios(
    {
      method: 'GET',
      url: `/api/demo/${id}/`,
    },
    {
      withCredentials: true,
    }
  );
}
