<template>
  <div class="container">
    <!-- Navbar -->
    <nav
      class="row p-2"
      style="background-color: #f0f7ff; padding-top: 0"
    >
      <nav class="navbar navbar-expand-sm">
        <div class="container">
          <router-link
            class="navbar-brand"
            to="/bai2lab3"
          >
            <img
              src="../../assets/logo-energy-pilates.png"
              alt="Logo"
              style="width: 150px"
            >
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            id="collapsibleNavbar"
            class="collapse navbar-collapse"
          >
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/bai3lab3"
                >
                  <i class="fa-solid fa-list" /> Bài viết
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/video"
                >
                  <i class="fa-solid fa-film" /> Video
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/gioithieu"
                >
                  <i class="fa-solid fa-circle-info" /> Giới thiệu
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/sukien"
                >
                  <i class="fa-solid fa-calendar-days" /> Sự kiện
                </router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i class="fa-solid fa-user" /> Tài khoản
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="/login"
                    >
                      Đăng nhập
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="/quenmatkhau"
                    >
                      Quên mật khẩu
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="/dangky"
                    >
                      Đăng ký thành viên
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav d-flex">
              <li class="nav-item">
                <a class="nav-link">Tiếng Việt</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Tiếng Anh</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section class="row mt-3">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../../assets/banner1.jpg"
                class="d-block w-100"
                alt="Slide 1"
              >
            </div>
            <div class="carousel-item">
              <img
                src="../../assets/banner2.jpg"
                class="d-block w-100"
                alt="Slide 2"
              >
            </div>
            <div class="carousel-item">
              <img
                src="../../assets/banner3.jpg"
                class="d-block w-100"
                alt="Slide 3"
              >
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
            />
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            />
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </nav>

    <!-- Content Section -->
    <section class="row bg-light mt-4">
      <div class="row mt-4">
        <div class="col-md-8">
          <h2 class="text-primary">
            Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
          </h2>
          <img
            src="../../assets/tap-piltes.jpg"
            class="img-fluid my-3"
            alt="Pilates"
          >

          <p>
            Tập Pilates rất tốt cho sức khỏe và là một loại hình tập luyện thể
            chất toàn diện. Phương pháp tập này nhằm cải thiện độ linh hoạt của
            cơ thể, tăng cường cơ bắp và hỗ trợ giảm stress. Với các động tác
            kéo giãn cơ bản, Pilates có thể giúp làm dài và mạnh các cơ trong cơ
            thể, từ đó giúp hồi phục và bảo vệ cột sống của bạn.
          </p>

          <h3>Pilates giúp phục hồi chấn thương cột sống nhanh chóng</h3>
          <p>
            Phương pháp tập luyện Pilates nhắm vào các nhóm cơ nhỏ và sâu. Điều
            này giúp giảm áp lực cho các vùng cơ lớn và giảm căng thẳng cho cột
            sống. Nhiều người tập Pilates đã báo cáo về việc cải thiện rõ rệt
            khả năng linh hoạt và sức khỏe cột sống sau một thời gian tập luyện.
          </p>

          <img
            src="../../assets/tap-pilates1.jpg"
            class="img-fluid my-3"
            alt="Pilates Cat Cow"
          >
          <h3>Phương pháp tập Pilates Cat Cow</h3>
          <ul>
            <li>
              Bắt đầu với tư thế 4 điểm, với tay và chân trên mặt đất, hông và
              vai thẳng hàng.
            </li>
            <li>Hít vào và nâng đầu lên, đồng thời cong lưng xuống.</li>
            <li>Thở ra và cuộn cột sống lại, đưa cằm về phía ngực.</li>
          </ul>
          <p>
            Thực hiện động tác này từ 5-10 lần để giúp tăng cường độ dẻo dai và
            giảm căng thẳng cho cột sống.
          </p>

          <h3>Kết luận</h3>
          <p>
            Tập Pilates là phương pháp tuyệt vời giúp phục hồi cột sống và tăng
            cường sức khỏe. Thực hiện đều đặn sẽ mang lại hiệu quả tốt nhất cho
            sức khỏe của bạn.
          </p>
        </div>

        <!-- Sidebar with Comment Section -->
        <div class="col-md-4">
          <h3 class="text-info">
            Bình luận và viết tại đây
          </h3>
          <textarea
            v-model="newComment"
            class="form-control mb-3"
            rows="5"
            placeholder="Viết bình luận của bạn..."
          />
          <button
            class="btn btn-primary w-100"
            @click="submitComment"
          >
            Gửi bình luận
          </button>

          <h3 class="text-info mt-4">
            Danh sách các bình luận
          </h3>
          <ul class="list-group">
            <li
              v-for="(comment, index) in comments"
              :key="index"
              class="list-group-item"
            >
              {{ comment }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="row bg-dark text-white p-4 mt-4">
      <div class="col-md-12 text-center">
        <p>Trần Thị Yến Nhi.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newComment: "",
      comments: [],
    };
  },
  created() {
    // Khi trang được tải, lấy các bình luận đã lưu từ localStorage (nếu có)
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  },
  methods: {
    submitComment() {
      if (this.newComment.trim()) {
        this.comments.push(this.newComment.trim());

        localStorage.setItem("comments", JSON.stringify(this.comments));

        this.newComment = "";
      } else {
        alert("Vui lòng nhập bình luận.");
      }
    },
  },
};
</script>
