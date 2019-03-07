<template lang="pug">
  v-tooltip(bottom)
    v-btn(
      slot="activator"
      fab
      dark
      right
      bottom
      absolute
      color="#eb5034"
      @click="change()"
    )
      v-icon(color="#fafafa") clear
    span Cancelar
</template>

<script>
  export default {
    name: 'btn-cancel',
    methods: {
      change() {
        this.$emit('click-event')
      }
    }
  }
</script>

<style>

</style>
