import {request} from "./requset";

export function queryBlogById(id) {
  return request({
    url: '/queryBlogById',
    params: {
      id
    }
  })
}

export function getCommentList(blogId) {
  return request({
    url: '/comments',
    params: {
      blogId
    }
  })
}

export function postComment(comment) {
  return request({
    url: '/commentsPost',
    method: 'post',
    data: JSON.stringify(comment)
  })
}
