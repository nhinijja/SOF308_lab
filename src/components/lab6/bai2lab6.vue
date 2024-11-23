<template>
  <div>
    <h3>Nhập tháng:</h3>
    <input type="number" v-model="month" min="1" max="12" />
    <p v-if="month >= 3 && month <= 5">Mùa Xuân</p>
    <p v-else-if="month >= 6 && month <= 8">Mùa Hè</p>
    <p v-else-if="month >= 9 && month <= 11">Mùa Thu</p>
    <p v-else-if="month === 12 || month <= 2">Mùa Đông</p>
    <p v-else>Vui lòng nhập tháng từ 1 đến 12!</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Bai2Lab6Component",

  setup() {
    const month = ref(0);
    return { month };
  },
};
</script>
