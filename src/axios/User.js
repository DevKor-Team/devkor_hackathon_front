import axios from 'axios';
import { ROOT_URL } from './index';

export function getUserData() {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/posts`,
  });
}

export function getUserProfile() {
  return axios(
    {
      method: 'GET',
      url: '/api/account/me',
    },
    {
      withCredentials: true,
      // validateStatus: () => true,
    }
  );
}

export default getUserData;
