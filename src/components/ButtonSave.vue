<template lang="pug">
  v-tooltip(bottom)
    v-btn(
      slot="activator"
      fab
      dark
      right
      bottom
      absolute
      color="#4aa954"
      @click="change()"
    )
      v-icon(color="#fafafa") done
    span Salvar
</template>

<script>
  export default {
    name: 'btn-save',
    methods: {
      change() {
        this.$emit('click-event')
      }
    }
  }
</script>

<style>

</style>
