<template>
  <v-card>
    <v-container>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>

      <div class="mt-8">
        <v-btn @click="$emit('on-click')" color="accent" block>hapus</v-btn>
      </div>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'CardOfTask',
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
  },
};
</script>
