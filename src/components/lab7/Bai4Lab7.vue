<!-- <template>
  <div class="container mt-5">
    <LoginComponent
      v-if="!isLoggedIn"
      @login-success="handleLogin"
    />
    <CommentComponent
      v-else
      @logout="handleLogout"
    />
  </div>
</template>
<script>
export default {
  name: "Bai4Lab7Component",
};
</script>
<script setup>
import { ref } from "vue";
import LoginComponent from "./LoginComponent.vue";
import CommentComponent from "./CommentComponent.vue";

// State quản lý trạng thái đăng nhập
const isLoggedIn = ref(false);

// Hàm xử lý khi người dùng đăng nhập
const handleLogin = (username) => {
  isLoggedIn.value = true;
  console.log(`Người dùng ${username} đã đăng nhập.`);
};

// Hàm xử lý khi người dùng đăng xuất
const handleLogout = () => {
  isLoggedIn.value = false;
};
</script> -->
