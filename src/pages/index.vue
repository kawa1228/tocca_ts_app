<template lang="pug">
  .pages
    nuxt-link.pages__home(to="/home" v-if="isLogin") マイページ
    button.pages__login(@click="googleLogin" v-else) Googleでログイン
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({})
export default class extends Vue {
  isLogin: boolean = false

  created(): void {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      user ? (this.isLogin = true) : (this.isLogin = false)
    })
  }

  async googleLogin(): Promise<void> {
    await firebase
      .auth()
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    this.$router.push('/home')
  }
}
</script>
