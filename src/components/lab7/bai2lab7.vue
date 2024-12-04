<template>
  <div
    v-if="!isLoggedIn"
    class="container"
  >
    <h3>Form Đăng nhập</h3>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label>Email:</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          placeholder="Nhập email"
        >
        <p
          v-if="emailError"
          class="text-danger"
        >
          {{ emailError }}
        </p>
      </div>
      <div class="mb-3">
        <label>Mật khẩu:</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Nhập mật khẩu"
        >
        <p
          v-if="passwordError"
          class="text-danger"
        >
          {{ passwordError }}
        </p>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
      >
        Đăng nhập
      </button>
    </form>
  </div>
  <div
    v-else
    class="container"
  >
    <h3>Chào mừng, {{ email }}</h3>
    <button
      class="btn btn-secondary"
      @click="logout"
    >
      Đăng xuất
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Bai2Lab7Component",
  setup() {
    const email = ref("");
    const password = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const isLoggedIn = ref(false);

    const login = () => {
      emailError.value = "";
      passwordError.value = "";

      // Validate email and password
      if (!email.value) emailError.value = "Email là bắt buộc.";
      if (!password.value) passwordError.value = "Mật khẩu là bắt buộc.";

      // If no errors, set the user as logged in
      if (!emailError.value && !passwordError.value) isLoggedIn.value = true;
    };

    const logout = () => {
      // Log the user out and reset form fields
      isLoggedIn.value = false;
      email.value = "";
      password.value = "";
    };

    return {
      email,
      password,
      emailError,
      passwordError,
      isLoggedIn,
      login,
      logout,
    };
  },
};
</script>
