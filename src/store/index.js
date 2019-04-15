import firebase from '~/plugins/firebase.js'

export const state = () => ({
  isLoading: false,
  user: () => {},
  items: []
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
  addItem(state, item) {
    state.items.push(item)
  },
  deleteItem(state, index) {
    const items = state.items.slice()
    items.splice(index, 1)
    state.items = items
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
  addItemAction(store, item) {
    store.commit('addItem', item)
  },
  deleteItemAction(store, index) {
    store.commit('deleteItem', index)
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
