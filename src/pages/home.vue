<template lang="pug">
  section
    .home__loading-block(v-if="isLoading")
      v-progress-circular.mt-4(indeterminate color="primary")
    v-container(v-else)
      v-layout(justify-space-between mb-5)
        h1 tocca price
      ItemList(v-if="items" :items="items")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemList from '~/components/ItemList/index.vue'
import firebase from '~/plugins/firebase.js'

@Component({
  layout: 'globalnav',
  components: {
    ItemList
  },
  fetch({ store }) {
    store.dispatch('isLoadingAction', true)
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

      store.dispatch('isLoadingAction', false)
    })
  }
})
export default class Home extends Vue {
  get items(): { name: string; price: number }[] {
    return this.$store.getters.getUserItems
  }

  get isLoading(): boolean {
    return this.$store.state.isLoading
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__loading-block {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
