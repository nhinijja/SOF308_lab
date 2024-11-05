<template>
  <div class="container mt-3">
    <!-- Nút mở Modal -->
    <button
      type="button"
      class="btn btn-primary small-btn"
      data-bs-toggle="modal"
      data-bs-target="#authModal"
    >
      Tài khoản
    </button>
    <!-- Modal -->
    <div class="modal fade" id="authModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="authModalLabel">ĐĂNG NHẬP/ĐĂNG KÝ</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container mt-4">
              <!-- Tab Headers -->
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    href="#register"
                    >Đăng Ký</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#login"
                    >Đăng Nhập</a
                  >
                </li>
              </ul>

              <!-- Tab Content -->
              <div class="tab-content">
                <!-- Register Form -->
                <div id="register" class="tab-pane fade show active">
                  <div class="form-container">
                    <h5>Form Đăng Ký Thông Tin</h5>
                    <form>
                      <div class="mb-3">
                        <label for="name" class="form-label">Họ và tên</label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Nhập họ và tên"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Nhập email"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="phone" class="form-label"
                          >Số điện thoại</label
                        >
                        <input
                          type="tel"
                          class="form-control"
                          id="phone"
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="password" class="form-label"
                          >Mật khẩu</label
                        >
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="Nhập mật khẩu"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Giới tính</label>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="Nam"
                          />
                          <label class="form-check-label" for="male">Nam</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="Nữ"
                          />
                          <label class="form-check-label" for="female"
                            >Nữ</label
                          >
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gender"
                            id="other"
                            value="Khác"
                          />
                          <label class="form-check-label" for="other"
                            >Khác</label
                          >
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="birthdate" class="form-label"
                          >Ngày sinh</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          id="birthdate"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="job" class="form-label">Nghề nghiệp</label>
                        <select class="form-select" id="job">
                          <option selected>Chọn nghề nghiệp</option>
                          <option value="1">Lập trình viên</option>
                          <option value="2">Thiết kế đồ họa</option>
                          <option value="3">Kỹ sư</option>
                        </select>
                      </div>
                      <div class="form-check mb-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="agree"
                        />
                        <label class="form-check-label" for="agree">
                          Tôi đồng ý với các điều khoản và điều kiện
                        </label>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Đăng ký
                      </button>
                    </form>
                  </div>
                </div>

                <!-- Login Form -->
                <div id="login" class="tab-pane fade">
                  <div class="form-container">
                    <h5>Form Đăng Nhập</h5>
                    <form>
                      <div class="mb-3">
                        <label for="loginEmail" class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="loginEmail"
                          placeholder="Nhập email"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="loginPassword" class="form-label"
                          >Mật khẩu</label
                        >
                        <input
                          type="password"
                          class="form-control"
                          id="loginPassword"
                          placeholder="Nhập mật khẩu"
                        />
                      </div>
                      <div class="btn-group">
                        <button type="submit" class="btn btn-primary">
                          Đăng Nhập
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bai4lab2PY00004",
};
</script>

<style></style>
