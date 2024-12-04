<template>
  <div class="container">
    <div class="table-container">
      <h2 class="table-title">
        Bảng Thành Phần Dinh Dưỡng
      </h2>
      <table class="table table-bordered table-custom">
        <thead>
          <tr>
            <th rowspan="2">
              Thành Phần
            </th>
            <th colspan="2">
              Giá Trị
            </th>
          </tr>
          <tr>
            <th>Khối Lượng</th>
            <th>% DV*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>200 kcal</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Chất Béo</td>
            <td>9 g</td>
            <td>14%</td>
          </tr>
          <tr>
            <td>Chất Béo Bão Hòa</td>
            <td>4 g</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Chất Đạm</td>
            <td>8 g</td>
            <td>16%</td>
          </tr>
          <tr>
            <td>Chất Xơ</td>
            <td>5 g</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Đường</td>
            <td>12 g</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Vitamin</td>
            <td>Vitamin C</td>
            <td>25%</td>
          </tr>
          <tr>
            <td />
            <td>Vitamin D</td>
            <td>10%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bai1lab2PY00004",
};
</script>

<style scoped>
.table-container {
  border: 2px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #ffffff;
}
.table-custom thead th {
  background-color: #ffc107; /* Màu vàng cho tiêu đề */
  color: #000;
}
.table-title {
  color: #e74c3c;
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
