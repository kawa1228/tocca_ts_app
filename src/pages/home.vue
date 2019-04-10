<template lang="pug">
  v-container
    v-layout(justify-space-between mb-5)
      h1 tocca price
      v-btn(class="deep-orange darken-1" outline @click="logout") ログアウト
    ItemList
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemList from '~/components/ItemList/index.vue'
import firebase from '~/plugins/firebase.js'

@Component({
  components: {
    ItemList
  }
})
export default class Home extends Vue {
  logout(): void {
    firebase.auth().signOut()
    // todo: userの情報をVuexで管理してハンドリングする処理を追加
    this.$router.push('/')
  }
}
</script>
