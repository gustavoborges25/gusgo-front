<template lang='pug'>
  main.login
    .login__background.primary
    .login__card
      .login__logo
        img(src='../static/favicon.png')
      v-card.elevation-3.white
        v-divider
        form#form-login(@submit.prevent="login()")
          v-card-text
            v-text-field(
              required
              label="E-mail"
              v-model="user.email"
            )
            v-text-field(
              required
              label="Senha"
              ref="password"
              type="password"
              v-model="user.password"
            )
          v-layout
            v-btn.ma-0.pa-0.ml-3.mb-3(
              flat
              small
              to="/forgot-password"
            ) Esqueceu sua senha?
            v-btn(
              fab
              dark
              right
              bottom
              absolute
              color="secondary"
              type="submit"
            )
              v-icon chevron_right
</template>

<script>
  import messageNotification from '@/mixins/messageNotification'

  export default {
    mixins: [
      messageNotification
    ],
    data () {
      return {
        user: {
          email: '',
          password: ''
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
            this.messageHandlerError(body.errors)
          })
      }
    }
  }
</script>
