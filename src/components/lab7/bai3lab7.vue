<template>
  <div class="container">
    <h3>Form Đăng ký</h3>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label>Họ tên:</label>
        <input
          v-model="user.fullName"
          class="form-control"
          placeholder="Nhập họ tên"
        >
      </div>
      <div class="mb-3">
        <label>Email:</label>
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          placeholder="Nhập email"
        >
      </div>
      <div class="mb-3">
        <label>Mật khẩu:</label>
        <input
          v-model="user.password"
          type="password"
          class="form-control"
          placeholder="Nhập mật khẩu"
        >
      </div>
      <div class="mb-3">
        <label>Ngày sinh:</label>
        <input
          v-model="user.birthDate"
          type="date"
          class="form-control"
        >
      </div>
      <button
        type="submit"
        class="btn btn-success"
      >
        Đăng ký
      </button>
    </form>
    <div
      v-if="registeredUser"
      class="mt-4"
    >
      <h4>Thông tin đã đăng ký:</h4>
      <p><strong>Họ tên:</strong> {{ registeredUser.fullName }}</p>
      <p><strong>Email:</strong> {{ registeredUser.email }}</p>
      <p><strong>Ngày sinh:</strong> {{ registeredUser.birthDate }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Bai3Lab7Component",
  setup() {
    const user = ref({
      fullName: "",
      email: "",
      password: "",
      birthDate: "",
    });
    const registeredUser = ref(null);

    const register = () => {
      registeredUser.value = { ...user.value }; // Save user data
      // Clear the form after registration
      user.value = { fullName: "", email: "", password: "", birthDate: "" };
    };

    return {
      user,
      registeredUser,
      register,
    };
  },
};
</script>
