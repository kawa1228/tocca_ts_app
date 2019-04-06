<template lang="pug">
  .pages
    nuxt-link.pages__home(to="/home" v-if="isLogin") マイページ
    button.pages__login(@click="googleLogin" v-else) Googleでログイン
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({})
export default class extends Vue {
  isLogin: boolean = false

  @Watch('isLogin')
  switchPageToHome(after: boolean, before: boolean): void {
    if (!before && after) {
      this.$router.push('/home')
    }
  }

  created(): void {
    firebase.auth().onAuthStateChanged(user => {
      // todo: userの情報をVuexに入れる処理を追加
      user ? (this.isLogin = true) : (this.isLogin = false)
    })
  }

  async googleLogin(): Promise<void> {
    await firebase
      .auth()
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
}
</script>
