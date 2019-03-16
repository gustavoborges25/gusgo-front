<template lang="pug">
  v-select(
    label="Itens por página"
    :items="items"
    v-model="rowsPerPage"
  )
</template>

<script>
  export default {
    name: 'select-page',
    props: {
      value: {
        type: Number,
        default: 10,
      },
    },
    data(vm) {
      return {
        items: [10, 20, 50],
      }
    },
    computed: {
      rowsPerPage: {
        get() {
          return this.value || 10
        },
        set(newValue) {
          this.$emit('input', newValue)
        },
      },
    },
  }
</script>
