<template>
  <div>
    <!-- Hộp nhập liệu -->
    <input
      v-model="userInput"
      placeholder="Nhập dữ liệu vào đây"
    >
    <!-- Hiển thị dữ liệu đã nhập -->
    <p>Giá trị bạn nhập: {{ userInput }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Bai2Lab5Component", // Đặt tên component theo chuẩn đa từ
  setup() {
    const userInput = ref("FPL"); // Biến phản ứng với giá trị mặc định là "FPL"
    return {
      userInput, // Trả về biến để sử dụng trong template
    };
  },
};
</script>

<style>
/* CSS nếu cần */
</style>
