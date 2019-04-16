<template lang="pug">
  section
    .home__alert
      v-alert(:value="successFlag" transition="fade" color="#a9a9a9" icon="check_circle") {{successMessage}}
      v-alert(:value="errorFlag" transition="fade" color="#a9a9a9" icon="warning") {{errorMessage}}
    .home__loading-block(v-if="isLoading")
      v-progress-circular.mt-4(indeterminate color="rgba(255, 177, 175)" :rorare="360" :size="50")
    v-container(v-else)
      v-layout(justify-space-between mb-4)
        h1 tocca price
      ItemList(v-if="items" :items="items" @onSave="saveItems" @inputErr="showErrToast")
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
  successFlag: boolean = false
  errorFlag: boolean = false
  successMessage: string = '保存しました'
  errorMessage: string = 'エラー'

  get items(): { name: string; price: number }[] {
    return this.$store.getters.getUserItems
  }

  get isLoading(): boolean {
    return this.$store.state.isLoading
  }

  showErrToast(message): void {
    this.errorMessage = message
    this.errorFlag = true
    setTimeout(() => {
      this.errorFlag = false
    }, 1000)
  }

  saveItems(): void {
    firebase
      .database()
      .ref(`user/${this.$store.state.user.id}`)
      .set(this.$store.state.items)
      .then(() => {
        this.successFlag = true
        setTimeout(() => {
          this.successFlag = false
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
  height: 64px;
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
