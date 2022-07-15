<template>
  <div>
    <v-row justify="center" class="my-8">
      <v-col cols="3">
        <v-form @submit.prevent="addTask">
          <v-text-field label="Masukkan tugas baru" name="newTask"></v-text-field>
          <v-textarea no-resize label="Masukkan deskripsi tugas" name="newDesc"></v-textarea>
          <v-btn type="submit" color="primary">simpan</v-btn>
        </v-form>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="3" v-for="(task, index) in tasks" :key="index" class="ma-2">
        <card-of-task :title="task.title" :description="task.description" @on-click="removeTask(index)" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// Vuex
import { mapGetters } from 'vuex';

export default {
  name: 'HomeUI',
  components: {
    CardOfTask: () => import('./components/CardOfTask.vue'),
  },
  computed: {
    ...mapGetters({
      home_title: 'home/home_title',
    }),
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(event) {
      const { newTask, newDesc } = event.target;
      this.tasks.push({ title: newTask.value, description: newDesc.value });
      newTask.value = '';
      newDesc.value = '';
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter((value, index) => index !== taskId);
    },
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
