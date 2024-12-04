<template>
  <div class="container mt-5">
    <h1 class="text-center">
      Kiến thức sức khỏe cộng đồng
    </h1>
    <div class="row">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="col-sm-4 mb-4"
      >
        <div class="card">
          <img
            :src="item.image"
            alt="Hình ảnh"
            class="card-img-top custom-img"
          >
          <div class="card-body">
            <h3 class="card-title">
              {{ item.title }}
            </h3>
            <p class="card-text">
              {{ item.content }}
            </p>
            <button class="btn btn-info">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

// Import hình ảnh
import img1 from "../../assets/orange_300x300.jpg";
import img2 from "../../assets/sesameoil_300x300.jpg";
import img3 from "../../assets/spinach_300x300.jpg";

export default {
  name: "Bai3Lab6Component",
  setup() {
    const items = ref([
      {
        title: "8 loại rau củ quả giàu canxi",
        content:
          "Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất...",
        image: img1,
      },
      {
        title: "Các loại gia vị tốt cho sức khỏe",
        content:
          "Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác...",
        image: img2,
      },
      {
        title: "9 loại đậu bổ dưỡng nên dùng nhiều",
        content:
          "Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất...",
        image: img3,
      },
    ]);

    return {
      items,
    };
  },
};
</script>

<style scoped></style>
