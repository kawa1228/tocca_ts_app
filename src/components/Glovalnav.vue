<template lang="pug">
  header.globalnav
    v-toolbar
      v-toolbar-title
        router-link.globalnav__title(to="/") tocca
      v-spacer
      v-toolbar-items
        v-btn(v-if="this.$route.fullPath === '/'" flat :to="'/home'") マイページ
        v-btn(v-if="this.$route.fullPath === '/home'" flat @click="logout") ログアウト
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

  login(): void {
    this.$router.push('/login')
  }

  logout(): void {
    // todo: ログアウト後loginへ遷移される
    this.$router.push('/')
    firebase.auth().signOut()
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
