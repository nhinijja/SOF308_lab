<template>
  <div class="custom m-5">
    <h2>Đăng Nhập</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="username">Tên đăng nhập:</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
          placeholder="Nhập tên đăng nhập"
        />
      </div>
      <div class="mb-3">
        <label for="password">Mật khẩu:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Nhập mật khẩu"
        />
      </div>
      <button type="submit" class="btn btn-primary">Đăng nhập</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "loginComponent",
};
</script>
<script setup>
import { ref } from "vue";

// Khai báo biến lưu dữ liệu form đăng nhập
const username = ref("");
const password = ref("");

// Hàm xử lý đăng nhập
// eslint-disable-next-line no-undef
const emit = defineEmits(["loggedIn"]);
function handleLogin() {
  if (username.value && password.value) {
    emit("loggedIn", username.value);
  }
}
</script>
<style scoped>
.custom {
  width: 350px;
}
form {
  background-color: white;
}
</style>
