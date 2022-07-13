<template>
  <v-text-field
    v-model="value"
    :name="name"
    :type="type"
    :label="label"
    :rules="rules"
    @input="$emit('value-input', value)"
  ></v-text-field>
</template>
<script>
export default {
  name: 'inputText',
  props: {
    rules: { type: Array, default: () => [] },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
  },
  data() {
    return {
      value: '',
    };
  },
};
</script>
