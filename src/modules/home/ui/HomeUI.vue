<template>
  <div>
    <v-app-bar color="blue" elevation="4">
      <v-row align="center" justify="space-between" class="px-5">
        <v-toolbar-title>Collapsing Bar</v-toolbar-title>

        <v-btn color="primary" elevation="2" @click="handleLogout"> Logout </v-btn>
      </v-row>
    </v-app-bar>
    <v-row>
      <v-col cols="3" v-for="i in 10" :key="i">
        <v-card class="py-5">{{ i }}</v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// Vuex
import { mapGetters } from 'vuex';

export default {
  name: 'HomeUI',
  computed: {
    ...mapGetters({
      home_title: 'home/home_title',
    }),
  },
  methods: {
    /**
     * @description Fetch Get Title
     *
     * @return {void}
     */
    fetchTitle() {
      try {
        this.$store.dispatch('home/home_getTitle');
      } catch (err) {
        this.$store.dispatch('errorHandler/errorHandler_postMessage', err);
      }
    },
    handleLogout() {
      try {
        this.$store.dispatch('auth/auth_HANDLE_LOGOUT');
        this.$router.replace('/login');
      } catch (error) {
        this.$store.dispatch('errorHandler/errorHandler_postMessage', error);
      }
    },
  },
  created() {
    this.fetchTitle();
  },
};
</script>

<style>
.main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
