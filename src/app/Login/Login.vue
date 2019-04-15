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
  import { login } from '@/domain/Login/LoginService';

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
      login() {
        const rollbackUri = localStorage.getItem('rollback-uri');
          login(this.user)
          .then(() => {
            this.$router.replace(rollbackUri || '/');
          }, (error) => {
            const { data } = error.response;
            if (data.errors) {
              this.simpleMessageWithTimer(data.errors[0].messages[0]);
            } else {
              this.simpleMessageWithTimer(data.message);
            }
          });
      },
      // toForgotPassword() {
      //   this.$router.replace({ name: 'forgotPassword' });
      // },
    }
  }
</script>
