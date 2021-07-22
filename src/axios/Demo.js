import axios from 'axios';

export default function getDemo(id) {
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
