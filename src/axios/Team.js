import axios from 'axios';

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

export function getTeamList() {
  return axios(
    {
      method: 'GET',
      url: '/api/account/team/',
    },
    {
      withCredentials: true,
    }
  );
}

export function getTeamInfoById(id) {
  return axios({
    method: 'GET',
    url: `/api/account/team/${id}/`,
  });
}

export function getTeamToken(id) {
  return axios(
    {
      method: 'GET',
      url: `/api/account/team/${id}/token/`,
    },
    {
      withCredentials: true,
    }
  );
}

export function leaveTeam(id) {
  return axios(
    {
      method: 'POST',
      url: `/api/account/team/${id}/leave/`,
      data: {
        name: '',
      },
    },
    {
      withCredentials: true,
    }
  );
}

export function registerTeam(id, token) {
  return axios(
    {
      method: 'POST',
      url: `/api/account/team/${id}/register/`,
      data: {
        token,
      },
    },
    {
      withCredentials: true,
    }
  );
}
