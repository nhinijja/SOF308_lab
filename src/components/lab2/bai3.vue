<template>
  <div class="container mt-4">
    <!-- Tab Headers -->
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#register"
          >Đăng Ký</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#login">Đăng Nhập</a>
      </li>
    </ul>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Register Form -->
      <div id="register" class="tab-pane fade show active">
        <div class="form-container">
          <h5>Form Đăng Ký Thông Tin</h5>
          <form class="was-validated">
            <div class="mb-3">
              <label for="fullName" class="form-label">Họ và Tên</label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Nhập họ và tên"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng điền vào trường này</div>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Nhập email"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng nhập email hợp lệ</div>
            </div>

            <div class="mb-3">
              <label for="phone" class="form-label">Số Điện Thoại</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                placeholder="Nhập số điện thoại"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng nhập số điện thoại</div>
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Mật khẩu</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Nhập mật khẩu"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng nhập mật khẩu</div>
            </div>

            <div class="mb-3">
              <label for="confirmPassword" class="form-label"
                >Xác Nhận Mật khẩu</label
              >
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                placeholder="Xác nhập mật khẩu"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng xác nhận mật khẩu</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Giới Tính</label>
              <div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    required
                  />
                  <label class="form-check-label" for="male">Nam</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    required
                  />
                  <label class="form-check-label" for="female">Nữ</label>
                </div>
              </div>
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng chọn giới tính</div>
            </div>

            <div class="mb-3">
              <label for="language" class="form-label">Ngôn Ngữ</label>
              <select class="form-select" id="language" required>
                <option selected disabled value="">Chọn ngôn ngữ</option>
                <option>Tiếng Việt</option>
              </select>
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng chọn ngôn ngữ</div>
            </div>

            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="terms"
                required
              />
              <label class="form-check-label" for="terms"
                >Tôi đồng ý với các điều khoản và điều kiện</label
              >
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">
                Bạn cần đồng ý với các điều khoản
              </div>
            </div>

            <div class="btn-group">
              <button type="submit" class="btn btn-primary">Đăng Kí</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Login Form -->
      <div id="login" class="tab-pane fade">
        <div class="form-container">
          <h5>Form Đăng Nhập</h5>

          <form class="was-validated">
            <div class="mb-3">
              <label for="loginEmail" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="loginEmail"
                placeholder="Nhập email"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng nhập email hợp lệ</div>
            </div>

            <div class="mb-3">
              <label for="loginPassword" class="form-label">Mật Khẩu</label>
              <input
                type="password"
                class="form-control"
                id="loginPassword"
                placeholder="Nhập mật khẩu"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng nhập mật khẩu</div>
            </div>
            <div class="btn-group">
              <button type="submit" class="btn btn-primary">Đăng Nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bai3lab2PY00004",
};
</script>

<style></style>
