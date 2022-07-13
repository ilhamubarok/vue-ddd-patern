<template>
  <component :is="layout">
    <v-row justify="center">
      <v-col cols="5">
        <h1>{{ auth_title }}</h1>
        <v-form @submit.prevent="onSubmit" lazy-validation>
          <text-input name="email" label="E-mail" :rules="emailRules" type="email"></text-input>
          <text-input name="password" label="Password" :rules="passwordRules" type="password"></text-input>

          <v-btn color="primary" type="submit" :loading="auth_loading"> Login </v-btn>
          <div>
            <span>belum punya akun? </span>
            <a href="/register">register</a>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </component>
</template>
<script>
import authMixin from '../mixins/auth.mixins';

export default {
  name: 'loginUI',
  components: {
    textInput: () => import('./components/inputText.vue'),
  },
  mixins: [authMixin],
  methods: {
    onSubmit(event) {
      const { email, password } = event.target;
      this.$store.dispatch('auth/auth_HANDLE_LOGIN', { email: email.value, password: password.value }).then((res) => {
        if (res) this.$router.replace('/home');
      });
    },
  },
};
</script>
