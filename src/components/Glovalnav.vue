<template lang="pug">
  header.globalnav
    v-toolbar
      v-toolbar-title
        router-link.globalnav__title(to="/") tocca
      v-spacer
      v-toolbar-items
        v-btn(v-show='!isLogin' flat to="/login") ログイン
        v-btn(v-show="isShowHomeLink" flat to="/home") マイページ
        v-btn(v-if="isLogin" flat @click="logout") ログアウト
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

<style lang="scss" scoped>
.globalnav {
  &__title {
    color: black;
    text-decoration: none;
  }
}
</style>
