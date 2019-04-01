<template lang="pug">
  .login-home
    h1.login-home__title {{msg}}
    button.login-home__button GoogleHomeでログイン
</template>

<script lang="ts">
import Vue from 'vue'

interface IData {
  msg: string | null
}
export default Vue.extend({
  data(): IData {
    return {
      msg: 'this is login home'
    }
  }
})
</script>

<style lang="scss" src="./style.scss" scoped></style>
