<template>
  <div class="container">
    <h3>Quản lý công việc</h3>
    <form @submit.prevent="addTask">
      <input
        v-model="newTask"
        placeholder="Nhập công việc mới"
        class="form-control mb-3"
      >
      <button
        type="submit"
        class="btn btn-primary"
      >
        Thêm công việc
      </button>
    </form>
    <ul class="list-group mt-3">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="list-group-item d-flex justify-content-between"
      >
        {{ task }}
        <button
          class="btn btn-danger btn-sm"
          @click="deleteTask(index)"
        >
          Xóa
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Bai1Lab7Component",
  setup() {
    const newTask = ref("");
    const tasks = ref([]);

    const addTask = () => {
      if (newTask.value.trim() !== "") {
        tasks.value.push(newTask.value);
        newTask.value = "";
      }
    };

    const deleteTask = (index) => {
      tasks.value.splice(index, 1);
    };

    // Return variables and methods to make them available in the template
    return {
      newTask,
      tasks,
      addTask,
      deleteTask,
    };
  },
};
</script>
