<template lang="pug">
  section
    .home__alert
      v-alert.teal.lighten-2(:value="saveFlag" transition="fade" type="success" icon="check_circle") 保存しました
    .home__loading-block(v-if="isLoading")
      v-progress-circular.mt-4(indeterminate color="primary")
    v-container(v-else)
      v-layout(justify-space-between mb-5)
        h1 tocca price
      ItemList(v-if="items" :items="items" @onSave="saveItems")
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
      if (!user) return
      // ストアにユーザー情報を登録
      store.dispatch('addUserAction', user.uid)
      // ユーザーデータの読み込み
      store.dispatch('fetchUserItems', user.uid)

      store.dispatch('isLoadingAction', false)
    })
  }
})
export default class Home extends Vue {
  saveFlag: boolean = false

  get items(): { name: string; price: number }[] {
    return this.$store.getters.getUserItems
  }

  get isLoading(): boolean {
    return this.$store.state.isLoading
  }

  saveItems(): void {
    firebase
      .database()
      .ref(`user/${this.$store.state.user.id}`)
      .set(this.$store.state.items)
      .then(() => {
        this.saveFlag = true
        setTimeout(() => {
          this.saveFlag = false
        }, 1000)
      })
      .catch(err => {
        console.log('データの保存に失敗しました', err)
      })
  }
}
</script>

<style lang="scss" scoped>
.v-alert {
  margin: 0;
}
.home {
  &__alert {
    position: absolute;
    top: 0;
    width: 100vw;
  }
  &__loading-block {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}
.fade-enter {
  opacity: 0.5;
  transform: translateY(-10px);
}
.fade-leave-to {
  opacity: 0;
}
</style>
