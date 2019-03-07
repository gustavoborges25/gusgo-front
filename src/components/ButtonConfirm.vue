<template lang="pug">
  v-tooltip(bottom)
    v-btn(
      slot="activator"
      fab
      dark
      right
      bottom
      absolute
      color="primary"
      @click="change()"
    )
      v-icon(color="#fafafa") keyboard_arrow_right
    span {{ text }}
</template>

<script>
  export default {
    name: 'btn-confirm',
    props: {
      text: {
        type: String,
        default: 'Entrar',
      },
    },
    methods: {
      change() {
        this.$emit('click-event')
      }
    }
  }
</script>

<style>

</style>
