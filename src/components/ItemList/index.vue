<template lang="pug">
  .home
    v-flex(xs12 v-if="items && items.length > 0")
      ul
        li.home__item-name(v-for="(item, i) in items" :class="{active: i === selectIndex}" :key="i" @click="selectItem(i)") {{item.name}} {{item.price}} 円
    .home__bottom
      v-layout(row wrap)
        v-text-field(v-model="name" label="item name" type="text")
        v-text-field(v-model="price" label="price" type="number")
      v-layout(row wrap)
        v-btn(round outline class="deep-orange accent-4" @click="addItem" @keyup.enter="addItem") 追加
        v-btn(round outline class="indigo accent-4" v-if="items.length > 0" @click="deleteItem") 削除
        v-btn(round outline class="green accent-4" v-if="items.length > 0" @click="saveItem") 保存
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({})
export default class ItemList extends Vue {
  name: string | null = null
  // todo: items.priceがstringになっているので修正
  price: number | null = null
  items: { name: string | null; price: number | null }[] = []
  selectIndex: number | null = null

  created(): void {
    firebase
      .database()
      .ref('todos/' + this.$store.state.user.id)
      .once('value')
      .then(result => {
        if (result.val()) {
          this.items = result.val()
        }
      })
  }

  logout(): void {
    firebase.auth().signOut()
    // todo: userの情報をVuexで管理してハンドリングする処理を追加
    this.$router.push('/')
  }

  addItem(): void {
    if (this.name === null) return
    this.items.push({ name: this.name, price: this.price })
    this.name = null
    this.price = null
  }

  selectItem(index: number) {
    this.selectIndex = index
  }

  deleteItem() {
    if (this.items.length === 0 || this.selectIndex === null) return
    this.items.splice(this.selectIndex, 1)
  }

  saveItem() {
    if (this.$store.state.user.id) {
      firebase
        .database()
        .ref(`todos/${this.$store.state.user.id}`)
        .set(this.items)
    } else {
      console.log('uidがありません')
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
