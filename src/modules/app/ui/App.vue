<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import appMixins from '../mixins';

export default {
  name: 'App',

  mixins: [appMixins],
};
</script>
