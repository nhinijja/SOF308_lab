<template>
  <div class="container">
    <!-- Navbar -->
    <nav class="row p-2" style="background-color: #f0f7ff; padding-top: 0">
      <nav class="navbar navbar-expand-sm">
        <div class="container">
          <router-link class="navbar-brand" to="/bai2lab3">
            <img
              src="../../assets/logo-energy-pilates.png"
              alt="Logo"
              style="width: 150px"
            />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/bai3lab3">
                  <i class="fa-solid fa-list"></i> Bài viết
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/video">
                  <i class="fa-solid fa-film"></i> Video
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/gioithieu">
                  <i class="fa-solid fa-circle-info"></i> Giới thiệu
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/sukien">
                  <i class="fa-solid fa-calendar-days"></i> Sự kiện
                </router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i class="fa-solid fa-user"></i> Tài khoản
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item" to="/login"
                      >Đăng nhập</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/quenmatkhau"
                      >Quên mật khẩu</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/dangky"
                      >Đăng ký thành viên</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav d-flex">
              <li class="nav-item"><a class="nav-link">Tiếng Việt</a></li>
              <li class="nav-item"><a class="nav-link">Tiếng Anh</a></li>
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
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../../assets/banner1.jpg"
                class="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../assets/banner2.jpg"
                class="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../assets/banner3.jpg"
                class="d-block w-100"
                alt="Slide 3"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </nav>
    <!-- Content Section -->
    <section class="row mt-4" style="background-color: #d3d3d3">
      <aside class="col-lg-4 mb-4">
        <div>
          <h3 class="text-info mt-2">Chuyên mục</h3>
          <ul class="list-group">
            <li
              class="list-group-item active bg-info d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Chế độ tập</a>
              <span class="badge bg-primary rounded-pill">12</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
              <span class="badge bg-primary rounded-pill">15</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Cảm nang cuộc sống</a>
              <span class="badge bg-primary rounded-pill">99</span>
            </li>
          </ul>

          <h5 class="fw-bold mb-3">Bài viết nổi bật</h5>
          <div class="row">
            <div class="featured-post mb-4 d-flex post-item p-3 border rounded">
              <img
                src="../../assets/spinach_300x300.jpg"
                alt="Featured 1"
                class="img-thumbnail me-3"
                style="width: 80px; height: 80px; object-fit: cover"
              />
              <p class="mb-0">
                Lợi ích khi ăn rau mỗi ngày
                <br />
                <br />
                Tiêu thụ rau xanh hằng ngày sẽ giúp tăng cường thể lực, kiểm
                soát cân nặng, ngăn ngừa ung thư...
              </p>
            </div>

            <!-- Bài viết nổi bật 2 -->
            <div class="featured-post mb-4 d-flex post-item p-3 border rounded">
              <img
                src="../../assets/orange_300x300.jpg"
                alt="Featured 2"
                class="img-thumbnail me-3"
                style="width: 80px; height: 80px; object-fit: cover"
              />
              <p class="mb-0">
                Tác dụng tuyệt vời của cam với sức khỏe
                <br />
                <br />
                Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng chất
                chống oxy hóa cao..
              </p>
            </div>

            <!-- Bài viết nổi bật 3 -->
            <div class="featured-post mb-4 d-flex post-item p-3 border rounded">
              <img
                src="../../assets/sesameoil_300x300.jpg"
                alt="Featured 3"
                class="img-thumbnail me-3"
                style="width: 80px; height: 80px; object-fit: cover"
              />
              <p class="mb-0">
                10 công dụng bất ngờ của bắp ngô...
                <br />
                <br />
                Dầu dừa như một loại kem dưỡng ẩm từ nhiên cho cơ thể, giúp việc
                sản xuất collagen trong các tế bào...
              </p>
            </div>
          </div>
        </div>
      </aside>

      <article class="col-8">
        <h2 class="text-info mb-3">Tất cả bài viết</h2>
        <div class="row">
          <div class="col-md-6 mb-4">
            <router-link
              to="/bai4lab3"
              class="post-item p-3 border rounded d-block"
            >
              <h6 class="mt-2">Phương pháp tập Pilates giúp phục hồi</h6>
              <img
                src="../../assets/tap-piltes.jpg"
                alt="Post 1"
                class="img-fluid rounded mb-2"
                style="height: 200px; object-fit: cover"
              />
              <p class="small text-muted">
                Người tập thể dục cường độ cao dễ gặp phải những chấn thương.
                Pilates là một phương pháp tập luyện giúp cơ bắp hồi phục và
                giảm nguy cơ chấn thương nhờ vào các bài tập kiểm soát và kéo
                giãn. Đây là lựa chọn tuyệt vời cho những người cần tập thể dục
                mà vẫn muốn bảo vệ cơ thể khỏi tổn thương lâu dài.
              </p>
            </router-link>
          </div>

          <div class="col-md-6 mb-4">
            <div class="post-item p-3 border rounded">
              <h6 class="mt-2">
                Đây là những gì 1 giờ tập Pilates có thể mang lại
              </h6>
              <img
                src="../../assets/tap-pilates1.jpg"
                alt="Post 2"
                class="img-fluid rounded mb-2"
                style="height: 200px; object-fit: cover"
              />
              <p class="small text-muted">
                Được thiết kế để xây dựng cơ bắp, tăng cường sức mạnh và cải
                thiện sự linh hoạt, một giờ tập Pilates có thể mang lại lợi ích
                lớn cho sức khỏe. Pilates không chỉ giúp tăng sức bền mà còn làm
                săn chắc cơ bắp mà không gây áp lực lên khớp. Nó là một cách
                tuyệt vời để duy trì một cơ thể khỏe mạnh và cân đối.
              </p>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="post-item p-3 border rounded">
              <h6 class="mt-2">
                Tập Pilates có thể cải thiện sức khỏe tim mạch
              </h6>
              <img
                src="../../assets/tim-mach.jpg"
                alt="Post 3"
                class="img-fluid rounded mb-2"
                style="height: 200px; object-fit: cover"
              />
              <p class="small text-muted">
                Pilates không chỉ mang lại cho cơ thể một vóc dáng đẹp mà còn
                giúp tăng cường sức khỏe tim mạch. Các bài tập Pilates giúp cải
                thiện tuần hoàn máu và hệ thống hô hấp, từ đó nâng cao khả năng
                chịu đựng của tim. Đây là một phương pháp tập luyện nhẹ nhàng
                nhưng hiệu quả để bảo vệ sức khỏe tim mạch.
              </p>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="post-item p-3 border rounded">
              <h6 class="mt-2">EAT CLEAN: Nên và không nên ăn thực phẩm nào</h6>
              <img
                src="../../assets/eat-clean.png"
                alt="Post 4"
                class="img-fluid rounded mb-2"
                style="height: 200px; object-fit: cover"
              />
              <p class="small text-muted">
                "Eat Clean" là một chế độ ăn uống tập trung vào thực phẩm tươi,
                ít chế biến, giúp giữ nguyên giá trị dinh dưỡng. Để thực hiện
                Eat Clean đúng cách, bạn nên ăn nhiều rau xanh, trái cây, các
                loại hạt, và ngũ cốc nguyên hạt. Tránh xa các loại thực phẩm chế
                biến sẵn, đường tinh luyện, và chất béo bão hòa để có một cơ thể
                khỏe mạnh và cân đối.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- Pagination -->
    <nav aria-label="Page navigation example" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">«</a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">»</a>
        </li>
      </ul>
    </nav>

    <!-- Footer -->
    <footer class="text-center p-3" style="background-color: grey">
      <p style="color: white">
        <i class="bi bi-c-circle"></i> Tran Thi Yen Nhi
      </p>
    </footer>
  </div>
</template>

<script scoped>
export default {
  name: "bai3lab3PY00004",
};
</script>

<style scoped>
.row {
  color: white;
}
router-link,
.router-link-active {
  text-decoration: none !important;
  cursor: pointer;
}

a {
  text-decoration: none !important;
}

a:focus,
a:hover,
a:active {
  text-decoration: none !important;
}
.post-item {
  border-color: white !important;
  background-color: white !important;
  color: black;
}
</style>
