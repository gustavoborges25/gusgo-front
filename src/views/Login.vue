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
            <!--text-field-email(-->
              <!--:required="true"-->
              <!--v-model="user.email"-->
            <!--)-->
            <!--text-field-password(-->
              <!--:required="true"-->
              <!--v-model="user.password"-->
            <!--)-->
            span {{ user.email }}
            select-state(v-model="user.email")
            select-city(:state="user.email.id")
          v-layout(justify-space-between)
            v-btn.ma-0.pa-0.ml-3.mb-3(
              flat
              small
              to="/forgot-password"
            ) Esqueceu sua senha?
            btn-confirm.mb-3(@click-event="login()")
</template>

<script>
  import messageNotification from '@/mixins/messageNotification'
  import BtnConfirm from '../components/ButtonConfirm.vue'
  import TextFieldEmail from '../components/TextFieldEmail.vue'
  import TextFieldPassword from "../components/TextFieldPassword";
  import SelectState from "../components/SelectState";
  import SelectCity from "../components/SelectCity";

  export default {
    components: {
      SelectCity,
      SelectState,
      TextFieldPassword,
      TextFieldEmail,
      BtnConfirm
    },
    mixins: [
      messageNotification
    ],
    data () {
      return{
        user: {
          email: { id: 12, sigla: 'AC', nome: 'Acre', regiao: { id: 1, sigla: 'N', nome: 'Norte' } },
          password: {},
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
