<template lang="pug">
  .pages
    nuxt-link.pages__home(to="/home" @click="googleLogin") Googleでログイン
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({})
export default class extends Vue {
  isLogin: boolean = false

  created(): void {
    firebase.auth().onAuthStateChanged(user => {
      // todo: userの情報をVuexに入れる処理を追加
      user ? (this.isLogin = true) : (this.isLogin = false)
      if (!user) return
      this.$store.commit('addUser', user.uid)
    })
  }

  async googleLogin(): Promise<void> {
    await firebase
      .auth()
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
}
</script>
