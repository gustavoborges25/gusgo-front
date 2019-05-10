<template lang='pug'>
  v-app(
    standalone
    :dark="$theme.dark"
    :light="!$theme.dark"
  )
    v-fade-transition(mode='out-in')
      router-view
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="stylus">
  @import 'stylus/app'
</style>
