import {request} from "./requset";

export function getClassList() {
  return request({
    url: '/classList',
  })
}
