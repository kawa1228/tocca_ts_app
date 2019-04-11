import firebase from '~/plugins/firebase.js'

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
  fetchUserItems(state, items) {
    state.items = items
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
  initUserAction(store) {
    store.commit('initUser')
  },
  fetchUserItemsAction(store, id) {
    firebase
      .database()
      .ref(`user/${id}`)
      .once('value')
      .then(result => {
        if (result.val()) {
          store.commit('fetchUserItems', result.val())
        }
      })
      .catch(err => {
        console.log('初期データの読み込みに失敗しました', err)
      })
  }
}

export const getters = {
  getUserItems: state => {
    return state.items
  }
}
