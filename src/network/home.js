import {request} from "./requset";

export function getHomeData(pageNum,pageSize) {
  return request({
    url: '/homeData',
    // headers: { 'content-type': 'application/json' },
    params: {
      pageNum,
      pageSize
    }
  })
}
