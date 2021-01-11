import {request} from "./requset";

// export function getBlogList(searchDto) {
//   return request({
//     url: '/blogList',
//     params:{
//       pageNum,
//       pageSize
//     }
//   })
// }

export function getBlogList(searchDto) {
  return request({
    url: '/blogList',
    method: 'post',
    data: JSON.stringify(searchDto)


  })
}

