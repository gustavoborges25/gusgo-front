<template lang="pug">
  v-text-field(
    :append-icon="show ? 'visibility' : 'visibility_off'"
    :type="show ? 'text' : 'password'"
    :required="required"
    :rules="[rules.required, rules.valid]"
    :label="label"
    v-model="email"
    @click:append="show = !show"
  )
</template>

<script>
  export default {
    name: 'text-field-password',
    props: {
      value: {
        type: String,
        default: '',
      },
      required: {
        type: Boolean,
        default: false,
      },
      min: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: 'Senha',
      },
    },
    data(vm) {
      return {
        show: false,
        rules: {
          required: value => {
            if (!value && vm.required) {
              return 'Senha obrigatória!'
            }
            return true
          },
          min: value => {
            if (value && vm.min) {
              return 'Senha deve ter mais de 8 caracteres!'
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
