import firebase from '~/plugins/firebase.js'

export default function({ route, redirect }) {
  // '/' は誰でもアクセス可能
  if (['/'].includes(route.path)) return

  firebase.auth().onAuthStateChanged(user => {
    if (user && route.path === '/login') {
      return redirect('/home')
    }

    if (!user && route.path !== '/login') {
      return redirect('/login')
    }
  })
}
