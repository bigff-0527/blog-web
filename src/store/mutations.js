const mutations = {

  SET_BLOGSHOWID : (state,blogId) => {
    state.blogId = blogId
  },
  REMOVE_BLOGID : (state) => {
    state.blogId = null
  }
}
export default mutations
