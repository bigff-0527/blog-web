import Axios from "axios";

export function request(config) {
  const instance= Axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 5000,
    headers:{"Content-Type":"application/json"},
  })
  instance.interceptors.request.use( config => {
    return config
  },err => {

  })
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {

  })
  //发送请求 promise
  return instance(config)
}
