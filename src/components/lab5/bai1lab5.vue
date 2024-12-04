<template>
  <div class="p-5">
    <p>{{ message }}</p>
    <button
      class="btn btn-dark"
      @click="updateMessage"
    >
      Thay đổi thông điệp
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Bai1Lab5Component", // Đổi tên component để phù hợp quy tắc multi-word
  setup() {
    const message = ref("Thông điệp ban đầu");

    const updateMessage = () => {
      message.value = "Thông điệp đã được thay đổi!";
    };

    return {
      message,
      updateMessage,
    };
  },
};
</script>

<style>
/* CSS tùy chỉnh */
</style>
