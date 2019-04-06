<template lang="pug">
  v-container
    h1 tocca price
    ItemList
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemList from '~/components/ItemList/index.vue'

@Component({
  components: {
    ItemList
  }
})
export default class Home extends Vue {
  //
}
</script>
