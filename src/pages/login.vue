<template lang="pug">
  section.login
    v-container
      .login__loading-block(v-if="isLoading")
        v-progress-circular.mt-4(indeterminate color="rgba(255, 177, 175)" :rorare="360" :size="50")
      v-layout.login__wrapper(v-else align-center justify-center column)
        p 登録してtoccaを体験する
        v-btn.login__button(large round color='#EF5350' @click.native="googleLogin")
          i.fab.fa-google-plus-g
          span.login__title(style="margin-left: 10px;") Googleでログイン
</template>

<script lang="ts">
import { setTimeout } from 'timers'
import { Component, Vue, Watch } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({
  layout: 'globalnav'
})
export default class extends Vue {
  googleLogin(): void {
    const provider = new firebase.auth.GoogleAuthProvider()
    this.$store.dispatch('isLoadingAction', true)
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        this.$store.dispatch('isLoadingAction', false)
      })
  }

  get isLoading(): boolean {
    return this.$store.state.isLoading
  }
}
</script>

<style lang="scss" scoped>
.login {
  background: linear-gradient(to top, rgba(255, 255, 255, 0.5), #fff, #fff),
    url('/img/img01.jpg');
  background-size: cover;
  position: absolute;
  height: calc(100% - 56px);
  width: 100%;

  &__loading-block {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__wrapper {
    height: calc(80vh - 56px);
  }

  &__button {
    color: #fff;
  }

  p {
    font-size: 2rem;
  }
}
</style>
