export const mutations = {
  addUser(state, id) {
    console.log(state)
    state.user = {
      id: id,
      isLogin: true
    }
  }
}
