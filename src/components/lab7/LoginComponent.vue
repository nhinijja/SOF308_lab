<!-- <template>
  <div class="col-sm-4 mx-auto mt-5">
    <h2 class="text-center">Đăng nhập</h2>
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
        <div v-if="usernameError" class="text-danger mt-1">
          {{ usernameError }}
        </div>
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
        <div v-if="passwordError" class="text-danger mt-1">
          {{ passwordError }}
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-primary w-100"
        :disabled="isSubmitting"
      >
        Đăng nhập
      </button>
    </form>
    <div v-if="loginError" class="text-danger text-center mt-3">
      {{ loginError }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
const usernameError = ref("");
const passwordError = ref("");
const loginError = ref("");
const isSubmitting = ref(false);

const handleLogin = () => {
  // Reset error messages
  usernameError.value = "";
  passwordError.value = "";
  loginError.value = "";

  // Validate inputs
  if (!username.value) {
    usernameError.value = "Tên đăng nhập không được để trống.";
    return;
  }
  if (!password.value) {
    passwordError.value = "Mật khẩu không được để trống.";
    return;
  }

  isSubmitting.value = true;

  // Giả lập hành động đăng nhập (ví dụ: gọi API)
  setTimeout(() => {
    if (username.value === "admin" && password.value === "12345") {
      // Nếu đăng nhập thành công
      emit("loggedIn", username.value); // Phát sự kiện loggedIn
    } else {
      // Nếu đăng nhập thất bại
      loginError.value = "Tên đăng nhập hoặc mật khẩu không đúng.";
    }
    isSubmitting.value = false;
  }, 1000); // Thời gian giả lập cho việc kiểm tra đăng nhập
};
</script>

<style scoped>
/* Tạo khoảng cách và cân đối cho form */
.col-sm-4 {
  max-width: 400px;
}

form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button {
  margin-top: 10px;
}

.text-danger {
  font-size: 0.875rem;
}

.mt-3 {
  margin-top: 1rem;
}

.mt-1 {
  margin-top: 0.25rem;
}
</style> -->
