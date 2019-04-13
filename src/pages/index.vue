<template lang="pug">
  section.top
    .bg-mask
      v-container.top__container
        v-layout(align-center justify-center column)
          h1.top__title tocca
          p 毎日の暮らしを少し賢く、幸せに
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

<style lang="scss" scoped>
.top {
  color: #fff;
  background: url('/img/img01.jpg');
  background-size: cover;
  position: absolute;
  height: calc(100% - 56px);
  width: 100%;

  &__title {
    font-family: 'Poiret One';
    font-size: 7rem;
  }

  &__container {
    height: inherit;
    display: flex;
    color: black;
  }
}
.bg-mask {
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
}
</style>
