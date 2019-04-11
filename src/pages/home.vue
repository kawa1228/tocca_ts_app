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
    try {
      firebase.auth().signOut()
    } catch (err) {
      console.log('ログアウトに失敗しました', err)
    } finally {
      this.$store.dispatch('initUserAction')
      this.$router.push('/')
    }
  }
}
</script>
