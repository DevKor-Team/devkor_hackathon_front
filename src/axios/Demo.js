import axios from 'axios';

export async function getDemo(id) {
  return axios(
    {
      method: 'GET',
      url: `/api/demo/demo/${id}/`,
    },
    {
      withCredentials: true,
    }
  );
}

export default getDemo;
