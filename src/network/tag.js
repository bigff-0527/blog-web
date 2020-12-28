import {request} from "./requset";

export function getTagList() {
  return request({
    url: '/getTagList'
  })
}

export function getBlogByTagId(pageNum,pageSize,tagId) {
  return request({
    url: '/getBlogByTagId',
    params: {
      pageNum,
      pageSize,
      tagId,
    }
  })
}
