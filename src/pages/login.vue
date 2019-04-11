<template lang="pug">
  .pages
    v-btn(large @click="googleLogin") Googleでログイン
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({})
export default class extends Vue {
  // onClick(): void {
  //   console.log(this.$store.state.user.uid)
  //   this.googleLogin()
  //   this.getUserInfo()
  // }

  googleLogin(): void {
    // homeに遷移する処理を追加
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  // getUserInfo(): void {
  //   // ログイン済みならストアに登録
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log('add user')
  //     if (user) {
  //       this.$store.dispatch('addUserAction', user.uid)
  //       // this.$router.push('/home')
  //     } else {
  //       console.log('ログインに失敗しました')
  //     }
  //   })
  // }
}
</script>
