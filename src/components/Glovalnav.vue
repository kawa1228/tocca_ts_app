<template lang="pug">
  header.globalnav
    v-toolbar(dark color="#d6051b")
      v-toolbar-title
        router-link.globalnav__title(to="/") tocca
      v-spacer
      v-toolbar-items
        v-btn.globalnav__button(v-if="this.$route.fullPath === '/'" flat :to="'/home'" color="#fff") マイページ
        v-btn.globalnav__button(v-if="this.$route.fullPath === '/home'" flat @click.native="logout" color="#fff") ログアウト
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({})
export default class Glovalnav extends Vue {
  logout(): void {
    firebase.auth().signOut()
  }
}
</script>

<style lang="scss" scoped>
.globalnav {
  z-index: 1;

  &__title {
    font-family: 'Poiret One';
    font-style: italic;
    font-size: 3rem;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
