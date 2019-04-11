<template lang="pug">
  section
    v-container
      v-layout(justify-space-between mb-5)
        h1 tocca price
      ItemList(v-if="items" :items="items")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemList from '~/components/ItemList/index.vue'
import firebase from '~/plugins/firebase.js'

@Component({
  components: {
    ItemList
  },
  fetch({ store }) {
    // サインインしているかどうかを判定
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        console.log('user情報の登録に失敗しました')
        return
      }
      // ストアにユーザー情報を登録
      store.dispatch('addUserAction', user.uid)
      // ユーザーデータの読み込み
      store.dispatch('fetchUserItemsAction', user.uid)
    })
  }
})
export default class Home extends Vue {
  get items(): { name: string; price: number }[] {
    return this.$store.getters.getUserItems
  }
}
</script>
