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
    <div
      id="authModal"
      class="modal fade"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              id="authModalLabel"
              class="modal-title"
            >
              ĐĂNG NHẬP/ĐĂNG KÝ
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div class="modal-body">
            <div class="container mt-4">
              <!-- Tab Headers -->
              <ul
                class="nav nav-tabs"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    href="#register"
                  >Đăng Ký</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    href="#login"
                  >Đăng Nhập</a>
                </li>
              </ul>

              <!-- Tab Content -->
              <div class="tab-content">
                <!-- Register Form -->
                <div
                  id="register"
                  class="tab-pane fade show active"
                >
                  <div class="form-container">
                    <h5>Form Đăng Ký Thông Tin</h5>
                    <form class="was-validated">
                      <div class="mb-3">
                        <label
                          for="fullName"
                          class="form-label"
                        >Họ và Tên</label>
                        <input
                          id="fullName"
                          type="text"
                          class="form-control"
                          placeholder="Nhập họ và tên"
                          required
                        >
                        <div class="valid-feedback">
                          Hợp lệ
                        </div>
                        <div class="invalid-feedback">
                          Vui lòng điền vào trường này
                        </div>
                      </div>

                      <div class="mb-3">
                        <label
                          for="email"
                          class="form-label"
                        >Email</label>
                        <input
                          id="email"
                          type="email"
                          class="form-control"
                          placeholder="Nhập email"
                          required
                        >
                        <div class="valid-feedback">
                          Hợp lệ
                        </div>
                        <div class="invalid-feedback">
                          Vui lòng nhập email hợp lệ
                        </div>
                      </div>

                      <div class="mb-3">
                        <label
                          for="phone"
                          class="form-label"
                        >Số Điện Thoại</label>
                        <input
                          id="phone"
                          type="tel"
                          class="form-control"
                          placeholder="Nhập số điện thoại"
                          required
                        >
                        <div class="valid-feedback">
                          Hợp lệ
                        </div>
                        <div class="invalid-feedback">
                          Vui lòng nhập số điện thoại
                        </div>
                      </div>

                      <div class="mb-3">
                        <label
                          for="password"
                          class="form-label"
                        >Mật khẩu</label>
                        <input
                          id="password"
                          type="password"
                          class="form-control"
                          placeholder="Nhập mật khẩu"
                          required
                        >
                        <div class="valid-feedback">
                          Hợp lệ
                        </div>
                        <div class="invalid-feedback">
                          Vui lòng nhập mật khẩu
                        </div>
                      </div>

                      <div class="mb-3">
                        <label
                          for="confirmPassword"
                          class="form-label"
                        >Xác Nhận Mật khẩu</label>
                        <input
                          id="confirmPassword"
                          type="password"
                          class="form-control"
                          placeholder="Xác nhập mật khẩu"
                          required
                        >
                        <div class="valid-feedback">
                          Hợp lệ
                        </div>
                        <div class="invalid-feedback">
                          Vui lòng xác nhận mật khẩu
                        </div>
                      </div>

                      <div class="mb-3">
                        <label class="form-label">Giới Tính</label>
                        <div>
                          <div class="form-check form-check-inline">
                            <input
                              id="male"
                              class="form-check-input"
                              type="radio"
                              name="gender"
                              required
                            >
                            <label
                              class="form-check-label"
                              for="male"
                            >Nam</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              id="female"
                              class="form-check-input"
                              type="radio"
                              name="gender"
                              required
                            >
                            <label
                              class="form-check-label"
                              for="female"
                            >Nữ</label>
                          </div>
                        </div>
                        <div class="valid-feedback">
                          Hợp lệ
                        </div>
                        <div class="invalid-feedback">
                          Vui lòng chọn giới tính
                        </div>
                      </div>

                      <div class="mb-3">
                        <label
                          for="language"
                          class="form-label"
                        >Ngôn Ngữ</label>
                        <select
                          id="language"
                          class="form-select"
                          required
                        >
                          <option
                            selected
                            disabled
                            value=""
                          >
                            Chọn ngôn ngữ
                          </option>
                          <option>Tiếng Việt</option>
                        </select>
                        <div class="valid-feedback">
                          Hợp lệ
                        </div>
                        <div class="invalid-feedback">
                          Vui lòng chọn ngôn ngữ
                        </div>
                      </div>

                      <div class="mb-3 form-check">
                        <input
                          id="terms"
                          type="checkbox"
                          class="form-check-input"
                          required
                        >
                        <label
                          class="form-check-label"
                          for="terms"
                        >Tôi đồng ý với các điều khoản và điều kiện</label>
                        <div class="valid-feedback">
                          Hợp lệ
                        </div>
                        <div class="invalid-feedback">
                          Bạn cần đồng ý với các điều khoản
                        </div>
                      </div>

                      <div class="btn-group">
                        <button
                          type="submit"
                          class="btn btn-primary"
                        >
                          Đăng Kí
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <!-- Login Form -->
            <div
              id="login"
              class="tab-pane fade"
            >
              <div class="form-container">
                <h5>Form Đăng Nhập</h5>
                <form class="was-validated">
                  <div class="mb-3">
                    <label
                      for="loginEmail"
                      class="form-label"
                    >Email</label>
                    <input
                      id="loginEmail"
                      type="email"
                      class="form-control"
                      placeholder="Nhập email"
                      required
                    >
                    <div class="valid-feedback">
                      Hợp lệ
                    </div>
                    <div class="invalid-feedback">
                      Vui lòng nhập email hợp lệ
                    </div>
                  </div>

                  <div class="mb-3">
                    <label
                      for="loginPassword"
                      class="form-label"
                    >Mật Khẩu</label>
                    <input
                      id="loginPassword"
                      type="password"
                      class="form-control"
                      placeholder="Nhập mật khẩu"
                      required
                    >
                    <div class="valid-feedback">
                      Hợp lệ
                    </div>
                    <div class="invalid-feedback">
                      Vui lòng nhập mật khẩu
                    </div>
                  </div>
                  <div class="btn-group">
                    <button
                      type="submit"
                      class="btn btn-primary"
                    >
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
</template>

<script>
export default {
  name: "Bai4lab2PY00004",
};
</script>

<style></style>
