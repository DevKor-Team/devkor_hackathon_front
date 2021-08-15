import axios from 'axios';

export default function createComment(req) {
  return axios(
    {
      method: 'POST',
      url: `/api/demo/comments/`,
      data: req.data,
    },
    {
      withCredentials: true,
    }
  );
}
