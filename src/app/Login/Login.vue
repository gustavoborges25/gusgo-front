<template lang='pug'>
  v-form.login(@submit="login()" ref="form")
    v-layout(column wrap align-center justify-center)
      v-flex.fundo-login(xs12)
      v-flex.login-position(xs12)
        img(src="@/assets/logo.png")
        v-card.elevation-3.white
          v-card-text
            text-field-email(
              :required="true"
              v-model="user.email"
            )
            text-field-password(
              :required="true"
              v-model="user.password"
            )
            v-btn.right(
              flat
              small
              to="/forgot-password"
            ) Esqueceu sua senha?
            btn-confirm.mb-3(@click-event="login()")
</template>

<script>
  import BtnConfirm from '@/support/commons/components/ButtonConfirm.vue';
  import TextFieldEmail from '@/support/commons/components/TextFieldEmail.vue';
  import TextFieldPassword from '@/support/commons/components/TextFieldPassword';

  export default {
    components: {
      BtnConfirm,
      TextFieldEmail,
      TextFieldPassword,
    },
    data () {
      return{
        user: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      login () {
        this
          .$http
          .post('api/auth', this.user)
          .then(({ body }) => {
            let rollbackUri = localStorage.getItem('rollback-uri')
            localStorage.setItem('authorization', 'Bearer ' + body.token)

            this
              .$router
              .replace(rollbackUri || '/')
          })
          .catch(({ body }) => {
            // this.messageHandlerError(body.errors)
          })
      }
    }
  }
</script>
