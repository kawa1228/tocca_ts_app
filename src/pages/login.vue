<template lang="pug">
  section.login
    .login__container
      p 登録してtoccaを体験する
      v-btn(large @click="googleLogin") Googleでログイン
</template>

<script lang="ts">
import { setTimeout } from 'timers'
import { Component, Vue, Watch } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({})
export default class extends Vue {
  googleLogin(): void {
    // todo: ローディングを追加
    this.$router.push('/home')
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
}
</script>

<style lang="scss" scoped>
.login {
  &__container {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
