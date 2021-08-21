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

export function postDemo(data) {
  return axios(
    {
      method: 'POST',
      url: '/api/demo/demo/',
      data,
    },
    {
      withCredentials: true,
      // 'Content-Type': 'multipart/form-data',
    }
  );
}

export function fetchDemo(data, id) {
  return axios(
    {
      method: 'PUT',
      url: `/api/demo/demo/${id}/`,
      data,
    },
    {
      withCredentials: true,
      // 'Content-Type': 'multipart/form-data',
    }
  );
}

export function getDemoList() {
  return axios(
    {
      method: 'GET',
      url: '/api/demo/demo/',
    },
    {
      withCredentials: true,
    }
  );
}

export function getDemoTags() {
  return axios({
    method: 'GET',
    url: '/api/demo/tags',
  });
}

export function postDemoImage(file, id) {
  const data = new FormData();
  data.append('image', file);
  data.append('demo', id);
  return axios(
    {
      method: 'POST',
      url: '/api/demo/image',
      data,
    },
    {
      withCredentials: true,
      'Content-Type': 'multipart/form-data',
    }
  );
}
