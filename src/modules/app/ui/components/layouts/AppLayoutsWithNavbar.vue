<template>
  <v-app>
    <nav>
      <v-app-bar color="orange" elevation="4">
        <v-row align="center" justify="space-between" class="px-5">
          <v-toolbar-title>Collapsing Bar</v-toolbar-title>

          <v-btn color="primary" elevation="2" @click="handleLogout"> Logout </v-btn>
        </v-row>
      </v-app-bar>
    </nav>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import appMixins from '@/modules/app/mixins/index';

export default {
  name: 'AppLayoutsWithNavbar',
  mixins: [appMixins],
};
</script>
