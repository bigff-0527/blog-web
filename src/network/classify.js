import {request} from "./requset";

export function getClassList() {
  return request({
    url: '/getClassList',
  })
}
export function getBlogByTypeId(pageNum,pageSize,typeId) {
  return request({
    url: '/getBlogByTypeId',
    params: {
      pageNum,
      pageSize,
      typeId,
    }
  })
}
