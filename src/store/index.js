export const mutations = {
  addUser(state, id) {
    state.user = {
      id: id,
      isLogin: true
    }
  },
  initUser(state) {
    state.user = {
      id: null,
      isLogin: false
    }
  }
}

export const actions = {
  initUserAction(store) {
    console.log(store)
    store.commit('initUser')
  }
}
