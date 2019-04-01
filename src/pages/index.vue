<template lang="pug">
  .pages
    LoginHome(v-if="!isLogin")
    Item(v-if="isLogin")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LoginHome from '~/components/LoginHome/index.vue'
import Item from '~/components/Item/index.vue'

@Component({
  components: {
    LoginHome,
    Item
  }
})
export default class Index extends Vue {
  isLogin: boolean = false
}
</script>
