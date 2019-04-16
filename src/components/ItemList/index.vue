<template lang="pug">
  .item-list
    v-layout(column justify-center align-center)
      v-container(id="scroll-target" style="max-height: 50vh" class="scroll-y" v-if="items && items.length > 0")
        ul.item-list__items
          li.item-list__item-name(v-for="(item, i) in items" :class="{active: i === selectIndex}" :key="i" @click="selectItem(i)") {{item.name}} {{item.price}} 円
    v-flex.item-list__bottom
      v-layout(row wrap)
        v-text-field(v-model="name" label="item name" type="text")
        v-text-field(v-model="price" label="price" type="number")
      v-layout(row wrap)
        v-btn(round outline color="#d6051b" @click.native="addItem")
          i.fas.fa-plus
          span(style="margin-left: 5px") add
        v-btn(round outline color="#d6051b" v-if="items.length > 0" @click.native="deleteItem")
          i.far.fa-trash-alt
          span(style="margin-left: 5px") delete
        v-btn(round outline color="#d6051b" v-if="items.length > 0" @click.native="saveItem")
          i.far.fa-save
          span(style="margin-left: 5px") save
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({})
export default class ItemList extends Vue {
  name: string | null = null
  price: number | null = null
  selectIndex: number | null = null

  @Prop() items!: { name: string | null; price: number | null }[]

  addItem(): void {
    if (this.name === null || this.name === '') {
      this.$emit('inputErr', '名前を入力してください')
      return
    }
    if (this.price === null) {
      this.$emit('inputErr', '金額を入力してください')
      return
    }
    this.$store.dispatch('addItemAction', {
      name: this.name,
      price: Number(this.price)
    })
    this.name = null
    this.price = null
  }

  selectItem(index: number) {
    this.selectIndex = index
  }

  deleteItem() {
    if (this.items.length === 0 || this.selectIndex === null) {
      this.$emit('inputErr', '削除する項目を選んでください')
      return
    }
    this.$store.dispatch('deleteItemAction', this.selectIndex)
  }

  saveItem() {
    this.$emit('onSave')
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
