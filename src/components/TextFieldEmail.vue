<template lang="pug">
  v-text-field(
    :required="required"
    :rules="[rules.required, rules.valid]"
    :label="label"
    v-model="email"
  )
</template>

<script>
  export default {
    name: 'text-field-email',
    props: {
      value: {
        type: String,
        default: '',
      },
      required: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: 'E-mail',
      },
    },
    data(vm) {
      return {
        rules: {
          required: value => {
            if (!value && vm.required) {
              return 'E-mail obrigatório!'
            }
            return true
          },
          valid: v => {
            const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
            if (v && !regex.test(v)) {
              return 'E-mail inválido!'
            }
            return true
          }
        }
      }
    },
    computed: {
      email: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue)
        },
      },
    },
  }
</script>

<style>

</style>
