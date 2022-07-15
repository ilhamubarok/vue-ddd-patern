<template>
  <component :is="layout">
    <v-row justify="center">
      <v-col cols="5">
        <h1>{{ auth_title }}</h1>
        <v-form @submit.prevent="onSubmit" lazy-validation>
          <text-input label="Fullname" name="fullname"></text-input>
          <text-input label="E-mail" name="email" :rules="emailRules" type="email"></text-input>
          <text-input label="Password" name="password" :rules="passwordRules" type="password"></text-input>

          <v-btn color="primary" type="submit" :loading="auth_loading"> Registrasi </v-btn>
          <div>
            <span>sudah punya akun? </span>
            <a href="/login">login</a>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </component>
</template>
<script>
import authMixin from '../mixins';

export default {
  name: 'registerUI',
  components: {
    textInput: () => import('./components/inputText.vue'),
  },
  methods: {
    onSubmit(event) {
      const { fullname, email, password } = event.target;
      this.$store
        .dispatch('auth/auth_HANDLE_REGISTER', {
          fullname: fullname.value,
          email: email.value,
          password: password.value,
        })
        .then((res) => {
          if (res) this.$router.replace('/login');
        });
    },
  },
  mixins: [authMixin],
};
</script>
