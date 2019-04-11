export const mutations = {
  addUser(state, id) {
    state.user = {
      id: id,
      isLogin: true
    }
  }
}
