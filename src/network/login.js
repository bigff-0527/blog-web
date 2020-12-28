import {request} from "./requset";

export function login(username,password) {
  return request({
    url: '/login',
    method: 'post',
    params: {
      username,
      password
    }
  })
}
