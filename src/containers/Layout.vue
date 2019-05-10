<template lang='pug'>
  #layout
    sidebar(
    :visible="$theme.sidebar.visible"
    :clipped="$theme.sidebar.clipped"
    :persistent="$theme.sidebar.persistent"
    :mini-variant="$theme.sidebar.miniVariant"
    )
    main
      v-content
        v-fade-transition(mode='out-in')
          router-view
    v-footer.indigo.pa-3(dark app color='primary')
      span
        | &copy; 2018 - Gusgo
</template>

<script>
  import Sidebar from './Sidebar'

  export default {
    components: {
      Sidebar
    },
  };
</script>

<style lang="stylus">

</style>
