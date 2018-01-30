import axios from '@/utils/axios'
export function login(user_name, password) {
  return axios({
    url: '/pub/login',
    method: 'post',
    data: {
      user_name,
      password
    }
  });
}

export function getInfo(id) {
  return axios({
    url: '/admin/user',
    method: 'get',
    params: { id }
  });
}

export function logout() {
  return axios({
    url: '/user/logout',
    method: 'post'
  });
}



