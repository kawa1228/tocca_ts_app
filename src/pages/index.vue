<template lang="pug">
  section
    h1 tocca でおトクにお買い物
    p このへんに良い感じの文言を入れる
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import firebase from '~/plugins/firebase.js'

@Component({
  layout: 'globalnav'
})
export default class ItemList extends Vue {
  //
}
</script>
