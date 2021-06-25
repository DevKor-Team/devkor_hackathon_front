import axios from 'axios';

// export function getUserData() {
//   return axios({
//     method: 'GET',
//     url: `${ROOT_URL}/posts`,
//   });
// }

// eslint-disable-next-line import/prefer-default-export
export function getUserProfile() {
  return axios(
    {
      method: 'GET',
      url: '/api/account/me/',
    },
    {
      withCredentials: true,
    }
  );
}

export function putUserProfile(data) {
  return axios(
    {
      method: 'POST',
      url: '/api/account/profile/',
      data,
    },
    {
      withCredentials: true,
    }
  );
}

export function getUserTeam() {
  return axios(
    {
      method: 'GET',
      url: '/api/account/myteam/',
    },
    {
      withCredentials: true,
    }
  );
}
