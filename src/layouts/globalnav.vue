<template lang="pug">
  div
    Glovalnav
    nuxt
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Glovalnav from '~/components/Glovalnav.vue'

@Component({
  components: {
    Glovalnav
  }
})
export default class extends Vue {
  //
}
</script>
