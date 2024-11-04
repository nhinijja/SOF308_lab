<template>
    <div class="container">
      
        <section class="row mt-3">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../assets/banner1.jpg" class="d-block w-100" alt="Slide 1">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/banner2.jpg" class="d-block w-100" alt="Slide 2">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/banner3.jpg" class="d-block w-100" alt="Slide 3">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>

        <!-- Navbar -->
        <nav class="row p-2" style="background-color: #F0F7FF; padding-top: 0;">
            <nav class="navbar navbar-expand-sm">
                <div class="container">
                    <a class="navbar-brand" href="Lab1.html">
                        <img src="../../assets/logo-energy-pilates.png" alt="Logo" style="width: 150px;">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                              <ul class="navbar-nav me-auto">
                                  <li class="nav-item"><a class="nav-link" href="#"><i class="fa-solid fa-list"></i>Bài viết</a></li>
                                  <li class="nav-item"><a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a></li>
                                  <li class="nav-item"><a class="nav-link" href="#"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a></li>
                                  <li class="nav-item"><a class="nav-link" href="#"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a></li>
                                  <li class="nav-item dropdown">
                                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                          <i class="fa-solid fa-user"></i> Tài khoản
                                      </a>
                                      <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                                          <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                                          <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
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
        </nav>

        <section class="row" style="background-color:#D3D3D3;">
                  <aside class="col-4">
                      <div>
                          <h2 class="text-info mb-3">Về tôi</h2>
                          <div class="card blog">
                              <img src="../../assets/avatar.png" class="card-img-top" alt="Avatar">
                              <div class="card-body">
                                  <h5 class="card-title">Giới thiệu bản thân</h5>
                                  <p class="card-text">
                                      Ts. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập <br>
                                      Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống
                                  </p>
                              </div>
                          </div>
                          <h3 class="text-info mt-2">Chuyên mục</h3>
                          <ul class="list-group">
                              <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
                                  <a class="nav-link" href="#">Chế độ tập</a>
                                  <span class="badge bg-primary rounded-pill">12</span>
                              </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center">
                                  <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
                                  <span class="badge bg-primary rounded-pill">15</span>
                              </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center">
                                  <a class="nav-link" href="#">Cảm nang cuộc sống</a>
                                  <span class="badge bg-primary rounded-pill">99</span>
                              </li>
                          </ul>
                      </div>
                  </aside>
                  <article class="col-8">
    <h2 class="text-info mb-3">Blog của tôi</h2>
    <div class="card">
        <div class="row p-2">
            <div class="col-6">
                <span class="title"><strong>Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</strong></span>
                <i class="bi bi-chat"></i>16
                <div class="card">
                    <img src="../../assets/tap-piltes.jpg" alt="Pilates">
                    <p>Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc dài hơn, kéo giãn hơn...</p>
                </div>
            </div>
            <div class="col-6">
                <div class="card p-2 d-flex flex-row align-items-start mb-2">
                    <img src="../../assets/corevalue.jpg" alt="Core Value" class="thumbnail" style="width: 50px; height: 50px; margin-right: 10px;">
                    <div class="content">
                        <span class="title"><strong>Biết ơn đời, đời sẽ thương ta</strong></span>
                        <div class="comments d-flex align-items-center">
                            <i class="bi bi-chat" style="font-size: 14px; margin-right: 5px;"></i>
                            <span>30</span>
                        </div>
                    </div>
                </div>
                <div class="card p-2 d-flex flex-row align-items-start mb-2">
                    <img src="../../assets/orange_300x300.jpg" alt="Orange" class="thumbnail" style="width: 50px; height: 50px; margin-right: 10px;">
                    <div class="content">
                        <span class="title"><strong>9 tác dụng tuyệt vời của quả cam</strong></span>
                        <div class="comments d-flex align-items-center">
                            <i class="bi bi-chat" style="font-size: 14px; margin-right: 5px;"></i>
                            <span>28</span>
                        </div>
                    </div>
                </div>

                <div class="card p-2 d-flex flex-row align-items-start mb-2">
                    <img src="../../assets/sesameoil_300x300.jpg" alt="Sesame Oil" class="thumbnail" style="width: 50px; height: 50px; margin-right: 10px;">
                    <div class="content">
                        <span class="title"><strong>10 công dụng bất ngờ từ dầu dừa</strong></span>
                        <div class="comments d-flex align-items-center">
                            <i class="bi bi-chat" style="font-size: 14px; margin-right: 5px;"></i>
                            <span>15</span>
                        </div>
                    </div>
                </div>

                <div class="card p-2 d-flex flex-row align-items-start mb-2">
                    <img src="../../assets/spinach_300x300.jpg" alt="Spinach" class="thumbnail" style="width: 50px; height: 50px; margin-right: 10px;">
                    <div class="content">
                        <span class="title"><strong>Lợi ích khi ăn rau mỗi ngày</strong></span>
                        <div class="comments d-flex align-items-center">
                            <i class="bi bi-chat" style="font-size: 14px; margin-right: 5px;"></i>
                            <span>12</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <a href="#" class="btn btn-info mt-3 d-block mx-auto mb-2" style="width: 15%;">Xem thêm</a>
            
            <!-- Video Section Start -->
            <div class="col-12 mt-4">
                <h3 class="text-info">VIDEO - ĐỪNG BỎ LỠ</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <img src="../../assets/video1.jpg" alt="Video 1" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">Đi xa hơn để trưởng thành hơn</h5>
                                <p class="card-text">Nơi đây là một hành trình phát triển bản thân mà bạn không nên bỏ qua...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <img src="../../assets/video2.jpg" alt="Video 2" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">Chất lửa cho những ngày cuối năm</h5>
                                <p class="card-text">Hãy giữ nhiệt huyết và động lực trong suốt mùa cuối năm...</p>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="col-md-6 mt-3">
                        <div class="card">
                            <img src="../../assets/video3.jpg" alt="Video 3" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">Ước gì được trở về tuổi thơ</h5>
                                <p class="card-text">Khi nhớ về tuổi thơ, chúng ta thường nhớ đến những ký ức ngọt ngào...</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mt-3">
                        <div class="card">
                            <img src="../../assets/video4.jpg" alt="Video 3" class="card-img-top">
                            <div class="card-body">
                    <h5 class="card-title">Là người dậy thì dài</h5>
                    <p class="card-text">Chặng đường trưởng thành là một hành trình không hồi kết...</p>
                </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Video Section End -->
        </div>
        <a href="#" class="btn btn-info mt-3 d-block mx-auto mb-2" style="width: 15%;">Xem thêm</a>
    </div>
</article>

               
              </section>
              <footer class="row p-3 text-center" style="background-color: grey;">
                  <p style="color: white;"><i class="bi bi-c-circle"></i>Tran Thi Yen Nhi</p>
              </footer>
          </div>
</template>

<script>
export default {
    name: "bai2lab3PY00004",
};
</script>

<style>
/* Custom CSS nếu cần */
.carousel-item img {
    height: 400px;
    object-fit: cover;
}
</style>
