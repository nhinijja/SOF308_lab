<template>
  <div>
    <!-- Form thêm/sửa -->
    <div class="mt-4">
      <h4>{{ isEditing ? "Chỉnh sửa sinh viên" : "Thêm sinh viên mới" }}</h4>
      <form @submit.prevent="saveUser">
        <div class="mb-3">
          <label>Tên:</label>
          <input
            type="text"
            v-model="student.name"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label>Điểm:</label>
          <input
            type="number"
            v-model="student.score"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label>Ngày sinh:</label>
          <input
            type="date"
            v-model="student.dob"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          {{ isEditing ? "Cập nhật" : "Thêm" }}
        </button>

        <button type="button" class="btn btn-secondary" @click="resetForm">
          Reset
        </button>
      </form>
      <h3>Quản lý danh sách sinh viên</h3>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Điểm</th>
            <th>Ngày sinh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.score }}</td>
            <td>{{ student.dob }}</td>
            <td>
              <button class="btn btn-warning" @click="editStudent(index)">
                Sửa
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="deleteStudent(index)">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "Bai4Lab6Component",
  setup() {
    const students = ref([
      { name: "Nguyễn Văn Anh", score: 8.5, dob: "2000-01-01" },
      { name: "Trần Thị Binh", score: 7.8, dob: "2000-05-15" },
    ]);

    // Dữ liệu form hiện tại
    const student = ref({ name: "", score: null, dob: "" });
    const isEditing = ref(false);
    const editingIndex = ref(null);

    const saveUser = () => {
      if (isEditing.value) {
        // Cập nhật sinh viên
        students.value[editingIndex.value] = { ...student.value };
        isEditing.value = false;
        editingIndex.value = null;
      } else {
        students.value.push({ ...student.value });
      }
      resetForm();
    };

    const editStudent = (index) => {
      student.value = { ...students.value[index] };
      isEditing.value = true;
      editingIndex.value = index;
    };

    const deleteStudent = (index) => {
      students.value.splice(index, 1);
    };

    const resetForm = () => {
      student.value = { name: "", score: null, dob: "" };
      isEditing.value = false;
      editingIndex.value = null;
    };

    return {
      students,
      student,
      isEditing,
      editingIndex,
      saveUser,
      editStudent,
      deleteStudent,
      resetForm,
    };
  },
};
</script>
