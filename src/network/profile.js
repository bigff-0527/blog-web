import {request} from "./requset";

export function getProfileData(pageNum,pageSize) {
  return request({
    url: '/getProfileData',
    params: {
      pageNum,
      pageSize
    }
  })

}
