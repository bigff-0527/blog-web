import {request} from "./requset";

export function getIndexData(pageNum) {
  return request({
    url: '/getIndexData',
    params: {
      pageNum,
    }
  })
}
