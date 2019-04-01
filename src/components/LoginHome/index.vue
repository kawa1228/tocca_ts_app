<template lang="pug">
  .login-home
    h1.login-home__title {{msg}}
    button.login-home__button(@click="googleLogin") GoogleHomeでログイン
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'
import firebase from '~/plugins/frebase.js'

interface IData {
  msg: string | null
}
export default Vue.extend({
  data(): IData {
    return {
      msg: 'this is login home'
    }
  },
  methods: {
    googleLogin($event: Event): void {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
})
</script>

<style lang="scss" src="./style.scss" scoped></style>
