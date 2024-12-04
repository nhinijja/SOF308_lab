<template>
  <div class="col-sm-8">
    <h1>Thông tin cá nhân</h1>
    <form>
      <!-- Họ và Tên -->
      <div class="mb-3">
        <label>Họ và Tên:</label>
        <input
          v-model="userInfo.name"
          type="text"
          class="form-control"
          placeholder="Nhập họ và tên"
        >
      </div>

      <!-- Tuổi -->
      <div class="mb-3">
        <label>Tuổi:</label>
        <input
          v-model="userInfo.age"
          type="number"
          class="form-control"
          placeholder="Nhập tuổi"
        >
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label>Email:</label>
        <input
          v-model="userInfo.email"
          type="email"
          class="form-control"
          placeholder="Nhập email"
        >
      </div>
    </form>

    <!-- Hiển thị thông tin đã nhập -->
    <div class="info-display mt-4 p-3 bg-dark text-white rounded">
      <h2>Thông tin đã nhập:</h2>
      <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
      <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
      <p><strong>Email:</strong> {{ userInfo.email }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Bai3Lab5Component",

  setup() {
    const userInfo = reactive({
      name: "",
      age: null,
      email: "",
    });

    return {
      userInfo, // Return `userInfo` for use in the template
    };
  },
};
</script>

<style>
/* Add styles if necessary */
</style>
