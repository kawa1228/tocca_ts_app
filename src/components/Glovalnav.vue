<template lang="pug">
  header
    v-toolbar
      v-toolbar-title tocca
      v-spacer
      v-toolbar-items
        v-btn(v-show='!isLogin' flat to="/login") ログイン
        v-btn(v-show="isShowHomeLink" flat to="/home") マイページ
        v-btn(v-show="isLogin" flat @click="logout") ログアウト
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({})
export default class Glovalnav extends Vue {
  @Prop() isLogin!: boolean

  get isShowHomeLink(): boolean {
    return this.isLogin && this.$route.fullPath !== '/home'
  }

  logout(): void {
    firebase.auth().signOut()
    this.$store.dispatch('initUserAction')
    this.$router.push('/')
  }
}
</script>
