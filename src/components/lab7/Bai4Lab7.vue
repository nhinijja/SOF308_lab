<template>
  <div class="center-container">
    <Login v-if="!isLoggedIn" @LoggedIn="handleLoginSuccess" />

    <Comment v-else :username="loggedInUser" />
  </div>
</template>

<script>
export default {
  name: "Lab7Bai4",
};
</script>
<script setup>
import { ref } from "vue";
import Login from "./login.vue";
import Comment from "./comment.vue";

const isLoggedIn = ref(false);
const loggedInUser = ref("");

function handleLoginSuccess(username) {
  loggedInUser.value = username;
  isLoggedIn.value = true;
}
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100vh; /* Chiều cao full trang */
}
</style>
