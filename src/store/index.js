import firebase from '~/plugins/firebase.js'

export const state = () => ({
  isLoading: false,
  user: () => {},
  items: () => []
})

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
  },
  setItems(state, items) {
    state.items = items
  },
  startIsLoading(state) {
    state.isLoading = true
  },
  stopIsLoading(state) {
    state.isLoading = false
  }
}

export const actions = {
  addUserAction(store, id) {
    if (id) {
      store.commit('addUser', id)
    } else {
      console.log('ユーザーidが見つかりません')
    }
  },
  fetchUserItems(store, id) {
    firebase
      .database()
      .ref(`user/${id}`)
      .once('value')
      .then(result => {
        if (result.val()) {
          store.commit('setItems', result.val())
        }
      })
      .catch(err => {
        console.log('初期データの読み込みに失敗しました', err)
      })
  },
  addItem(store, item) {
    const items = [...store.state.items, item]
    store.commit('setItems', items)
  },
  deleteItem(store, index) {
    const items = store.state.items.slice()
    items.splice(index, 1)
    store.commit('setItems', items)
  },
  isLoadingAction(store, isLoad) {
    if (isLoad) {
      store.commit('startIsLoading')
    } else {
      store.commit('stopIsLoading')
    }
  }
}

export const getters = {
  getUserItems: state => {
    return state.items
  }
}
