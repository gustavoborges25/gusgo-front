<template lang="pug">
  v-tooltip(bottom)
    v-btn(
      slot="activator"
      fab
      dark
      right
      bottom
      absolute
      color="#fabc15"
      @click="change()"
    )
      v-icon(color="#fafafa") edit
    span Editar
</template>

<script>
  export default {
    name: 'btn-edit',
    methods: {
      change() {
        this.$emit('click-event')
      }
    }
  }
</script>

<style>

</style>
