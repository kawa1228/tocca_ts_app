<template lang="pug">
  div
    Glovalnav(:isLogin='isLogin')
    nuxt
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Glovalnav from '~/components/Glovalnav.vue'

@Component({
  components: {
    Glovalnav
  },
  computed: {
    isLogin(): boolean {
      if (this.$store.state.user.isLogin === undefined) {
        return false
      } else {
        return this.$store.state.user.isLogin
      }
    }
  }
})
export default class extends Vue {
  //
}
</script>
